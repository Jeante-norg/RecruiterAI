import React from "react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-brand-accent3 dark:bg-brand-bgDark text-black dark:text-white text-center px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Hire Better, Faster?
        </h2>
        <p className="text-xl mb-10 opacity-70">
          Join 500+ companies using RecruiterAI to build their dream teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-black dark:bg-brand-accent3 text-white dark:text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Start Free Trial
          </button>
          <button className="px-10 py-4 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
