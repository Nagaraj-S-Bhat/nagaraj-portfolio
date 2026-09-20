export default function Education() {
  return (
    <section className="section-padding">
      <div className="container-custom">

        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b7ffcf]">
          Education
        </p>

        <div className="glass rounded-[32px] p-8 sm:p-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row">

            <div>
              <h2 className="text-2xl font-semibold">
                Presidency University, Bengaluru
              </h2>

              <p className="mt-2 text-white/50">
                B.Tech — Information Science and Engineering
              </p>
            </div>

            <div className="text-white/40">
              2023 — 2027
            </div>

          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="text-sm text-white/40">
              Current CGPA
            </span>

            <div className="mt-1 text-4xl font-semibold text-[#b7ffcf]">
              8.38 / 10
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}