import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ai", async (req, res) => {
  const { category } = req.body;

  // 🎯 CATEGORY-SPECIFIC PROMPTS
  const prompts = {
    retail: `
Give 3 PREMIUM insights for RETAIL brands in Dubai Hills Mall.

Focus on:
- Luxury & global brands
- Customer behavior (shopping patterns)
- Revenue opportunity

Be specific and different from dining & entertainment.
Use bullet points.
`,

    dining: `
Give 3 PREMIUM insights for DINING businesses in Dubai Hills Mall.

Focus on:
- Cafes, fine dining, food courts
- Peak hours & customer behavior
- Revenue strategy (high turnover vs premium dining)

Be different from retail & entertainment.
Use bullet points.
`,

    entertainment: `
Give 3 PREMIUM insights for ENTERTAINMENT in Dubai Hills Mall.

Focus on:
- Events, gaming, experiences
- Audience engagement & dwell time
- Monetization strategies

Make it exciting and strategic.
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
              "You are a high-end commercial real estate strategist. Be sharp, premium, and insightful.",
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

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    // 🔥 fallback per category (important for demo)
    const fallback = {
      retail: `
• High luxury brand demand with premium footfall
• Strong impulse buying zones near anchor stores
• High ROI for flagship and experiential retail
`,
      dining: `
• Peak traffic during evenings & weekends
• High turnover potential in casual dining
• Premium margins in fine dining concepts
`,
      entertainment: `
• Drives extended dwell time (2–3x increase)
• Strong synergy with dining & retail zones
• High monetization via events & experiences
`,
    };

    res.json({
      choices: [
        {
          message: {
            content: fallback[category] || fallback.retail,
          },
        },
      ],
    });
  }
});

app.listen(5000, () => {
  console.log("🚀 AI server running on http://localhost:5000");
});