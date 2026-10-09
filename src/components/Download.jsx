import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faApple,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Download() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("gomi-theme") !== "light";
  });

  // Sync with the theme toggle in Header.jsx
  useEffect(() => {
    const syncTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleStorage = (event) => {
      if (event.key === "gomi-theme") syncTheme();
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const headingColor = isDark ? "text-white" : "text-gray-950";
  const bodyColor = isDark ? "text-gray-400" : "text-gray-600";
  const mutedColor = isDark ? "text-gray-500" : "text-gray-500";
  const subtleColor = isDark ? "text-gray-600" : "text-gray-400";

  const secondaryCard = isDark
    ? "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50";

  const secondaryIcon = isDark
    ? "border-white/[0.08] bg-white/[0.04] text-gray-300"
    : "border-gray-200 bg-gray-100 text-gray-700";

  const secondaryButton = isDark
    ? "border-white/[0.10] bg-white/[0.04] text-gray-200 hover:border-white/[0.18] hover:bg-white/[0.07]"
    : "border-gray-200 bg-gray-50 text-gray-800 hover:border-gray-300 hover:bg-gray-100";

  const platforms = [
    {
      name: "Linux",
      title: "GoMi for Linux",
      description: "A focused GoMi workspace for your Linux machine.",
      icon: faLinux,
      buttonText: "Download for Linux",
      format: "AppImage · Linux",
      primary: false,
    },
    {
      name: "macOS",
      title: "GoMi for macOS",
      description: "Take your learning workspace with you wherever you go.",
      icon: faApple,
      buttonText: "Download for macOS",
      format: "macOS · Desktop",
      primary: false,
    },
  ];

  const githubReleases =
    "https://github.com/YOUR_USERNAME/YOUR_REPOSITORY/releases/latest";

  const renderSecondaryCard = (platform) => (
    <div
      key={platform.name}
      className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${secondaryCard}`}
    >
      <div className="relative">
        <div className="flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors duration-300 ${secondaryIcon}`}
          >
            <FontAwesomeIcon icon={platform.icon} className="text-lg" />
          </div>
        </div>

        <div className="mt-9">
          <p
            className={`text-[10px] font-bold uppercase tracking-[0.18em] ${mutedColor}`}
          >
            {platform.name}
          </p>

          <h3
            className={`mt-2 text-2xl font-semibold tracking-tight ${headingColor}`}
          >
            {platform.title}
          </h3>

          <p className={`mt-3 text-sm leading-6 ${bodyColor}`}>
            {platform.description}
          </p>
        </div>

        <a
          href={githubReleases}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/button mt-8 flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-300 ${secondaryButton}`}
        >
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
            {platform.buttonText}
          </span>

          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-xs transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </a>

        <p className={`mt-3 text-center text-[10px] ${subtleColor}`}>
          {platform.format}
        </p>
      </div>
    </div>
  );

  return (
    <section
      id="download"
      className={`relative isolate overflow-hidden py-28 transition-colors duration-500 sm:py-32 lg:py-40 ${
        isDark ? "bg-[#050505] text-white" : "bg-gray-50 text-gray-950"
      }`}
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-[-250px] -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[160px] ${
          isDark ? "bg-green-400/[0.045]" : "bg-green-400/[0.09]"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[-200px] left-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-[140px] ${
          isDark ? "bg-emerald-400/[0.025]" : "bg-emerald-400/[0.06]"
        }`}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-green-500/50" />

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">
              Get GoMi
            </p>

            <span className="h-px w-8 bg-green-500/50" />
          </div>

          <h2
            className={`text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl ${headingColor}`}
          >
            Learn on{" "}
            <span
              className={`bg-clip-text text-transparent ${
                isDark
                  ? "bg-gradient-to-r from-white via-gray-200 to-green-400"
                  : "bg-gradient-to-r from-gray-950 via-gray-700 to-green-600"
              }`}
            >
              your terms.
            </span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${bodyColor}`}
          >
            Bring GoMi to your favorite platform and keep your learning
            workspace close, focused, and yours.
          </p>
        </div>

        {/* Download cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-20">
          {/* Windows — primary card */}
          <div
            className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
              isDark
                ? "border-green-400/25 bg-gradient-to-b from-green-400/[0.08] via-white/[0.025] to-transparent shadow-[0_0_80px_rgba(74,222,128,0.045)] hover:border-green-400/40"
                : "border-green-500/30 bg-gradient-to-b from-green-50 via-white to-white shadow-[0_0_60px_rgba(34,197,94,0.06)] hover:border-green-500/50"
            }`}
          >
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full blur-[100px] ${
                isDark ? "bg-green-400/[0.08]" : "bg-green-400/[0.12]"
              }`}
            />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/[0.08] text-green-500">
                  <FontAwesomeIcon icon={faWindows} className="text-lg" />
                </div>

                <span className="rounded-full border border-green-500/20 bg-green-500/[0.08] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-green-600">
                  Desktop
                </span>
              </div>

              <div className="mt-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-600">
                  Windows
                </p>

                <h3
                  className={`mt-2 text-2xl font-semibold tracking-tight ${headingColor}`}
                >
                  GoMi for Windows
                </h3>

                <p className={`mt-3 text-sm leading-6 ${bodyColor}`}>
                  The full GoMi desktop experience for Windows.
                </p>
              </div>

              <a
                href={githubReleases}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button mt-8 flex w-full items-center justify-between rounded-xl bg-green-500 px-4 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-400"
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

              <p className={`mt-3 text-center text-[10px] ${subtleColor}`}>
                Windows 10 or later
              </p>
            </div>
          </div>

          {/* macOS */}
          {renderSecondaryCard(platforms[1])}

          {/* Linux */}
          {renderSecondaryCard(platforms[0])}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />

          <p className={`text-xs ${subtleColor}`}>
            Choose your platform. Download GoMi. Start learning.
          </p>
        </div>
      </div>
    </section>
  );
}
