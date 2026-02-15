import { useEffect, useState } from "react"
import { FileHeartIcon } from "lucide-react"
import DynamicResumeText from "../components/DynamicResumeText"
import { motion } from "framer-motion";
const Home = () => {
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
       const res = await fetch(
  `https://gnews.io/api/v4/search?q=AI&lang=en&max=1&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`
)
        const data = await res.json()

        if (data.articles && data.articles.length > 0) {
          setNews(data.articles[0])
        }
      } catch (error) {
        console.error("Error fetching news:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    
    <div className="ml-72 p-16 max-w-full">

      {/* Heading */}
     <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-[56px] font-semibold tracking-tight"
>
  Hey, I'm{" "}
  <span className="relative inline-block">
    {/* Selection Background */}
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute left-0 top-0 h-full bg-purple-500/40 z-0"
    />

    {/* Text */}
    <span className="relative z-10">
      Abhigyan
    </span>
  </span>
</motion.h1>


      <h2 className="text-[36px] font-bold text-gray-400 mb-10">
        full-Stack Developer
      </h2>

      {/* Resume Card */}
      <div
        className="
          bg-[#1b1b1b]
          border border-[#262626]
          rounded-xl px-6 py-4 mb-10
          flex items-center justify-between
          hover:bg-[#202020]
          transition
        "
      >
        <div className="flex items-center gap-4 text-[16px] font-semibold text-gray-300">
          <FileHeartIcon size={20} />
          <DynamicResumeText />

        </div>

        <a
          href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white text-black font-bold
            text-sm px-5 py-1 rounded
            hover:opacity-80 hover:scale-105 active:scale-95
            transition-all duration-200
          "
        >
          My Resume
        </a>
      </div>

      {/* About Text */}
      <p className="text-[17px] text-gray-300 leading-relaxed mb-6">
        I turn fuzzy ideas into live Products <em>(quickly)</em> full-stack AI Builder.
      </p>

      <p className="text-[17px] text-gray-300 leading-relaxed mb-14">
        You can talk to me about <strong className="text-white">AI, new ideas, life</strong>.
      </p>

      {/* Dynamic News Card */}
      {loading ? (
        <div className="text-gray-400">Loading latest AI news...</div>
      ) : news ? (
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-[#1b1b1b]
            border border-[#262626]
            rounded-2xl p-6
            flex gap-6
            hover:-translate-y-1
            hover:bg-[#202020]
            transition-all duration-300
          "
        >
          <img
            src={news.image}
            alt="news"
            className="w-52 h-32 object-cover rounded-xl"
          />

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Latest AI News
            </p>

            <h3 className="text-xl font-semibold mt-2">
              {news.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {news.description}
            </p>

            <p className="mt-4 text-white font-medium">
              Read more →
            </p>
          </div>
        </a>
      ) : (
        <div className="text-gray-400">No news available.</div>
      )}

    </div>
  )
}

export default Home
