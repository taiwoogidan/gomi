import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
  faDownload,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dark mode is the default unless the user has saved a preference.
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("gomi-theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Apply the selected theme to the root HTML element and remember it.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("gomi-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how-it-works" },
    // { label: "What you can do", href: "#what-you-can-do" },
    { label: "Privacy", href: "#privacy" },
  ];

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
        isDark
          ? "border-white/10 bg-white/[0.04] text-yellow-300 hover:border-white/20 hover:bg-white/10"
          : "border-gray-200 bg-gray-100 text-gray-700 hover:border-gray-300 hover:bg-gray-200"
      }`}
    >
      <FontAwesomeIcon
        icon={isDark ? faSun : faMoon}
        className="text-sm"
      />
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isDark
          ? "border-white/5 bg-black/90"
          : "border-gray-200 bg-white/90"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-[22px] tracking-tight"
          aria-label="GoMi home"
        >
          <span
            className={`font-bold ${isDark ? "text-white" : "text-gray-950"}`}
          >
            Go
          </span>
          <span className="font-bold text-green-500">Mi</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isDark
                      ? "text-gray-400 hover:text-gray-100"
                      : "text-gray-600 hover:text-gray-950"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Theme Toggle */}
          {themeButton}

          {/* Download */}
          <a
            href="#download"
            className={`group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
              isDark
                ? "border-green-400/30 bg-green-400/10 text-green-300 hover:border-green-400/50 hover:bg-green-400/15 hover:text-green-200"
                : "border-green-600/30 bg-green-50 text-green-700 hover:border-green-600/50 hover:bg-green-100"
            }`}
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="text-xs transition-transform duration-200 group-hover:translate-y-0.5"
            />
            Download
          </a>

          {/* Explore GoMi */}
          <a
            href="#how-it-works"
            className="group flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-green-400"
          >
            Explore GoMi
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle */}
          {themeButton}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              isDark
                ? "text-white hover:bg-white/10"
                : "text-gray-900 hover:bg-gray-100"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className={`border-t px-5 py-5 md:hidden ${
            isDark
              ? "border-white/10 bg-black"
              : "border-gray-200 bg-white"
          }`}
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-gray-400 hover:bg-white/5 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Download */}
          <a
            href="#download"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-4 flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
              isDark
                ? "border-green-400/30 bg-green-400/10 text-green-300 hover:bg-green-400/15"
                : "border-green-600/30 bg-green-50 text-green-700 hover:bg-green-100"
            }`}
          >
            <FontAwesomeIcon icon={faDownload} className="text-xs" />
            Download GoMi
          </a>

          {/* Mobile Explore */}
          <a
            href="#how-it-works"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-green-400"
          >
            Explore GoMi
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </a>
        </div>
      )}
    </header>
  );
}
