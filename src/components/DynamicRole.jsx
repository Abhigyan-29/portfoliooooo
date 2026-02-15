import { useEffect, useState } from "react"

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "Product Builder",
  "ML Enthusiast",
  "Open Source Contributor"
]

const DynamicRole = () => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (index === roles.length) return setIndex(0)

    if (subIndex === roles[index].length + 1 && !deleting) {
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
    }, deleting ? 40 : 80)

    setText(roles[index].substring(0, subIndex))

    return () => clearTimeout(timeout)

  }, [subIndex, index, deleting])

  return (
    <p className="text-sm text-gray-400">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  )
}

export default DynamicRole
