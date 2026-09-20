export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">

        <div className="rounded-[40px] border border-[#b7ffcf]/15 bg-[#b7ffcf]/[0.03] p-8 sm:p-14">

          <p className="text-sm uppercase tracking-[0.25em] text-[#b7ffcf]">
            Contact
          </p>

          <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
            Let's build something
            <span className="text-white/30"> meaningful.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/50">
            I'm open to software engineering, full-stack development,
            data and internship opportunities.
          </p>

          <a
            href="mailto:bhatnagaraj80@gmail.com"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#b7ffcf] px-7 py-3.5 font-medium text-black transition hover:scale-105"
          >
            Get in touch
            <span>↗</span>
          </a>

          <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8">

            <a
              href="https://github.com/Nagaraj-S-Bhat"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nagarajbhat2005/"
              target="_blank"
              rel="noreferrer"
              className="text-white/50 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:bhatnagaraj80@gmail.com"
              className="text-white/50 transition hover:text-white"
            >
              Email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}