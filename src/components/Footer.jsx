import { useEffect, useState } from "react"

const Footer = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="
      fixed bottom-0 left-72 right-0
      bg-[#111111]
      border-t border-[#262626]
      px-10 py-4
      text-sm text-gray-400
      flex items-center justify-between
    ">

      {/* Left */}
      <div className="hover:text-white cursor-pointer transition">
        Made by Abhigyan | © 2026
      </div>

      

      {/* Right */}
      <div>
        {time}
      </div>

    </div>
  )
}

export default Footer
