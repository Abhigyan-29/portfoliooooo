const Skills = () => {
  const skills = ["React", "Node.js", "MongoDB", "Tailwind", "JavaScript", "Java"]

  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="px-6 py-3 bg-gray-800 rounded-xl hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
