"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { ExternalLink, GitBranch } from "lucide-react";
import Tilt from "react-parallax-tilt";

export function Projects() {
  return (
    <section id="projects" className="pt-16 pb-[35px] md:pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Private <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A selection of my personal work, side projects, and experiments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#5eead4"
                glarePosition="all"
                glareBorderRadius="1rem"
                className="h-full"
                tiltReverse={true}
              >
                <div className="glass p-8 rounded-2xl flex flex-col h-full group hover:border-emerald-500/30 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground/70 mb-8 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-col gap-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded bg-primary-900/50 text-emerald-300 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-card-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-emerald-400 transition-colors"
                  >
                    <GitBranch className="w-4 h-4" />
                    Repository
                  </a>
                </div>
              </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
