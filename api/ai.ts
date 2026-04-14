import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { category } = req.body;

  const prompts: any = {
    retail: `
Give 3 PREMIUM insights for RETAIL brands in Dubai Hills Mall.

Focus on:
- Luxury brands
- Shopping behavior
- Revenue potential

Use bullet points.
`,

    dining: `
Give 3 PREMIUM insights for DINING in Dubai Hills Mall.

Focus on:
- Cafes & restaurants
- Peak hours
- Revenue strategy

Use bullet points.
`,

    entertainment: `
Give 3 PREMIUM insights for ENTERTAINMENT in Dubai Hills Mall.

Focus on:
- Experiences
- Engagement
- Monetization

Use bullet points.
`,
  };

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content:
              "You are a premium commercial strategist. Keep answers sharp and business-focused.",
          },
          {
            role: "user",
            content: prompts[category] || prompts.retail,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error(error.response?.data || error.message);

    return res.status(200).json({
      choices: [
        {
          message: {
            content:
              "• High premium audience\n• Strong brand visibility\n• High ROI zones across categories",
          },
        },
      ],
    });
  }
}