import { motion } from "framer-motion";

const experiences = [
  {
    period: "Jul 2025 — Aug 2025",
    role: "AI & Data Analytics Intern",
    company: "Edunet Foundation",
    type: "AICTE & Shell Skills4Future • Virtual",

    description:
      "Completed a 4-week virtual internship focused on artificial intelligence, data analytics and practical machine-learning workflows. As part of the capstone project, developed an electric vehicle demand forecasting solution using historical county-level registration data.",

    highlights: [
      "Worked with a 20,819-record dataset containing 10 features for electric vehicle adoption analysis.",
      "Performed data preprocessing, feature engineering and time-series analysis to prepare historical registration data for forecasting.",
      "Engineered 6+ time-series features to capture temporal patterns and EV adoption trends.",
      "Built and tuned a Random Forest Regression model using RandomizedSearchCV with 30 candidates and 3-fold cross-validation.",
      "Generated 3-year / 36-month forecasts across 5+ US counties and presented results through an interactive forecasting application.",
    ],

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "Time-Series Analysis",
      "Streamlit",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-y border-white/5"
    >
      <div className="container-custom">

        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b7ffcf]">
            Experience
          </p>

          <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Where I’ve
            <br />
            <span className="text-white/30">
              applied my skills.
            </span>
          </h2>
        </div>

        {/* Experience */}
        <div className="space-y-8">

          {experiences.map((experience, index) => (
            <motion.article
              key={experience.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="glass group rounded-[32px] border border-white/5 p-7 transition-all duration-300 hover:border-[#b7ffcf]/20 sm:p-10"
            >

              {/* Top */}
              <div className="grid gap-8 lg:grid-cols-[220px_1fr]">

                {/* Period */}
                <div>
                  <p className="text-sm text-white/35">
                    {experience.period}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#b7ffcf]">
                    {experience.type}
                  </p>
                </div>

                {/* Main content */}
                <div>

                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-lg text-white/50">
                    {experience.company}
                  </p>

                  <p className="mt-6 max-w-3xl text-base leading-7 text-white/55">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-8 space-y-4">

                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-4"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b7ffcf]" />

                        <p className="leading-7 text-white/55">
                          {highlight}
                        </p>
                      </div>
                    ))}

                  </div>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-white/50 transition hover:border-[#b7ffcf]/30 hover:text-[#b7ffcf]"
                      >
                        {technology}
                      </span>
                    ))}
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