export const config = {
  runtime: 'edge',
};

function decodeJwtPayload(token: string): any {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const payloadUrl = parts[1];
  const base64 = payloadUrl.replace(/-/g, '+').replace(/_/g, '/');
  try {
    const jsonPayload = atob(base64);
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Extract ID Token from Authorization header
  const authHeader = request.headers.get('Authorization') || "";
  if (!authHeader.startsWith('Bearer ')) {
    return new Response(JSON.stringify({ error: 'Рұқсат берілмеген. Жүйеге кіру қажет.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const idToken = authHeader.substring(7);
  const payload = decodeJwtPayload(idToken);
  if (!payload || !payload.sub) {
    return new Response(JSON.stringify({ error: 'Рұқсат берілмеген. Токен жарамсыз.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const uid = payload.sub;
  const projectId = process.env.VITE_FIREBASE_PROJECT_ID || "magistracy-prep-ai-2026";
  const docUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${uid}`;

  try {
    // 1. Fetch user profile from Firestore REST API (automatically verifies signature & token validity)
    const docRes = await fetch(docUrl, {
      headers: {
        'Authorization': `Bearer ${idToken}`
      }
    });

    if (docRes.status === 401 || docRes.status === 403) {
      return new Response(JSON.stringify({ error: 'Авторизация қатесі немесе токен мерзімі өткен.' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let isPremium = false;
    let queriesToday = 0;
    let queriesDate = "";

    if (docRes.ok) {
      const docData = await docRes.json();
      isPremium = docData.fields?.is_premium?.booleanValue ?? false;
      queriesToday = parseInt(docData.fields?.ai_queries_today?.integerValue ?? "0");
      queriesDate = docData.fields?.ai_queries_date?.stringValue ?? "";
    }

    // 2. Enforce limits for free users
    const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Almaty' });

    if (!isPremium) {
      if (queriesDate === todayStr && queriesToday >= 10) {
        return new Response(JSON.stringify({ error: 'Күнделікті ИИ сұрақтар шегінен асып кеттіңіз! (Шектеу: күніне 10 сұрақ). Шексіз қолдану үшін Premium жазылымға өтіңіз.' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 3. Process AI Explanation Call (OpenRouter Ultra-Fast AI Engine)
    const { systemPrompt, userPrompt, history } = await request.json();
    
    const openrouterApiKey = process.env.OPENROUTER_API_KEY || "";
    const openrouterApiUrl = process.env.OPENROUTER_API_URL || "https://openrouter.ai/api/v1";
    const openrouterModel = process.env.OPENROUTER_MODEL || "google/gemma-4-26b-a4b-it:free";

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(history || []).map((h: any) => ({ role: h.role, content: h.content })),
      { role: 'user', content: userPrompt }
    ];

    let result = "";

    // OpenRouter API (High-quality Kazakh model, 8.5s timeout)
    if (openrouterApiKey) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8500);

        const orRes = await fetch(`${openrouterApiUrl.replace(/\/$/, '')}/chat/completions`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openrouterApiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://magis-core.vercel.app',
            'X-Title': 'MagisCore AI'
          },
          body: JSON.stringify({
            model: openrouterModel,
            messages,
            max_tokens: 450,
            temperature: 0.5
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (orRes.ok) {
          const data = await orRes.json();
          let rawContent = data.choices?.[0]?.message?.content || "";
          
          // Sanitize reasoning text / chain of thought leak if any
          rawContent = rawContent.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
          rawContent = rawContent.replace(/^We need to respond[\s\S]*?\n\n/gi, '').trim();
          rawContent = rawContent.replace(/^Let's craft[\s\S]*?\n\n/gi, '').trim();
          rawContent = rawContent.replace(/^The user asks[\s\S]*?\n\n/gi, '').trim();

          result = rawContent;
        } else {
          console.warn("[AI API] OpenRouter API returned status:", orRes.status);
        }
      } catch (err: any) {
        console.warn("[AI API] OpenRouter API fetch failed/timed out:", err.message || err);
      }
    }

    if (!result) {
      console.warn("[AI API] OpenRouter endpoint unreachable or timed out. Returning structured fallback explanation.");
      // Extract prompt text lines to construct a clear educational response
      const promptLines = (userPrompt || '').split('\n').filter(Boolean);
      const mainQuestion = promptLines.find((l: string) => l.includes('Сұрақ:')) || promptLines[0] || '';
      const correctAns = promptLines.find((l: string) => l.includes('Дұрыс жауап:')) || '';

      result = `📌 **Сұрақты талдау (MagisCore AI)**:\n\n` +
               `${mainQuestion}\n` +
               `${correctAns ? `${correctAns}\n\n` : ''}` +
               `**Түсініктеме:**\n` +
               `Бұл тапсырмада берілген шарты мен ережелерін мұқият талдау қажет. Дұрыс жауап логикалық есептеулер мен ережелерге негізделген.`;
    }

    // 4. Update the usage count in Firestore
    const fields: any = {
      ai_queries_today: {
        integerValue: (queriesDate === todayStr ? queriesToday + 1 : 1).toString()
      },
      ai_queries_date: {
        stringValue: todayStr
      }
    };

    let updateMask = "updateMask.fieldPaths=ai_queries_today&updateMask.fieldPaths=ai_queries_date";
    if (docRes.status === 404) {
      fields.is_premium = { booleanValue: false };
      updateMask += "&updateMask.fieldPaths=is_premium";
    }

    // We make a PATCH request to save/increment statistics
    await fetch(`${docUrl}?${updateMask}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${idToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields })
    });

    return new Response(JSON.stringify({ result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Ішкі сервер қатесі орын алды' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
