"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Mail, MapPin, Briefcase } from "lucide-react";

export function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="contact" className="pt-16 pb-[35px] md:pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass glass-hover pt-8 px-8 pb-2.5 rounded-2xl flex flex-col items-center text-center gap-4 group h-full"
          >
            <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
              <Mail className="w-6 h-6 text-emerald-400" />
            </div>
            
            <div className="min-h-[84px] flex flex-col items-center justify-start w-full">
              <AnimatePresence mode="wait">
                {showEmail ? (
                  <motion.a
                    key="email-link"
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center w-full"
                  >
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70 text-sm hover:text-emerald-400 transition-colors">{RESUME_DATA.personal.email}</p>
                  </motion.a>
                ) : (
                  <motion.button
                    key="email-btn"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowEmail(true);
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center w-full cursor-pointer"
                  >
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <div className="px-4 py-1.5 glass border border-emerald-500/30 text-emerald-400 font-medium text-sm rounded-full group-hover:scale-110 group-hover:border-emerald-400/50 transition-all shadow-lg">
                      Show email
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>



          <motion.a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Visit my LinkedIn profile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass glass-hover pt-8 px-8 pb-2.5 rounded-2xl flex flex-col items-center text-center gap-4 group h-full"
          >
            <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
              <Briefcase className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="min-h-[84px] flex flex-col items-center justify-start w-full">
              <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
              <p className="text-foreground/70 text-sm hover:text-emerald-400 transition-colors">/in/aleksandragromek</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass pt-8 px-8 pb-2.5 rounded-2xl flex flex-col items-center text-center gap-4 h-full"
          >
            <div className="w-12 h-12 rounded-full bg-primary-900/50 flex items-center justify-center" aria-hidden="true">
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="min-h-[84px] flex flex-col items-center justify-start w-full">
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-foreground/70 text-sm">{RESUME_DATA.personal.location}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
