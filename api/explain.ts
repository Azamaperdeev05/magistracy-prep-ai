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

    // 3. Process AI Explanation Call (Qwen API with DeepSeek API Fallback)
    const { systemPrompt, userPrompt, history } = await request.json();
    
    const qwenApiKey = process.env.QWEN_API_KEY || "sk-ws-H.HYLMII.uSEl.MEUCIQDyIG4MXUhrNX2qB87wzsfHPjnHAv4b9bqNHmzEmIAuSQIgBZcVpnQ6lvEhYBgHQLQfr57QfVct57_WWDSahG7Wl-8";
    const qwenApiUrl = process.env.QWEN_API_URL || "https://ws-0xupo36814pi68qv.ap-southeast-1.maas.aliyuncs.com/compatible-mode/v1";
    const qwenModel = process.env.QWEN_MODEL || "qwen-turbo";

    const deepseekApiKey = process.env.DEEPSEEK_API_KEY || "";
    const deepseekApiUrl = process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1";

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(history || []).map((h: any) => ({ role: h.role, content: h.content })),
      { role: 'user', content: userPrompt }
    ];

    let result = "";

    // Try Qwen API
    if (qwenApiKey) {
      try {
        const qwenRes = await fetch(`${qwenApiUrl.replace(/\/$/, '')}/chat/completions`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${qwenApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: qwenModel,
            messages,
            temperature: 0.6
          })
        });

        if (qwenRes.ok) {
          const data = await qwenRes.json();
          result = data.choices?.[0]?.message?.content || "";
        } else {
          console.warn("[AI API] Qwen API returned status:", qwenRes.status);
        }
      } catch (err) {
        console.warn("[AI API] Qwen API fetch failed:", err);
      }
    }

    // Fallback to DeepSeek API if Qwen did not return a result
    if (!result && deepseekApiKey) {
      try {
        const deepseekRes = await fetch(`${deepseekApiUrl.replace(/\/$/, '')}/chat/completions`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${deepseekApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: 'deepseek-chat',
            messages,
            temperature: 0.6
          })
        });

        if (deepseekRes.ok) {
          const data = await deepseekRes.json();
          result = data.choices?.[0]?.message?.content || "";
        }
      } catch (err) {
        console.warn("[AI API] DeepSeek API fetch failed:", err);
      }
    }

    if (!result) {
      console.warn("[AI API] Both Qwen and DeepSeek endpoints failed/unreachable. Returning structured fallback explanation.");
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
