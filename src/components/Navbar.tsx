import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "../context/ThemeContext";
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import { FaFaceSmile } from "react-icons/fa6";
import { HiDownload, HiMenu, HiX } from "react-icons/hi";
import type { Theme } from "../types/theme";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
];

export const Navbar = () => {
  const [ThemeMenuOpen, setThemeMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { applyTheme } = useThemeContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const themes: { value: Theme; label: string }[] = [
    { value: "dark", label: "Dark" },
    { value: "light", label: "Light" },
    { value: "midnight", label: "Midnight" },
    { value: "sunset", label: "Sunset" },
    { value: "forest", label: "Forest" },
    { value: "nord", label: "Nord" },
    { value: "rose", label: "Rose" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setThemeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {" "}
      <nav className="flex justify-between items-center fixed top-0 left-0 w-full py-3 px-6 md:px-12 lg:px-20 bg-navbar backdrop-blur-md border-b border-border z-50">
        <FaFaceSmile className="text-2xl hidden md:flex" />
        <button className="" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <HiX className="md:hidden" />
          ) : (
            <HiMenu className="md:hidden" />
          )}
        </button>

        <ul className="hidden md:flex gap-8 lg:gap-12 items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              onClick={() => setMobileMenuOpen(false)}
              className="transition-colors duration-200"
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-text-primary hover:text-accent transition-colors duration-200 text-sm md:text-base lg:text-lg ${isActive ? "border-b-2 border-accent text-accent" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 justify-center relative  ">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            <HiDownload />
            CV
          </a>
          <button onClick={() => setThemeMenuOpen((prev) => !prev)}>
            <WiMoonAltWaningCrescent1 className="text-2xl" />
          </button>
          {ThemeMenuOpen && (
            <div
              ref={dropdownRef}
              className="flex gap-5  absolute top-8 right-0 bg-bg-secondary border border-border rounded-lg p-2 shadow-lg"
            >
              <ul>
                {themes.map(({ value, label }) => (
                  <li
                    key={value}
                    onClick={() => applyTheme(value)}
                    className="text-text-primary cursor-pointer hover:text-accent transition-colors duration-200 px-2 py-1 rounded"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col p-4 fixed top-16 left-0 w-full bg-navbar backdrop-blur-md border-b border-border z-40 md:hidden"
          >
            {navLinks.map(({ to, label }) => (
              <li
                key={to}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  "transition-colors duration-200",
                  mobileMenuOpen &&
                    "w-full px-6 py-3 hover:bg-bg-secondary rounded-lg",
                )}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-text-primary hover:text-accent transition-colors duration-200 ${isActive ? "border-b-2 border-accent text-accent" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
