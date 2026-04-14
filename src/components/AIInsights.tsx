import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AIInsights = () => {
  const [type, setType] = useState("retail");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");

  const fetchInsights = async (category: string) => {
    setType(category);
    setLoading(true);
    setResult("");

    try {
      const res = await axios.post("http://localhost:5000/api/ai", {
        category,
      });

      setResult(res.data.choices[0].message.content);
    } catch (err) {
      console.error(err);
      setResult("⚠️ Failed to fetch AI insights. Make sure backend is running.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto text-center">

      <h3 className="text-2xl font-bold mb-4">
        🤖 AI Opportunity Insights
      </h3>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {["retail", "dining", "entertainment"].map((cat) => (
          <button
            key={cat}
            onClick={() => fetchInsights(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              type === cat
                ? "bg-white text-black"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* OUTPUT */}
      <div className="text-gray-300 min-h-[120px] flex items-center justify-center">

        {loading ? (
          <p className="text-white/60 animate-pulse">
            Generating insights...
          </p>
        ) : result ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="whitespace-pre-line leading-relaxed"
          >
            {result}
          </motion.p>
        ) : (
          <p className="text-white/40">
            Click a category to generate AI insights
          </p>
        )}

      </div>
    </div>
  );
};

export default AIInsights;