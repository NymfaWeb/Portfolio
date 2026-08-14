"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="pt-16 pb-[35px] md:pb-16 px-4 sm:px-6 lg:px-8 relative bg-card-border/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-emerald-400">My Education</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 items-center">
          {RESUME_DATA.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl w-full max-w-2xl relative group hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary-900 rounded-full border-4 border-background flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-foreground/80 mb-4">{edu.institution}</p>
                <span className="inline-block py-1 px-3 rounded-full bg-card-border text-foreground/70 text-sm font-medium">
                  {edu.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
