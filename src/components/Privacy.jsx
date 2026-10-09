
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
import { motion, useReducedMotion } from "motion/react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

export default function Privacy() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return true;

    return document.documentElement.classList.contains("dark");
  });

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;

    const updateTheme = () => {
      setIsDark(root.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const theme = {
    section: isDark
      ? "bg-[#0a0a0a] text-white"
      : "bg-white text-gray-950",

    heading: isDark
      ? "text-white"
      : "text-gray-950",

    gradientHeading:
      "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent",

    paragraph: isDark
      ? "text-gray-300"
      : "text-gray-600",

    muted: isDark
      ? "text-gray-400"
      : "text-gray-500",

    subtle: isDark
      ? "text-gray-500"
      : "text-gray-400",

    card: isDark
      ? "bg-[#111111]"
      : "bg-gray-50",

    cardBorder: isDark
      ? "border-white/10"
      : "border-gray-200",

    centerCard: isDark
      ? "bg-[#151515]"
      : "bg-emerald-50",

    smallIcon: isDark
      ? "bg-emerald-500/10 text-emerald-400"
      : "bg-emerald-100 text-emerald-700",

    boundary: isDark
      ? "bg-[#111111] border-white/10"
      : "bg-gray-50 border-gray-200",

    boundaryIcon: isDark
      ? "bg-emerald-500/10 text-emerald-400"
      : "bg-emerald-100 text-emerald-700",

    boundaryHeading: isDark
      ? "text-white"
      : "text-gray-950",
  };

  const reveal = shouldReduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : fadeUp;

  const stagger = shouldReduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : staggerContainer;

  const cardsStagger = shouldReduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : cardContainer;

  const cardHover = shouldReduceMotion
    ? undefined
    : {
        y: -6,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      };

  const iconHover = shouldReduceMotion
    ? undefined
    : {
        rotate: 6,
        scale: 1.06,
      };

  return (
    <section
      id="privacy"
      className={`${theme.section} overflow-hidden px-5 py-20 transition-colors duration-300 sm:px-8 md:py-28`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-16 grid items-end gap-8 md:grid-cols-2 md:gap-12"
        >
          <motion.div variants={reveal}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500">
              Your learning belongs to you
            </p>

            <h2
              className={`text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl ${theme.heading}`}
            >
              Built with{" "}
              <span className={theme.gradientHeading}>
                privacy
              </span>{" "}
              in mind.
            </h2>
          </motion.div>

          <motion.div variants={reveal}>
            <p
              className={`max-w-xl text-base leading-8 sm:text-lg ${theme.paragraph}`}
            >
              Your projects, notes, and learning history stay on your
              device. When you use AI features, your conversations are
              sent to the AI provider you choose. You stay in control
              of your work and how you use GoMi.
            </p>
          </motion.div>
        </motion.div>

        {/* Privacy cards */}
        <motion.div
          variants={cardsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3 md:gap-6"
        >
          {/* Local storage card */}
          <motion.div
            variants={reveal}
            whileHover={cardHover}
            className={`rounded-2xl border p-7 sm:p-8 ${theme.card} ${theme.cardBorder} transition-colors duration-300`}
          >
            <motion.div
              whileHover={iconHover}
              transition={{ duration: 0.2 }}
              className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${theme.smallIcon}`}
            >
              <FontAwesomeIcon
                icon={faDesktop}
                className="text-xl"
              />
            </motion.div>

            <h3
              className={`mb-3 text-xl font-semibold ${theme.heading}`}
            >
              Local first
            </h3>

            <p
              className={`text-sm leading-7 sm:text-base ${theme.paragraph}`}
            >
              Your projects, notes, and learning history stay on your
              device, giving you control over your personal workspace.
            </p>
          </motion.div>

          {/* GoMi privacy card */}
          <motion.div
            variants={reveal}
            whileHover={cardHover}
            className={`rounded-2xl border p-7 sm:p-8 ${theme.centerCard} ${theme.cardBorder} transition-colors duration-300`}
          >
            <motion.div
              whileHover={iconHover}
              transition={{ duration: 0.2 }}
              className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${theme.smallIcon}`}
            >
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-xl"
              />
            </motion.div>

            <h3
              className={`mb-3 text-xl font-semibold ${theme.heading}`}
            >
              You stay in control
            </h3>

            <p
              className={`text-sm leading-7 sm:text-base ${theme.paragraph}`}
            >
              GoMi helps you work with your learning materials while
              keeping you informed about how your information is used.
            </p>

            {/* Device-to-AI visual */}
            <div className="mt-7 flex items-center justify-between gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${theme.smallIcon}`}
              >
                <FontAwesomeIcon icon={faFolderOpen} />
              </div>

              <div className="flex flex-1 items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span
                  className={`h-px flex-1 border-t border-dashed ${
                    isDark
                      ? "border-emerald-400/50"
                      : "border-emerald-500/50"
                  }`}
                />

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${theme.smallIcon}`}
              >
                <FontAwesomeIcon icon={faCloud} />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className={`text-xs ${theme.muted}`}>
                Your device
              </span>

              <span className={`text-xs ${theme.muted}`}>
                AI provider
              </span>
            </div>
          </motion.div>

          {/* AI provider card */}
          <motion.div
            variants={reveal}
            whileHover={cardHover}
            className={`rounded-2xl border p-7 sm:p-8 ${theme.card} ${theme.cardBorder} transition-colors duration-300`}
          >
            <motion.div
              whileHover={iconHover}
              transition={{ duration: 0.2 }}
              className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${theme.smallIcon}`}
            >
              <FontAwesomeIcon
                icon={faCloud}
                className="text-xl"
              />
            </motion.div>

            <h3
              className={`mb-3 text-xl font-semibold ${theme.heading}`}
            >
              Clear AI boundaries
            </h3>

            <p
              className={`text-sm leading-7 sm:text-base ${theme.paragraph}`}
            >
              AI requests go to the provider you choose. That provider
              may process your prompts according to its own privacy
              policy and terms.
            </p>
          </motion.div>
        </motion.div>

        {/* Project boundaries */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className={`mt-8 rounded-2xl border p-6 sm:p-8 ${theme.boundary} transition-colors duration-300`}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <motion.div
              whileHover={iconHover}
              transition={{ duration: 0.2 }}
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${theme.boundaryIcon}`}
            >
              <FontAwesomeIcon
                icon={faLock}
                className="text-xl"
              />
            </motion.div>

            <div className="flex-1">
              <h3
                className={`mb-3 text-xl font-semibold ${theme.boundaryHeading}`}
              >
                Your work. Your boundaries.
              </h3>

              <p
                className={`max-w-3xl text-sm leading-7 sm:text-base ${theme.paragraph}`}
              >
                GoMi is designed to keep your personal workspace
                separate from external AI services. Only send the
                information you intend to include in an AI request,
                and review the privacy practices of your chosen
                provider when using its services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="mx-auto mt-16 max-w-2xl text-center md:mt-20"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 5, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full ${theme.smallIcon}`}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </motion.div>

          <h3
            className={`text-2xl font-semibold tracking-tight sm:text-3xl ${theme.heading}`}
          >
            Focus on learning.

            <span className="mt-2 block text-emerald-500">
              Not worrying about your data.
            </span>
          </h3>

          <p
            className={`mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base ${theme.muted}`}
          >
            Learn, build, and experiment with greater confidence
            while staying mindful of where your information goes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
