import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20">
      <div className="container-custom grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 lg:grid-cols-[1.4fr_.6fr]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#b7ffcf]">
            Software Developer • Data & Full Stack
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
            Building digital
            <br />
            <span className="text-white/30">products that</span>
            <br />
            <span className="green-text">solve problems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            I'm Nagaraj Shripad Bhat, a final-year Information Science and
            Engineering student focused on full-stack development, data-driven
            applications and practical software engineering.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#b7ffcf] px-7 py-3.5 font-medium text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3.5 text-white/80 transition hover:border-[#b7ffcf]/40"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-9 flex gap-5">
            <a
              href="https://github.com/Nagaraj-S-Bhat"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/50 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/nagaraj-bhat"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/50 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:bhatnagaraj80@gmail.com"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-[#b7ffcf]/5 blur-3xl" />

          <div className="glass relative overflow-hidden rounded-[32px] p-3">
            <img
              src="/profile.png"
              alt="Nagaraj Bhat"
              className="aspect-[4/5] w-full rounded-[24px] object-cover"
            />

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl">
              <p className="text-sm text-white/50">
                Currently focused on
              </p>

              <p className="mt-1 font-medium">
                Full-Stack Development & Data
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="container-custom pb-8">
        <a
          href="#about"
          className="text-sm text-white/30"
        >
          ↓ &nbsp; Scroll to explore
        </a>
      </div>
    </section>
  );
}