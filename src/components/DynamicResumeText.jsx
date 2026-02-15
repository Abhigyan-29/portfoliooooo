import { useEffect, useState } from "react"

const phrases = [
  "Explore my resume",
  "View my professional journey",
  "See how I build products",
  "Download my resume"
]

const DynamicResumeText = () => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (index === phrases.length) return setIndex(0)

    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000)
      return
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => prev + 1)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? 40 : 70)

    setText(phrases[index].substring(0, subIndex))

    return () => clearTimeout(timeout)

  }, [subIndex, index, deleting])

  return (
    <span className="relative">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  )
}

export default DynamicResumeText
