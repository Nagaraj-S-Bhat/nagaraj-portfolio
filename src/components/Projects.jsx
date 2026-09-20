import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "IPOverse",
    category: "FULL-STACK • IPO ANALYTICS",

    description:
      "A modern Indian IPO analytics platform designed to make IPO research easier through live GMP tracking, subscription insights, IPO calendars, performance analysis and structured market data.",

    problem:
      "IPO information is often spread across multiple sources, making it difficult to quickly understand upcoming IPOs, GMP trends, subscription information and listing expectations from one place.",

    approach:
      "I designed IPOverse as a centralized analytics platform that organizes IPO information into structured views and presents important market indicators through a clean, responsive dashboard.",

    built: [
      "Designed a responsive IPO analytics dashboard",
      "Built IPO listing and market overview interfaces",
      "Added GMP and subscription-focused analytics",
      "Created IPO calendar and performance views",
      "Structured the application using reusable React components",
      "Connected application data with PostgreSQL using Prisma ORM",
      "Integrated Google Sheets API for data synchronization",
    ],

    highlights: [
      "GMP tracking",
      "IPO subscription insights",
      "Mainboard & SME IPOs",
      "IPO calendar",
      "IPO performance analysis",
      "Responsive dashboard",
    ],

    tech: [
      "Next.js 16",
      "TypeScript",
      "React",
      "Prisma ORM",
      "Neon PostgreSQL",
      "Google Sheets API",
      "Tailwind CSS",
    ],

    image: "/ipoverse.png",

    live: "",
    github: "",
  },

  {
    number: "02",
    title: "CricketVault",
    category: "FULL-STACK • CRICKET ANALYTICS",

    description:
      "A full-stack cricket analytics platform that transforms large-scale Cricsheet data into searchable player profiles, career statistics, player comparisons and match history through a React frontend and REST API backend.",

    problem:
      "Cricket datasets contain large amounts of ball-by-ball information, but extracting useful player-level insights requires a structured data-processing pipeline and an efficient backend architecture.",

    approach:
      "I built an end-to-end data pipeline that processes Cricsheet JSON files, transforms the data into a relational MySQL database and exposes the processed information through REST APIs consumed by a React frontend.",

    built: [
      "Processed 22,000+ Cricsheet match JSON files",
      "Worked with 11M+ ball-by-ball deliveries",
      "Built a Python-based cricket data processing pipeline",
      "Designed a normalized MySQL database structure",
      "Developed REST APIs using Node.js and Express.js",
      "Created player search and autocomplete functionality",
      "Built player profile and career statistics pages",
      "Implemented player comparison functionality",
      "Added match history and format-wise statistics",
      "Built a responsive React-based frontend",
    ],

    highlights: [
      "22K+ match files",
      "11M+ deliveries",
      "Python data pipeline",
      "Normalized MySQL database",
      "REST API architecture",
      "Player search",
      "Player comparison",
      "Career statistics",
    ],

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Python",
      "Cricsheet",
    ],

    image: "/cricketvault.png",

    live: "",
    github: "https://github.com/Nagaraj-S-Bhat/cricketvault",
  },

  {
    number: "03",
    title: "EV Demand Prediction",
    category: "MACHINE LEARNING • FORECASTING",

    description:
      "A machine-learning forecasting application that analyzes historical electric-vehicle registrations, engineers time-series features and generates multi-year county-level EV demand forecasts using Random Forest Regression.",

    problem:
      "Historical EV registration data contains temporal and county-level patterns that can be difficult to interpret manually. The project focuses on using historical data to understand and forecast future EV adoption trends.",

    approach:
      "I developed an end-to-end machine-learning pipeline covering data preprocessing, feature engineering, time-series transformations, model tuning and interactive visualization through a Streamlit application.",

    built: [
      "Processed a 20,819-record EV registration dataset",
      "Cleaned and transformed historical date information",
      "Created year, month and numerical date features",
      "Added lag and rolling-mean features",
      "Encoded county-level information",
      "Built a Random Forest Regression model",
      "Used RandomizedSearchCV for hyperparameter tuning",
      "Performed 3-fold cross-validation",
      "Generated forecasts for up to 36 months",
      "Built an interactive Streamlit forecasting dashboard",
    ],

    highlights: [
      "20,819 records",
      "Time-series features",
      "Random Forest Regression",
      "30 hyperparameter candidates",
      "3-fold cross-validation",
      "90 model fits",
      "36-month forecast",
      "Interactive Streamlit app",
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "RandomizedSearchCV",
      "Feature Engineering",
      "Time-Series Analysis",
      "Streamlit",
    ],

    image: "/ev-forecast.png",

    live: "",
    github:
      "https://github.com/Nagaraj-S-Bhat/-EV-Vehicle-Demand-Prediction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b7ffcf]">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Projects that
            <br />
            <span className="text-white/30">
              show what I can build.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
            A selection of projects spanning full-stack development,
            data engineering, machine learning and analytics.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="glass group overflow-hidden rounded-[32px] border border-white/5 transition-all duration-500 hover:border-[#b7ffcf]/20"
            >

              {/* Main project area */}
              <div className="grid lg:grid-cols-[90px_1fr_430px]">

                {/* Project number */}
                <div className="hidden p-10 text-5xl font-light text-white/10 lg:block">
                  {project.number}
                </div>

                {/* Project information */}
                <div className="p-7 sm:p-10">

                  <p className="mb-4 text-xs tracking-[0.2em] text-[#b7ffcf]">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-semibold sm:text-4xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 max-w-2xl leading-7 text-white/50">
                    {project.description}
                  </p>

                  {/* Problem + Approach */}
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">

                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/30">
                        The Problem
                      </p>

                      <p className="text-sm leading-6 text-white/45">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/30">
                        My Approach
                      </p>

                      <p className="text-sm leading-6 text-white/45">
                        {project.approach}
                      </p>
                    </div>

                  </div>

                  {/* Technologies */}
                  <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.18em] text-white/30">
                      Technology
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/50 transition group-hover:border-white/15 group-hover:text-white/65"
                        >
                          {item}
                        </span>
                      ))}

                    </div>

                  </div>

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-5">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#b7ffcf] transition hover:text-white"
                      >
                        Live Demo
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
                      >
                        GitHub
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                  </div>

                </div>

                {/* Project screenshot */}
                <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-white/5 bg-black/20 p-4 lg:border-l lg:border-t-0">

                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="max-h-[420px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Subtle gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a09]/60 via-transparent to-transparent" />

                  {/* Project number */}
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md">
                      {project.number} / 03
                    </span>
                  </div>

                </div>

              </div>

              {/* Detailed project information */}
              <div className="border-t border-white/5 p-7 sm:p-10">

                <div className="grid gap-10 lg:grid-cols-2">

                  {/* What I built */}
                  <div>

                    <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#b7ffcf]">
                      What I Built
                    </p>

                    <div className="space-y-3">

                      {project.built.map((item, i) => (
                        <div
                          key={item}
                          className="flex gap-4"
                        >

                          <span className="min-w-[25px] text-xs text-[#b7ffcf]/60">
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          <p className="text-sm leading-6 text-white/50">
                            {item}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* Technical highlights */}
                  <div>

                    <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#b7ffcf]">
                      Technical Highlights
                    </p>

                    <div className="grid grid-cols-2 gap-3">

                      {project.highlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition duration-300 hover:border-[#b7ffcf]/20 hover:bg-[#b7ffcf]/[0.03]"
                        >
                          <p className="text-sm text-white/60">
                            {item}
                          </p>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}