import { useEffect, useState } from "react";
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
    section: isDark ? "bg-[#050505] text-white" : "bg-white text-gray-900",
    heading: isDark ? "text-white" : "text-gray-950",
    gradientHeading: isDark
      ? "from-white via-gray-200 to-green-400"
      : "from-gray-950 via-gray-700 to-green-600",
    paragraph: isDark ? "text-gray-400" : "text-gray-600",
    muted: isDark ? "text-gray-500" : "text-gray-600",
    subtle: isDark ? "text-gray-600" : "text-gray-500",
    card: isDark
      ? "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.035]"
      : "border-gray-200 bg-white hover:bg-gray-50 shadow-sm",
    cardBorder: isDark ? "border-white/[0.06]" : "border-gray-200",
    centerCard: isDark
      ? "border-green-400/20 bg-gradient-to-b from-green-400/[0.07] via-white/[0.025] to-transparent"
      : "border-green-500/25 bg-gradient-to-b from-green-50 via-white to-white shadow-sm",
    smallIcon: isDark
      ? "border-white/[0.08] bg-white/[0.04] text-gray-300"
      : "border-gray-200 bg-gray-100 text-gray-600",
    boundary: isDark
      ? "border-white/[0.07] bg-white/[0.015]"
      : "border-gray-200 bg-gray-50",
    boundaryIcon: isDark
      ? "bg-white/[0.04] text-gray-500"
      : "bg-gray-200 text-gray-600",
    boundaryHeading: isDark ? "text-gray-200" : "text-gray-800",
    boundaryLine: isDark ? "bg-white/[0.06]" : "bg-gray-200",
  };

  return (
    <section
      id="privacy"
      className={`relative isolate overflow-hidden py-28 transition-colors duration-300 sm:py-32 lg:py-40 ${theme.section}`}
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-250px] -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-green-400/[0.045] blur-[160px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-250px] left-[-200px] -z-10 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.025] blur-[150px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-green-400/60" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-500">
                Your learning belongs to you
              </p>
            </div>

            <h2
              className={`max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl ${theme.heading}`}
            >
              Built with
              <span
                className={`block bg-gradient-to-r ${theme.gradientHeading} bg-clip-text text-transparent`}
              >
                privacy in mind.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p
              className={`max-w-xl text-sm leading-7 sm:text-base sm:leading-8 ${theme.paragraph}`}
            >
              Your projects, notes, and learning history are stored locally in
              the desktop app. AI conversations are sent to the provider you
              choose so it can generate a response; that provider's own data
              practices also apply.
            </p>
          </div>
        </div>

        {/* Privacy visual */}
        <div className="relative mt-20 lg:mt-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-green-400/20 to-transparent lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {/* Left — Local */}
            <div
              className={`group relative rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-green-400/30 sm:p-8 ${theme.card}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/[0.06] text-green-500">
                  <FontAwesomeIcon icon={faDesktop} className="text-sm" />
                </div>

                <span
                  className={`text-[10px] font-semibold tracking-[0.16em] ${theme.subtle}`}
                >
                  01
                </span>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green-500">
                  Local-first
                </p>

                <h3
                  className={`text-xl font-semibold tracking-tight ${theme.heading}`}
                >
                  Your work stays close.
                </h3>

                <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>
                  Project data is kept in the GoMi desktop app on your device.
                </p>
              </div>

              <div
                className={`mt-8 flex items-center gap-2 border-t pt-5 ${theme.cardBorder}`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-400/[0.08] text-green-500">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="text-[10px]"
                  />
                </div>

                <span className={`text-[11px] ${theme.subtle}`}>
                  Projects · Notes · History
                </span>
              </div>
            </div>

            {/* Center — Core privacy visual */}
            <div
              className={`group relative overflow-hidden rounded-3xl border p-7 shadow-[0_0_70px_rgba(74,222,128,0.04)] sm:p-8 ${theme.centerCard}`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[-100px] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-400/[0.08] blur-[100px]"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/[0.08] text-green-500 shadow-[0_0_35px_rgba(74,222,128,0.08)]">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-lg"
                    />
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-green-500/70">
                    GOMI
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-500">
                    Privacy by design
                  </p>

                  <h3
                    className={`mt-3 text-2xl font-semibold leading-tight tracking-tight ${theme.heading}`}
                  >
                    Your learning,
                    <span className={`block ${theme.paragraph}`}>
                      your workspace.
                    </span>
                  </h3>
                </div>

                {/* Data flow */}
                <div className="mt-auto pt-10">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${theme.smallIcon}`}
                    >
                      <FontAwesomeIcon
                        icon={faDesktop}
                        className="text-[11px]"
                      />
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-green-400/50 to-gray-400/10" />

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${theme.smallIcon}`}
                    >
                      <FontAwesomeIcon icon={faCloud} className="text-[11px]" />
                    </div>
                  </div>

                  <div
                    className={`mt-3 flex justify-between text-[9px] uppercase tracking-[0.14em] ${theme.subtle}`}
                  >
                    <span>Your device</span>
                    <span>Chosen AI provider</span>
                  </div>

                  <p className={`mt-5 text-xs leading-5 ${theme.subtle}`}>
                    AI conversations are sent to the provider you choose so it
                    can generate a response.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Provider */}
            <div
              className={`group relative rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-green-400/30 sm:p-8 ${theme.card}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/[0.06] text-green-500">
                  <FontAwesomeIcon icon={faCloud} className="text-sm" />
                </div>

                <span
                  className={`text-[10px] font-semibold tracking-[0.16em] ${theme.subtle}`}
                >
                  02
                </span>
              </div>

              <div className="mt-8">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-green-500">
                  Your choice
                </p>

                <h3
                  className={`text-xl font-semibold tracking-tight ${theme.heading}`}
                >
                  Choose your AI provider.
                </h3>

                <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>
                  Choose a configured cloud provider or supported local model.
                </p>
              </div>

              <div
                className={`mt-8 flex items-center gap-2 border-t pt-5 ${theme.cardBorder}`}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-400/[0.08] text-green-500">
                  <FontAwesomeIcon icon={faLock} className="text-[10px]" />
                </div>

                <span className={`text-[11px] ${theme.subtle}`}>
                  Provider controls its own data practices
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project boundaries */}
        <div
          className={`mt-6 rounded-3xl border px-7 py-6 sm:px-8 ${theme.boundary}`}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${theme.boundaryIcon}`}
              >
                <FontAwesomeIcon icon={faFolderOpen} className="text-xs" />
              </div>

              <div>
                <h3
                  className={`text-sm font-semibold ${theme.boundaryHeading}`}
                >
                  Clear project boundaries
                </h3>

                <p className={`mt-1 text-xs leading-5 ${theme.muted}`}>
                  Sessions and materials are organized by the projects you
                  create.
                </p>
              </div>
            </div>

            <div
              className={`hidden h-px flex-1 sm:block ${theme.boundaryLine}`}
            />

            <div
              className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] ${theme.subtle}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              Organized by you
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col items-center text-center sm:mt-20">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="mb-5 text-[10px] text-green-500/50"
          />

          <p className={`max-w-xl text-xs leading-6 ${theme.subtle}`}>
            GoMi keeps your learning environment organized around the projects
            you create, while giving you control over which AI provider handles
            your conversations.
          </p>
        </div>
      </div>
    </section>
  );
}
