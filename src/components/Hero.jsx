import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

const Hero = () => {
  const bubbles = [
    {
      pos: "top-[15%] left-[5%]",
      name: "Sarah K.",
      text: "Candidates wait 3 weeks for replies. We're losing talent.",
      delay: 0,
    },
    {
      pos: "top-[20%] right-[8%]",
      name: "Rahul M.",
      text: "Hired on gut feeling. They quit in 2 months.",
      delay: 0.5,
    },
    {
      pos: "bottom-[20%] left-[8%]",
      name: "Priya S.",
      text: "I'm the CEO and HR? Zero time to read resumes.",
      delay: 1,
    },
    {
      pos: "bottom-[15%] right-[5%]",
      name: "Amit T.",
      text: "Best candidates accept other offers while we wait.",
      delay: 1.5,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
      {/* Background elements that react to mode */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-white/20 dark:bg-brand-accent3/20 rounded-full blur-[150px] opacity-40 animate-pulse" />

      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-brand-accent3/10 text-black dark:text-brand-accent3 text-sm font-medium mb-10 backdrop-blur-md"
        >
          {/* <Sparkles size={14} /> */}
          <span>Automating workflows with RecruiterAI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 text-black dark:text-white"
        >
          Every Hire, <br />
          <span className="text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-brand-accent3 dark:via-brand-accent2 dark:to-brand-accent3 dark:bg-[length:200%_auto] dark:animate-gradient drop-shadow-2xl">
            Faster and Better
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-black/70 dark:text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light"
        >
          Stop losing great candidates to slow, manual hiring processes. Let AI
          handle the heavy lifting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="px-10 py-4 bg-black dark:bg-brand-accent3 text-white dark:text-black rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl">
            Start Hiring Smarter
          </button>
          <button className="flex items-center gap-2 px-8 py-4 text-black dark:text-gray-300 font-bold hover:opacity-60 transition-opacity border border-black/10 dark:border-white/10 rounded-xl">
            See How It Works <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Persona Bubbles */}
      <div className="hidden xl:block">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{
              delay: b.delay,
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${b.pos} max-w-[300px] p-6 rounded-2xl bg-white/20 dark:bg-white/5 backdrop-blur-2xl border border-black/10 dark:border-brand-accent3/20 shadow-2xl z-20`}
          >
            <p className="text-sm font-bold text-black dark:text-white leading-none">
              {b.name}
            </p>
            <p className="text-sm text-black/80 dark:text-gray-300 italic mt-3">
              "{b.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Hero;
