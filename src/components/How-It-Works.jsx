import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faComments,
  faFileLines,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: faComments,
      title: "Ask naturally",
      description:
        "Begin with a question or choose a topic to explore. GoMi keeps the session grounded in the learning goal you set.",
    },
    {
      number: "02",
      icon: faFileLines,
      title: "Learn interactively",
      description:
        "Add PDFs and notes to a project. GoMi can use relevant passages to explain concepts in the context of your course.",
    },
    {
      number: "03",
      icon: faLightbulb,
      title: "Build understanding",
      description:
        "Work through examples, test your thinking with interactive tools, then return to your notes and progress in one workspace.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-green-400/[0.06] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-200px] right-[-150px] -z-10 h-[450px] w-[450px] rounded-full bg-emerald-400/[0.05] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.18em] text-green-400">
            HOW GOMI WORKS
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Your learning,{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-transparent">
              connected.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Keep the conversation, study materials, practice tools, and project
            progress together instead of piecing a study session across
            separate apps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent lg:block"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.04] sm:p-8"
              >
                {/* Number + icon */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/[0.08] text-green-400 shadow-[0_0_35px_rgba(74,222,128,0.06)] transition-all duration-300 group-hover:bg-green-400/[0.12] group-hover:shadow-[0_0_40px_rgba(74,222,128,0.12)]">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="text-lg"
                    />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-gray-600">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-green-400 opacity-70 transition-all duration-300 group-hover:opacity-100">
                  <span>GoMi</span>

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[9px] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-green-400/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-3 text-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.08]" />

          <span className="text-xs text-gray-500">
            One workspace. A clearer path to understanding.
          </span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}
