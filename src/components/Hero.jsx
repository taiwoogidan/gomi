import heroImage from "../assets/gomi.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlay,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-gray-950 transition-colors duration-300 dark:bg-[#050505] dark:text-white">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      {/* Main green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[150px] dark:bg-emerald-500/[0.13]"
      />

      {/* Secondary green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[420px] -z-10 h-[500px] w-[500px] rounded-full bg-green-500/[0.035] blur-[140px] dark:bg-green-500/[0.08]"
      />

      {/* Right-side atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-200px] top-[220px] -z-10 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.03] blur-[150px] dark:bg-emerald-400/[0.07]"
      />

      {/* Soft center light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[350px] -z-10 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-green-300/[0.025] blur-[120px] dark:bg-green-300/[0.035]"
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-7 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-500/[0.07] px-4 py-2 text-xs font-semibold text-green-700 shadow-[0_0_30px_rgba(74,222,128,0.04)] backdrop-blur-sm dark:border-green-400/20 dark:bg-green-400/[0.07] dark:text-green-300 dark:shadow-[0_0_30px_rgba(74,222,128,0.06)]">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              className="text-[11px]"
            />

            <span>A calmer way to learn with AI</span>
          </div>

          {/* Main heading */}
          <h1 className="text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-gray-950 via-gray-700 to-green-600 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-green-400">
              Learn it for real.
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-gray-950 via-gray-700 to-green-600 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-green-400">
              Not just for the answer.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 dark:text-gray-400">
            Bring a question, a difficult topic, or your own study materials.
            GoMi helps you work through ideas with guided conversation,
            interactive practice, and explanations that adapt as you learn.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Primary CTA */}
            <a
              href="#how-it-works"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(74,222,128,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-[0_0_40px_rgba(74,222,128,0.2)] sm:w-auto"
            >
              See how it works
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#workspace"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-gray-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10 text-green-700 dark:bg-green-400/10 dark:text-green-400">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="ml-[1px] text-[8px]"
                />
              </span>
              Explore the workspace
            </a>
          </div>

          {/* Supporting statement */}
          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(74,222,128,0.5)] dark:bg-green-400 dark:shadow-[0_0_8px_rgba(74,222,128,0.7)]" />

            <span>
              Your materials · Your pace · A clearer path to understanding
            </span>
          </div>
        </div>

        {/* =========================================================
            HERO PRODUCT VISUAL
        ========================================================= */}

        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          {/* Main product glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[70%] w-[80%] -translate-x-1/2 rounded-full bg-green-400/[0.06] blur-[100px] dark:bg-green-400/[0.12]"
          />

          {/* Secondary product glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[50%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/[0.04] blur-[120px] dark:bg-emerald-300/[0.08]"
          />

          {/* Product frame */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100/80 p-2 shadow-[0_25px_100px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors duration-300 sm:rounded-3xl sm:p-3 dark:border-white/[0.10] dark:bg-grey-100 dark:shadow-[0_25px_100px_rgba(0,0,0,0.5)]">
            {/* Browser-style header */}
            <div className="flex h-8 items-center gap-1.5 px-2 sm:h-9 sm:px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

              <div className="ml-3 h-5 flex-1 rounded-md border border-gray-200 bg-white sm:max-w-xs dark:border-white/[0.04] dark:bg-white/[0.04]" />
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-xl sm:rounded-2xl dark:border-white/[0.06]">
              <img
                src={heroImage}
                alt="GoMi AI learning workspace"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Floating AI badge */}
          <div className="absolute -right-2 top-8 hidden items-center gap-2 rounded-full border border-gray-200 bg-white/95 px-4 py-2.5 text-xs font-semibold text-gray-800 shadow-2xl shadow-black/10 backdrop-blur-md sm:flex lg:-right-5 lg:top-14 dark:border-white/10 dark:bg-[#0b0b0b]/90 dark:text-gray-200 dark:shadow-black/30">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-700 dark:bg-green-400/10 dark:text-green-400">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-[10px]"
              />
            </span>
            AI that adapts to you
          </div>

          {/* Floating learning badge */}
          <div className="absolute -left-2 bottom-8 hidden items-center gap-2 rounded-full border border-gray-200 bg-white/95 px-4 py-2.5 text-xs font-semibold text-gray-800 shadow-2xl shadow-black/10 backdrop-blur-md sm:flex lg:-left-5 lg:bottom-14 dark:border-white/10 dark:bg-[#0b0b0b]/90 dark:text-gray-200 dark:shadow-black/30">
            <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(74,222,128,0.5)] dark:bg-green-400 dark:shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            Learn. Practice. Understand.
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-[#050505]"
      />
    </section>
  );
}
