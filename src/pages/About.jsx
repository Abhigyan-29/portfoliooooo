const About = () => {
  return (
    <div className="ml-72 px-24 py-20 max-w-4xl">

      {/* Name */}
      <h1 className="text-6xl font-semibold mb-6">Abhigyan</h1>

      {/* Tagline */}
      <p className="text-gray-400 tracking-wide uppercase text-sm mb-8">
        FULL-STACK DEV • AI ENGINEER • LLMs • STARTUPS • MUSIC • F1 • READING
      </p>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-3 mb-14">
        {["React", "LLM", "Node.js", "Next.js", "TypeScript", "Postgres", "Redis"].map((tech, i) => (
          <span
            key={i}
            className="px-4 py-1 text-sm rounded-full bg-[#1a1a1a] border border-[#262626] text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Sections */}

      <Section title="Who I Am">
        Hello! I'm Abhigyan, a Bengaluru-based engineer passionate about
        building tools that simplify people's lives. I've been coding since 2018,
        writing about AI, LLMs, frontend, backend, and databases.
      </Section>

      <Section title="What I Do">
        Currently a Founding Engineer building practical, user-facing products.
        I focus on building things people actually use daily — less demo energy,
        more real-world impact.
      </Section>

      <Section title="My Journey">
        Co-built multiple startup projects, shipped MVPs to production, and
        launched AI-powered tools with active users. I enjoy rapid iteration,
        shipping fast, and improving continuously.
      </Section>

      <Section title="Vision">
        LLMs and AI will automate the mundane and reshape how we work.
        I aim to stay at the forefront of this transformation.
      </Section>

      <Section title="Beyond Code">
        Love techno & house music, follow F1, play chess, read regularly,
        and explore new places.
      </Section>

      {/* Buttons */}
      <div className="flex gap-4 mt-12">
        <a
          href="/contact"
          className="bg-white text-black px-6 py-2 rounded-lg hover:opacity-80 transition"
        >
          Get in Touch
        </a>

        <a
          href="mailto:your@email.com"
          className="border border-[#262626] px-6 py-2 rounded-lg hover:bg-[#1a1a1a] transition"
        >
          E-Mail
        </a>
      </div>

    </div>
  )
}

const Section = ({ title, children }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-400 leading-relaxed text-[16px]">
        {children}
      </p>
    </div>
  )
}

export default About
