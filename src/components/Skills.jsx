const groups = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "SQL", "C"],
  },

  {
    title: "Web Development",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
      "Tailwind CSS",
    ],
  },

  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Prisma ORM",
    ],
  },

  {
    title: "AI / ML",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Prompt Engineering",
      "Context Engineering",
      "LLM APIs",
      "OpenAI",
      "Anthropic",
      "MCP",
      "Agentic Workflows",
      "Evals & Observability",
    ],
  },

  {
    title: "Machine Learning",
    items: [
      "PyTorch",
      "Scikit-learn",
      "CNN",
      "LSTM",
      "GANs",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Time-Series Analysis",
    ],
  },

  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "AWS",
      "VS Code",
      "Google Colab",
    ],
  },

  {
    title: "Core Computer Science",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-y border-white/5"
    >
      <div className="container-custom">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b7ffcf]">
          Technology
        </p>

        <h2 className="text-4xl font-semibold sm:text-5xl">
          My technical foundation.
        </h2>

        <p className="mt-5 mb-12 max-w-2xl text-lg leading-8 text-white/45">
          A practical engineering toolkit spanning software development,
          databases, AI and machine learning, modern development tools,
          and core computer science.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {groups.map((group) => (
            <div
              key={group.title}
              className="glass group rounded-3xl p-6 transition-all duration-300 hover:border-[#b7ffcf]/20 hover:bg-white/[0.03]"
            >
              <h3 className="mb-5 text-lg font-medium transition-colors duration-300 group-hover:text-[#b7ffcf]">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-white/55 transition-all duration-200 hover:border-[#b7ffcf]/30 hover:bg-[#b7ffcf]/[0.06] hover:text-[#b7ffcf]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}