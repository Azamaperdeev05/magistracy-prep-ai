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

    // 3. Process DeepSeek AI Call
    const { systemPrompt, userPrompt, history } = await request.json();
    const apiKey = process.env.DEEPSEEK_API_KEY || "";
    const apiUrl = process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1";

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'DeepSeek API кілті бапталмаған.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await fetch(`${apiUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: systemPrompt },
          ...(history || []).map((h: any) => ({ role: h.role, content: h.content })),
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.6
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(JSON.stringify({ error: `DeepSeek API қатесі: ${errText}` }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content || "";

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
