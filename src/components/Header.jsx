import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
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
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-[22px] tracking-tight"
          aria-label="GoMi home"
        >
          <span className="font-bold text-white-950">Go</span>
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#how-it-works"
            className="group flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 bg-green-500"
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
          className="flex h-10 w-10 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-gray-100 md:hidden text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-5 md:hidden">
          <nav>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-950"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#product"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 "
          >
            Explore GoMi
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </a>
        </div>
      )}
    </header>
  );
}
