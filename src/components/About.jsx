export default function About() {
  const highlights = [
    {
      number: "22K+",
      label: "Cricket match files processed",
    },
    {
      number: "11M+",
      label: "Ball-by-ball records analyzed",
    },
    {
      number: "36",
      label: "Months of EV forecasting",
    },
    {
      number: "6+",
      label: "REST APIs built",
    },
  ];

  const interests = [
    "Full-Stack Development",
    "Backend Engineering",
    "Data-Driven Applications",
    "Machine Learning",
    "REST API Design",
    "Database Systems",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b7ffcf]">
            About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            I build software that turns
            <span className="text-white/30"> data and ideas </span>
            into useful experiences.
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Story */}
          <div className="space-y-6">

            <p className="text-xl leading-9 text-white/75">
              I'm <span className="text-white">Nagaraj Shripad Bhat</span>,
              a B.Tech Information Science and Engineering student at
              Presidency University, Bengaluru, focused on becoming a
              strong software engineer through hands-on development.
            </p>

            <p className="text-lg leading-8 text-white/50">
              I enjoy working across the stack — from designing database
              structures and backend APIs to building responsive interfaces
              that people can actually use. My projects have given me
              practical experience with React, Next.js, Node.js, Express,
              Spring Boot, PostgreSQL, MySQL and Prisma.
            </p>

            <p className="text-lg leading-8 text-white/50">
              I'm particularly interested in systems where software meets
              real-world data. I've worked on a cricket analytics platform
              processing millions of ball-by-ball records, an EV demand
              forecasting application, and
              <span className="text-white"> IPOverse</span> — an IPO analytics
              platform built around automated data synchronization and
              continuously updated market information.
            </p>

            <p className="text-lg leading-8 text-white/50">
              My approach is simple:
              <span className="text-white">
                {" "}understand the problem, build the right foundation,
                and keep improving the product.
              </span>
            </p>

          </div>

          {/* Right profile card */}
          <div className="glass rounded-[32px] p-7 sm:p-9">

            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/40">
                  CURRENT FOCUS
                </p>

                <p className="mt-2 text-lg font-medium">
                  Software Engineering
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b7ffcf]/20 bg-[#b7ffcf]/5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#b7ffcf] shadow-[0_0_18px_#b7ffcf]" />
              </div>
            </div>

            <div className="border-t border-white/10 pt-7">

              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/35">
                Areas I enjoy
              </p>

              <div className="flex flex-wrap gap-2.5">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/60 transition hover:border-[#b7ffcf]/30 hover:text-[#b7ffcf]"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            <div className="mt-8 border-t border-white/10 pt-7">

              <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                Based in
              </p>

              <p className="mt-2 text-lg text-white/75">
                Bengaluru, India
              </p>

            </div>

          </div>
        </div>

        {/* Project proof / numbers */}
        <div className="mt-16 grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">

          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`px-5 py-8 sm:px-8 sm:py-10 ${
                index !== 3 ? "border-r border-white/10" : ""
              }`}
            >
              <p className="text-3xl font-semibold tracking-tight text-[#b7ffcf] sm:text-4xl">
                {item.number}
              </p>

              <p className="mt-2 max-w-[170px] text-sm leading-6 text-white/40">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-b border-white/10 pb-12 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/30">
              What I'm looking for
            </p>

            <p className="mt-3 max-w-2xl text-2xl leading-9 text-white/75">
              An opportunity to contribute, learn from experienced engineers,
              and build software that solves meaningful problems.
            </p>
          </div>

          <a
            href="#projects"
            className="shrink-0 text-sm font-medium text-[#b7ffcf] transition hover:text-white"
          >
            Explore my work →
          </a>

        </div>

      </div>
    </section>
  );
}