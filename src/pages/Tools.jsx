import {
  Code2,
  MessageSquare,
  Notebook,
  Terminal,
  PenTool,
  Sparkles
} from "lucide-react"

const tools = [
  { name: "Cursor", category: "IDE", icon: Code2 },
  { name: "ChatGPT", category: "Productivity", icon: Sparkles },
  { name: "Notion", category: "Productivity", icon: Notebook },
  { name: "PyCharm", category: "IDE", icon: Terminal },
  { name: "Slack", category: "Communication", icon: MessageSquare },
  { name: "Medium", category: "Writing", icon: PenTool },
]

const Tools = () => {
  return (
    <div className="ml-72 px-24 py-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-semibold mb-4">Shovels</h1>
        <p className="text-gray-400 text-lg">
          Tools I frequently use to make life easier
        </p>
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}

        </div>
      </div>

    </div>
  )
}

const ToolCard = ({ tool }) => {
  const Icon = tool.icon

  return (
    <div
      className="
        w-[260px]
        bg-[#1b1b1b]
        border border-[#262626]
        rounded-xl
        px-6 py-5
        flex items-center gap-4
        hover:-translate-y-2
        hover:bg-[#202020]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
        transition-all duration-300
      "
    >
      {/* Icon Box */}
      <div className="w-12 h-12 flex items-center justify-center bg-[#141414] rounded-lg">
        <Icon size={22} className="text-gray-300" />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-semibold">{tool.name}</h3>
        <p className="text-sm text-gray-400">{tool.category}</p>
      </div>
    </div>
  )
}

export default Tools
