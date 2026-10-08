import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faBolt,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  return (
    <section
      id="product"
      className="relative isolate overflow-hidden bg-[#050505] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-250px] top-[100px] -z-10 h-[500px] w-[500px] rounded-full bg-green-400/[0.04] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-250px] top-[400px] -z-10 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.04] blur-[150px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold tracking-[0.18em] text-green-400">
            THE PROBLEM
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            AI can give you an answer.
          </h2>

          <h2 className="mt-1 bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-3xl font-semibold leading-tight tracking-[-0.04em] text-transparent sm:text-4xl lg:text-5xl">
            That doesn't mean you learned.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Most AI assistants are optimized to respond quickly. GoMi is
            designed around something different: helping you build
            understanding.
          </p>
        </div>

        {/* Comparison */}
        <div className="mx-auto mt-16 max-w-5xl lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* =====================================================
                TYPICAL AI
            ===================================================== */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
              {/* Soft glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-white/[0.03] blur-[100px]"
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold tracking-[0.18em] text-gray-500">
                      TYPICAL AI
                    </p>

                    {/* Flow */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-2xl font-semibold tracking-tight text-gray-200 sm:text-3xl">
                      <span className="whitespace-nowrap">Ask</span>

                      <span aria-hidden="true" className="text-gray-600">
                        →
                      </span>

                      <span className="whitespace-nowrap">Answer</span>

                      <span aria-hidden="true" className="text-gray-600">
                        →
                      </span>

                      <span className="whitespace-nowrap">Move on</span>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-gray-500">
                    <FontAwesomeIcon icon={faBolt} className="text-sm" />
                  </div>
                </div>

                <div className="my-7 h-px bg-white/[0.07]" />

                {/* Points */}
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[9px] text-gray-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>

                    <span className="text-sm leading-6 text-gray-400">
                      Gives you the solution
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[9px] text-gray-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>

                    <span className="text-sm leading-6 text-gray-400">
                      Often explains after the fact
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[9px] text-gray-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>

                    <span className="text-sm leading-6 text-gray-400">
                      Doesn't remember what you struggle with
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[9px] text-gray-500">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>

                    <span className="text-sm leading-6 text-gray-400">
                      Mostly passive learning
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* =====================================================
                GOMI
            ===================================================== */}
            <div className="group relative overflow-hidden rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-400/[0.09] via-white/[0.025] to-transparent p-7 shadow-[0_0_80px_rgba(74,222,128,0.05)] sm:p-9">
              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-green-400/[0.08] blur-[100px]"
              />

              <div className="relative">
                {/* GOMI label */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <p className="text-[11px] font-bold tracking-[0.18em] text-green-400">
                      GOMI
                    </p>

                    <span className="rounded-full border border-green-400/20 bg-green-400/[0.08] px-2.5 py-1 text-[9px] font-semibold tracking-wide text-green-400">
                      DIFFERENT
                    </span>
                  </div>

                  {/* Icon separated from heading */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/[0.08] text-green-400 shadow-[0_0_25px_rgba(74,222,128,0.08)]">
                    <FontAwesomeIcon icon={faBrain} className="text-sm" />
                  </div>
                </div>

                {/* Main GoMi statement */}
                <div className="mt-7">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-gray-500">
                    A different way to learn
                  </p>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    <span className="whitespace-nowrap">Explore</span>

                    <span aria-hidden="true" className="text-green-400/70">
                      →
                    </span>

                    <span className="whitespace-nowrap">Practice</span>

                    <span aria-hidden="true" className="text-green-400/70">
                      →
                    </span>

                    <span className="whitespace-nowrap text-green-400">
                      Understand
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-green-400/20 via-white/[0.06] to-transparent" />

                {/* Points */}
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-[9px] text-black">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>

                    <span className="text-sm leading-6 text-gray-300">
                      Guides you toward the answer
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-[9px] text-black">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>

                    <span className="text-sm leading-6 text-gray-300">
                      Checks whether the idea actually clicked
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-[9px] text-black">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>

                    <span className="text-sm leading-6 text-gray-300">
                      Builds a picture of your learning
                    </span>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-[9px] text-black">
                      <FontAwesomeIcon icon={faCheck} />
                    </span>

                    <span className="text-sm leading-6 text-gray-300">
                      Turns explanations into interaction
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-12 flex flex-col items-center text-center">
            <div className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />

            <p className="max-w-xl text-sm leading-7 text-gray-500">
              GoMi isn't trying to make learning faster by giving you more
              answers. It's designed to make the learning itself better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
