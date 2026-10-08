import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] text-white">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-green-400/[0.05] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-7 sm:py-20 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#"
              className="inline-flex items-center text-[25px] tracking-[-0.04em]"
              aria-label="GoMi home"
            >
              <span className="font-bold text-white">Go</span>
              <span className="font-bold text-green-400">Mi</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Learn anything. Actually understand it.
            </p>

            <a
              href="#how-it-works"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-green-400"
            >
              See how GoMi works
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[10px] transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Products
            </h3>

            <div className="space-y-3">
              <a
                href="#workspace"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                Product preview
              </a>

              <a
                href="#how-it-works"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                How it works
              </a>

              <a
                href="#capabilities"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                Capabilities
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Learn
            </h3>

            <div className="space-y-3">
              <a
                href="#learning-modes"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                Learning modes
              </a>

              <a
                href="#interactive-tools"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                Interactive tools
              </a>

              <a
                href="#get-started"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                Get started
              </a>
            </div>
          </div>

          {/* Trust */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Trust
            </h3>

            <div className="space-y-3">
              <a
                href="#privacy"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                Privacy approach
              </a>

              <a
                href="#ai-providers"
                className="block text-sm text-gray-500 transition-colors duration-200 hover:text-green-400"
              >
                AI provider choices
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © 2026 GoMi. All rights reserved.
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-500 transition-all duration-200 hover:border-green-400/30 hover:bg-green-400/[0.08] hover:text-green-400"
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
