"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { type ElementType } from "react";
import { User, Languages } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: ElementType }[];
}) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-foreground/90 flex items-center justify-center md:justify-start gap-3 text-center md:text-left" dangerouslySetInnerHTML={{ __html: title }} />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center md:justify-start gap-3"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass glass-hover flex items-center gap-2 px-4 py-2 rounded-xl cursor-default"
          >
            <skill.icon className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground/80">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="pt-16 pb-[35px] md:pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-emerald-400">Expertise</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto md:mx-0">
            A comprehensive overview of my technical expertise, tools, and languages. I&nbsp;continuously explore new technologies to build better&nbsp;digital products and work effectively in a team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <SkillCategory title="Frontend" skills={RESUME_DATA.skills.frontend} />
          <SkillCategory title="Backend & Database" skills={RESUME_DATA.skills.backend} />
          <SkillCategory title="Tools, AI & Design" skills={RESUME_DATA.skills.tools} />
          <SkillCategory
            title="Languages"
            skills={RESUME_DATA.personal.languages.map(l => ({ name: l, icon: Languages }))}
          />
        </div>
      </div>
    </section>
  );
}
