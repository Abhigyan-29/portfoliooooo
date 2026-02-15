const projects = [
  {
    title: "Promptsmint",
    description:
      "A curated prompt library with optimized prompts for business and personal tasks across domains.",
    image: "https://via.placeholder.com/800x500",
    tags: ["AI", "Prompts", "Productivity"],
    visit: "#",
    github: "#",
    status: "active",
  },
  {
    title: "portfolio Website",
    description:
      "Crafted from scratch with Next.js, TailwindCSS and modern UI principles.",
    image: "https://via.placeholder.com/800x500",
    tags: ["Personal"],
    visit: "#",
    github: null,
    status: "active",
  },
  {
    title: "AidenGPT",
    description:
      "AI-powered productivity platform with 20+ tools for writing, SEO and automation.",
    image: "https://via.placeholder.com/800x500",
    tags: ["AI", "Tools"],
    visit: "#",
    github: "#",
    status: "active",
  },
  {
    title: "godaddycheck",
    description:
      "Python package & CLI tool for checking domain availability using GoDaddy API.",
    image: "https://via.placeholder.com/800x500",
    tags: ["Python", "CLI"],
    visit: "#",
    github: "#",
    status: "active",
  },
]

const Projects = () => {
  return (
    <div className="ml-72 px-24 py-20">

      {/* Heading */}
      <h1 className="text-5xl font-semibold mb-3">Projects</h1>
      <p className="text-gray-400 mb-12">
        Playground – Small MVP to Production Apps
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-[#141414]
              border border-[#262626]
              rounded-2xl
              overflow-hidden
              hover:-translate-y-2
              hover:border-gray-500
              transition-all duration-300
            "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-6">

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                {project.status === "active" && (
                  <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                    active
                  </span>
                )}
              </div>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                {project.visit && (
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-sm px-4 py-1 rounded hover:opacity-80 transition"
                  >
                    Visit
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 text-sm px-4 py-1 rounded hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#1f1f1f] border border-[#2a2a2a] px-3 py-1 rounded-full text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
