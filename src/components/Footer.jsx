import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true,
  );

  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const theme = {
    footer: isDark
      ? "border-white/[0.08] bg-[#050505] text-white"
      : "border-gray-200 bg-white text-gray-900",

    brand: isDark ? "text-white" : "text-gray-950",

    description: isDark ? "text-gray-500" : "text-gray-600",

    link: isDark
      ? "text-gray-500 hover:text-green-400"
      : "text-gray-600 hover:text-green-600",

    linkFeatured: isDark
      ? "text-gray-400 hover:text-green-400"
      : "text-gray-600 hover:text-green-600",

    heading: isDark ? "text-white" : "text-gray-900",

    divider: isDark ? "via-white/[0.10]" : "via-gray-300",

    bottomText: isDark ? "text-gray-600" : "text-gray-500",

    backToTop: isDark
      ? "border-white/[0.08] bg-white/[0.03] text-gray-500 hover:border-green-400/30 hover:bg-green-400/[0.08] hover:text-green-400"
      : "border-gray-200 bg-gray-50 text-gray-500 hover:border-green-500/40 hover:bg-green-50 hover:text-green-600",
  };

  const linkClass = `block text-sm transition-colors duration-200 ${theme.link}`;

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-300 ${theme.footer}`}
    >
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
              <span className={`font-bold ${theme.brand}`}>Go</span>
              <span className="font-bold text-green-500">Mi</span>
            </a>

            <p
              className={`mt-4 max-w-xs text-sm leading-6 ${theme.description}`}
            >
              Learn anything. Actually understand it.
            </p>

            <a
              href="#how-it-works"
              className={`group mt-7 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${theme.linkFeatured}`}
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
            <h3
              className={`mb-5 text-xs font-semibold uppercase tracking-[0.15em] ${theme.heading}`}
            >
              Products
            </h3>

            <div className="space-y-3">
              <a href="#product" className={linkClass}>
                Product preview
              </a>

              <a href="#how-it-works" className={linkClass}>
                How it works
              </a>

              <a href="#capabilities" className={linkClass}>
                Capabilities
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3
              className={`mb-5 text-xs font-semibold uppercase tracking-[0.15em] ${theme.heading}`}
            >
              Learn
            </h3>

            <div className="space-y-3">
              <a href="#learning-modes" className={linkClass}>
                Learning modes
              </a>

              <a href="#interactive-tools" className={linkClass}>
                Interactive tools
              </a>

              <a href="#get-started" className={linkClass}>
                Get started
              </a>
            </div>
          </div>

          {/* Trust */}
          <div>
            <h3
              className={`mb-5 text-xs font-semibold uppercase tracking-[0.15em] ${theme.heading}`}
            >
              Trust
            </h3>

            <div className="space-y-3">
              <a href="#privacy" className={linkClass}>
                Privacy approach
              </a>

              <a href="#ai-providers" className={linkClass}>
                AI provider choices
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-12 h-px bg-gradient-to-r from-transparent ${theme.divider} to-transparent`}
        />

        {/* Bottom row */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className={`text-xs ${theme.bottomText}`}>
            © 2026 GoMi. All rights reserved.
          </p>

          <a
            href="#"
            aria-label="Back to top"
            className={`group flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${theme.backToTop}`}
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
