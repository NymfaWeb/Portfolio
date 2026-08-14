"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { RESUME_DATA } from "@/data/resume";
import Image from "next/image";

export function Hero() {
  const titles = ["Web Developer", "Front-end Developer", "Email Developer"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-32 lg:pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 opacity-50" />

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
        >
          <div className="flex flex-col items-center lg:items-start w-full">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block py-1 px-3 rounded-full glass text-emerald-400 text-sm font-medium mb-4"
            >
              Open to work
            </motion.span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-primary-500">
                {RESUME_DATA.personal.name.split(" ")[0]}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-foreground/80 font-medium flex items-center min-h-[1.5em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="italic"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>
          </div>

          <p className="text-[15px] sm:text-[17px] text-foreground/60 leading-relaxed max-w-xl text-center lg:text-left">
            {RESUME_DATA.personal.bio}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4 w-full">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-card-border hover:bg-card-border/80 text-foreground font-medium rounded-full transition-all border border-transparent hover:border-blue-500 hover:text-blue-500"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto lg:mx-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/30 to-primary-600/30 blur-2xl animate-pulse" />
          <div className="relative w-full h-full rounded-full border-2 border-card-border p-2 glass overflow-hidden flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-card-border/50 flex items-center justify-center overflow-hidden relative">
              <Image src="/avatar.png" alt="Profile Picture" fill className="object-cover" quality={100} priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
