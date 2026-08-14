"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="pt-16 pb-8 md:pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            My career journey and professional milestones.
          </p>
        </motion.div>

        <div className="relative md:border-l md:border-card-border ml-0 md:ml-6 space-y-12 pb-0 md:pb-12">
          {RESUME_DATA.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              <div className="hidden md:flex absolute left-[-17px] top-1 w-8 h-8 rounded-full bg-primary-900 border-4 border-background items-center justify-center" aria-hidden="true">
                <Briefcase className="w-3 h-3 text-emerald-400" />
              </div>

              <div className="glass p-6 md:p-8 rounded-2xl relative group hover:border-emerald-500/30 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-emerald-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex flex-col items-start md:flex-row md:items-center py-1 px-3 rounded-full bg-card-border text-foreground/70 text-sm font-medium md:whitespace-nowrap h-fit text-left w-fit">
                    {exp.date.split(', ').map((d, i, arr) => (
                      <span key={i} className="block md:inline">
                        {d}{i < arr.length - 1 ? <span className="hidden md:inline">,</span> : ""}
                      </span>
                    ))}
                  </span>
                </div>

                {"stats" in exp && Array.isArray(exp.stats) && exp.stats.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.stats.map((stat: string) => (
                      <div key={stat} className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-primary-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-sm shadow-[0_0_15px_rgba(45,212,191,0.2)] flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {stat}
                      </div>
                    ))}
                  </div>
                )}

                <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-emerald-400">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-foreground/70 text-sm pl-1">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded bg-primary-900/50 text-emerald-300 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
