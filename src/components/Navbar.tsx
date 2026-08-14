"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, GitBranch, Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";
import { RESUME_DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./ui/MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 lg:px-8"
    >
      <nav className="glass w-full max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-primary-500"
        >
          {RESUME_DATA.personal.name.split(" ")[0]}
        </a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-medium text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-card-border" />
          <div className="flex items-center gap-4">
            <MagneticButton>
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-emerald-400 transition-colors flex p-2 -m-2"
              >
                <GitBranch className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-emerald-400 transition-colors flex p-2 -m-2"
              >
                <Briefcase className="w-5 h-5" />
              </a>
            </MagneticButton>
          </div>
        </div>

        <button
          className="md:hidden text-foreground/80 hover:text-emerald-400 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="hover:text-emerald-400 transition-colors block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-px w-full bg-card-border" />
          <div className="flex items-center gap-4">
            <MagneticButton>
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-emerald-400 transition-colors flex p-2 -m-2"
              >
                <GitBranch className="w-5 h-5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-emerald-400 transition-colors flex p-2 -m-2"
              >
                <Briefcase className="w-5 h-5" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
}
