import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Download() {
  return (
    <section
      id="download"
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
        className="pointer-events-none absolute bottom-[-200px] left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/[0.025] blur-[140px]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-green-400/50" />

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-400">
              Get GoMi
            </p>

            <span className="h-px w-8 bg-green-400/50" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Learn on
            <span className="bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-transparent">
              {" "}
              your terms.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Bring GoMi to your favorite platform and keep your learning
            workspace close, focused, and yours.
          </p>
        </div>

        {/* =====================================================
            DOWNLOAD CARDS
        ===================================================== */}

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {/* =================================================
              WINDOWS — PRIMARY
          ================================================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-green-400/25 bg-gradient-to-b from-green-400/[0.08] via-white/[0.025] to-transparent p-7 shadow-[0_0_80px_rgba(74,222,128,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-green-400/40 sm:p-8">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-green-400/[0.08] blur-[100px]"
            />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/[0.08] text-green-400">
                  <FontAwesomeIcon icon={faWindows} className="text-lg" />
                </div>
              </div>

              <div className="mt-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-400">
                  Windows
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  GoMi for Windows
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  The full GoMi desktop experience for Windows.
                </p>
              </div>

              <a
                href="https://github.com/YOUR_USERNAME/YOUR_REPOSITORY/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button mt-8 flex w-full items-center justify-between rounded-xl bg-green-400 px-4 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-300"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
                  Download for Windows
                </span>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </a>

              <p className="mt-3 text-center text-[10px] text-gray-600">
                Windows 10 or later
              </p>
            </div>
          </div>

          {/* =================================================
              IOS
          ================================================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.035] sm:p-8">
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-gray-300">
                  <FontAwesomeIcon icon={faApple} className="text-lg" />
                </div>
              </div>

              <div className="mt-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  iOS
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  GoMi for iPhone
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Take your learning workspace with you wherever you go.
                </p>
              </div>

              <a
                href="#"
                className="group/button mt-8 flex w-full items-center justify-between rounded-xl border border-white/[0.10] bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.07]"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
                  Download for iOS
                </span>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </a>

              <p className="mt-3 text-center text-[10px] text-gray-600">
                AppImage . IOS
              </p>
            </div>
          </div>

          {/* =================================================
              LINUX
          ================================================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.035] sm:p-8">
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-gray-300">
                  <FontAwesomeIcon icon={faLinux} className="text-lg" />
                </div>
              </div>

              <div className="mt-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                  Linux
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  GoMi for Linux
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  A focused GoMi workspace for your Linux machine.
                </p>
              </div>

              <a
                href="https://github.com/YOUR_USERNAME/YOUR_REPOSITORY/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button mt-8 flex w-full items-center justify-between rounded-xl border border-white/[0.10] bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.07]"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
                  Download for Linux
                </span>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-xs transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </a>

              <p className="mt-3 text-center text-[10px] text-gray-600">
                AppImage · Linux
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

          <p className="text-xs text-gray-600">
            Choose your platform. Download GoMi. Start learning.
          </p>
        </div>
      </div>
    </section>
  );
}
