import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faComments,
  faFileLines,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem("gomi-theme") !== "light";
  });

  // Keep this section synchronized with the Header theme toggle.
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
      if (event.key === "gomi-theme") {
        syncTheme();
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

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

  const headingColor = isDark ? "text-white" : "text-gray-950";
  const bodyColor = isDark ? "text-gray-400" : "text-gray-600";

  const cardStyle = isDark
    ? "border-white/[0.08] bg-white/[0.025] hover:border-green-400/30 hover:bg-white/[0.05]"
    : "border-gray-200 bg-white hover:border-green-500/40 hover:bg-green-50/60";

  const numberColor = isDark ? "text-gray-600" : "text-gray-400";

  // Reusable reveal animation.
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Reveal children sequentially.
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className={`relative isolate overflow-hidden ${
        isDark ? "bg-[#050505]" : "bg-white"
      } py-24 ${headingColor} transition-colors duration-500 sm:py-28 lg:py-32`}
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-[-180px] -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[140px] transition-opacity duration-500 ${
          isDark ? "bg-green-400/[0.06]" : "bg-green-400/[0.10]"
        }`}
      />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-[-200px] right-[-150px] -z-10 h-[450px] w-[450px] rounded-full blur-[130px] transition-opacity duration-500 ${
          isDark ? "bg-emerald-400/[0.05]" : "bg-emerald-400/[0.08]"
        }`}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-bold tracking-[0.18em] text-green-500"
          >
            HOW GOMI WORKS
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className={`text-3xl font-semibold tracking-[-0.035em] ${headingColor} sm:text-4xl lg:text-5xl`}
          >
            Your learning{" "}
            <span className="bg-gradient-to-r from-current via-gray-400 to-green-500 bg-clip-text text-transparent">
              connected.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className={`mx-auto mt-5 max-w-2xl text-sm leading-7 ${bodyColor} sm:text-base sm:leading-8`}
          >
            Keep the conversation, study materials, practice tools, and project
            progress together instead of piecing a study session across separate
            apps.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">
          {/* Connecting line on large screens */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "left" }}
            className={`absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-transparent to-transparent lg:block ${
              isDark ? "via-green-400/30" : "via-green-500/40"
            }`}
          />

          <motion.div
            className="grid gap-5 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className={`group relative overflow-hidden rounded-3xl border p-7 backdrop-blur-sm transition-colors duration-300 sm:p-8 ${cardStyle}`}
              >
                {/* Number and icon */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { rotate: 5, scale: 1.06 }
                    }
                    transition={{ duration: 0.2 }}
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/[0.08] text-green-500 transition-all duration-300 group-hover:bg-green-500/[0.14] ${
                      isDark
                        ? "shadow-[0_0_35px_rgba(74,222,128,0.06)] group-hover:shadow-[0_0_40px_rgba(74,222,128,0.12)]"
                        : "shadow-[0_0_25px_rgba(34,197,94,0.04)] group-hover:shadow-[0_0_35px_rgba(34,197,94,0.10)]"
                    }`}
                  >
                    <FontAwesomeIcon icon={step.icon} className="text-lg" />
                  </motion.div>

                  <span
                    className={`text-sm font-semibold tracking-widest ${numberColor}`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-semibold tracking-tight ${headingColor}`}
                >
                  {step.title}
                </h3>

                <p className={`mt-3 text-sm leading-7 ${bodyColor}`}>
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-green-500 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                  <span>GoMi</span>

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[9px] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-0 rounded-3xl bg-gradient-to-br from-green-400/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-3 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          variants={fadeUp}
        >
          <span
            className={`h-px flex-1 bg-gradient-to-r from-transparent ${
              isDark ? "to-white/[0.08]" : "to-gray-200"
            }`}
          />

          <span className={`text-xs ${bodyColor}`}>
            One workspace. A clearer path to understanding.
          </span>

          <span
            className={`h-px flex-1 bg-gradient-to-l from-transparent ${
              isDark ? "to-white/[0.08]" : "to-gray-200"
            }`}
          />
        </motion.div>
      </div>
    </section>
  );
}