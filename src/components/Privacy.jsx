import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faDesktop,
  faCloud,
  faFolderOpen,
  faArrowDown,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function Privacy() {
  return (
    <section
      id="privacy"
      className="relative isolate overflow-hidden bg-[#050505] py-28 text-white sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-250px] -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-green-400/[0.045] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] left-[-200px] -z-10 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.025] blur-[150px]"
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-green-400/60" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
                Your learning belongs to you
              </p>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Built with
              <span className="block bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-transparent">
                privacy in mind.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
              Your projects, notes, and learning history are stored locally in
              the desktop app. AI conversations are sent to the provider you
              choose so it can generate a response; that provider's own data
              practices also apply.
            </p>
          </div>
        </div>

        {/* =====================================================
            PRIVACY VISUAL
        ===================================================== */}

        <div className="relative mt-20 lg:mt-28">
          {/* Decorative vertical line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-green-400/20 to-transparent lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {/* =================================================
                LEFT — LOCAL
            ================================================= */}

            <div className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.035] sm:p-8">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/15 bg-green-400/[0.06] text-green-400">
                  <FontAwesomeIcon icon={faDesktop} className="text-sm" />
                </div>

                <span className="text-[10px] font-semibold tracking-[0.16em] text-gray-600">
                  01
                </span>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green-400">
                  Local-first
                </p>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Your work stays close.
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Project data is kept in the GoMi desktop app on your device.
                </p>
              </div>

              {/* Bottom visual */}
              <div className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-400/[0.07] text-green-400">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="text-[10px]"
                  />
                </div>

                <span className="text-[11px] text-gray-600">
                  Projects · Notes · History
                </span>
              </div>
            </div>

            {/* =================================================
                CENTER — CORE PRIVACY VISUAL
            ================================================= */}

            <div className="group relative overflow-hidden rounded-3xl border border-green-400/20 bg-gradient-to-b from-green-400/[0.07] via-white/[0.025] to-transparent p-7 shadow-[0_0_100px_rgba(74,222,128,0.045)] sm:p-8">
              {/* Inner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[-100px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-400/[0.08] blur-[100px]"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/[0.08] text-green-400 shadow-[0_0_35px_rgba(74,222,128,0.08)]">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-lg"
                    />
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-green-400/50">
                    GOMI
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-400">
                    Privacy by design
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white">
                    Your learning,
                    <span className="block text-gray-400">your workspace.</span>
                  </h3>
                </div>

                {/* Data flow */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-gray-300">
                      <FontAwesomeIcon
                        icon={faDesktop}
                        className="text-[11px]"
                      />
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-green-400/40 to-white/[0.06]" />

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-gray-300">
                      <FontAwesomeIcon icon={faCloud} className="text-[11px]" />
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.14em] text-gray-600">
                    <span>Your device</span>
                    <span>Chosen AI provider</span>
                  </div>

                  <p className="mt-5 text-xs leading-5 text-gray-600">
                    AI conversations are sent to the provider you choose so it
                    can generate a response.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT — PROVIDER
            ================================================= */}

            <div className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-green-400/20 hover:bg-white/[0.035] sm:p-8">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/15 bg-green-400/[0.06] text-green-400">
                  <FontAwesomeIcon icon={faCloud} className="text-sm" />
                </div>

                <span className="text-[10px] font-semibold tracking-[0.16em] text-gray-600">
                  02
                </span>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green-400">
                  Your choice
                </p>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Choose your AI provider.
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Choose a configured cloud provider or supported local model.
                </p>
              </div>

              {/* Bottom visual */}
              <div className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-400/[0.07] text-green-400">
                  <FontAwesomeIcon icon={faLock} className="text-[10px]" />
                </div>

                <span className="text-[11px] text-gray-600">
                  Provider controls its own data practices
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROJECT BOUNDARIES
        ===================================================== */}

        <div className="mt-6 rounded-3xl border border-white/[0.07] bg-white/[0.015] px-7 py-6 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-gray-500">
                <FontAwesomeIcon icon={faFolderOpen} className="text-xs" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-200">
                  Clear project boundaries
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-600">
                  Sessions and materials are organized by the projects you
                  create.
                </p>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-white/[0.06] sm:block" />

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              Organized by you
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-16 flex flex-col items-center text-center sm:mt-20">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="mb-5 text-[10px] text-green-400/40"
          />

          <p className="max-w-xl text-xs leading-6 text-gray-600">
            GoMi keeps your learning environment organized around the projects
            you create, while giving you control over which AI provider handles
            your conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
