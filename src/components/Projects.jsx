const Projects = () => {
  const projects = [
    {
      title: "TaskPro Dashboard",
      desc: "Premium productivity dashboard built with React",
    },
    {
      title: "AI Virtual Assistant",
      desc: "AI-based HR assistant project",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="p-8 bg-gray-900 rounded-2xl hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-gray-400">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
