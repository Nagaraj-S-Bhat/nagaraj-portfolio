import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Google Cloud via NLearn (Navikshaa)",
    date: "Aug 2025",
    pdf: "/Machine-Learning-Specialization.pdf",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "Jun 2026",
    pdf: "/Full-Stack-Web-Development-Bootcamp.pdf",
  },
  {
    title: "Prompt Engineering Practical Course",
    issuer: "Udemy",
    date: "Jul 2026",
    pdf: "",
  },
];

export default function Certifications() {
  return (
    <section className="section-padding border-t border-white/5">
      <div className="container-custom">

        {/* Section Label */}
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b7ffcf]">
          Certifications
        </p>

        {/* Heading */}
        <h2 className="mb-12 text-4xl font-semibold sm:text-5xl">
          Learning that
          <span className="text-white/30"> keeps moving.</span>
        </h2>

        {/* Certifications */}
        <div className="space-y-3">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="glass group flex flex-col justify-between gap-5 rounded-2xl p-6 transition-all duration-300 hover:border-[#b7ffcf]/20 hover:bg-white/[0.03] md:flex-row md:items-center"
            >
              {/* Certificate Information */}
              <div>
                <h3 className="text-lg font-medium transition-colors duration-300 group-hover:text-[#b7ffcf]">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-sm text-white/40">
                  {certificate.issuer}
                </p>
              </div>

              {/* Date + PDF */}
              <div className="flex items-center gap-5">
                <p className="text-sm text-white/30">
                  {certificate.date}
                </p>

                {certificate.pdf && (
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:border-[#b7ffcf]/30 hover:bg-[#b7ffcf]/[0.06] hover:text-[#b7ffcf]"
                  >
                    View Certificate
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}