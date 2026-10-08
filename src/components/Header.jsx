import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how-it-works" },
    { label: "What you can do", href: "#what-you-can-do" },
    { label: "Privacy", href: "#privacy" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-[22px] tracking-tight"
          aria-label="GoMi home"
        >
          <span className="font-bold text-white">Go</span>
          <span className="font-bold text-green-400">Mi</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-gray-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Download */}
          <a
            href="#download"
            className="group flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2.5 text-sm font-semibold text-green-300 transition-all duration-200 hover:border-green-400/50 hover:bg-green-400/15 hover:text-green-200"
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          <nav>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
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
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-5 py-3 text-sm font-semibold text-green-300 transition-all duration-200 hover:bg-green-400/15"
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
