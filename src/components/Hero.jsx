import heroImage from "../assets/gomi.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlay,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050505] text-white">
      {/* =========================================================
          BACKGROUND ATMOSPHERE
      ========================================================= */}

      {/* Main green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.13] blur-[150px]"
      />

      {/* Secondary green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[420px] -z-10 h-[500px] w-[500px] rounded-full bg-green-500/[0.08] blur-[140px]"
      />

      {/* Right-side atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-200px] top-[220px] -z-10 h-[500px] w-[500px] rounded-full bg-emerald-400/[0.07] blur-[150px]"
      />

      {/* Soft center light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[350px] -z-10 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-green-300/[0.035] blur-[120px]"
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-7 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold text-green-300 shadow-[0_0_30px_rgba(74,222,128,0.06)] backdrop-blur-sm">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              className="text-[11px]"
            />

            <span>A calmer way to learn with AI</span>
          </div>

          {/* Main heading */}
          <h1 className="text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl ">
            {/* <span>Learn it for real.</span> */}
            <span className="bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-transparent">
              Learn it for real.
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-transparent">
              Not just for the answer.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Bring a question, a difficult topic, or your own study materials.
            GoMi helps you work through ideas with guided conversation,
            interactive practice, and explanations that adapt as you learn.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* Primary CTA */}
            <a
              href="#how-it-works"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-400 px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-300 hover:shadow-[0_0_40px_rgba(74,222,128,0.25)] sm:w-auto"
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
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-400/10 text-green-400">
                <FontAwesomeIcon
                  icon={faPlay}
                  className="ml-[1px] text-[8px]"
                />
              </span>
              Explore the workspace
            </a>
          </div>

          {/* Supporting statement */}
          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.7)]" />

            <span>
              Your materials · Your pace · A clearer path to understanding
            </span>
          </div>
        </div>

        {/* =========================================================
            HERO PRODUCT VISUAL
        ========================================================= */}

        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
          {/* Large soft glow behind product */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-10 -z-10 h-[70%] w-[80%] -translate-x-1/2 rounded-full bg-green-400/[0.12] blur-[100px]"
          />

          {/* Secondary glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[50%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/[0.08] blur-[120px]"
          />

          {/* Product frame */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.035] p-2 shadow-[0_25px_100px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:rounded-3xl sm:p-3">
            {/* Browser-style header */}
            <div className="flex h-8 items-center gap-1.5 px-2 sm:h-9 sm:px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />

              <div className="ml-3 h-5 flex-1 rounded-md border border-white/[0.04] bg-white/[0.04] sm:max-w-xs" />
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-xl border border-white/[0.06] sm:rounded-2xl">
              <img
                src={heroImage}
                alt="GoMi AI learning workspace"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* =====================================================
              FLOATING AI BADGE
          ===================================================== */}

          <div className="absolute -right-2 top-8 hidden items-center gap-2 rounded-full border border-white/10 bg-[#0b0b0b]/90 px-4 py-2.5 text-xs font-semibold text-gray-200 shadow-2xl shadow-black/30 backdrop-blur-md sm:flex lg:-right-5 lg:top-14">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/10 text-green-400">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-[10px]"
              />
            </span>
            AI that adapts to you
          </div>

          {/* =====================================================
              FLOATING LEARNING BADGE
          ===================================================== */}

          <div className="absolute -left-2 bottom-8 hidden items-center gap-2 rounded-full border border-white/10 bg-[#0b0b0b]/90 px-4 py-2.5 text-xs font-semibold text-gray-200 shadow-2xl shadow-black/30 backdrop-blur-md sm:flex lg:-left-5 lg:bottom-14">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            Learn. Practice. Understand.
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent"
      />
    </section>
  );
}
