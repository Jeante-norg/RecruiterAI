import React from "react";

const LogoSlider = () => {
  const logos = [
    "LinkedIn",
    "Naukri.com",
    "Indeed",
    "AngelList",
    "Instahyre",
    "Wellfound",
    "IIMJobs",
    "Glassdoor",
    "Monster India",
    "Cutshort",
  ];

  return (
    <section className="py-20 bg-brand-accent3 dark:bg-brand-bgDark overflow-hidden border-y border-black/10 dark:border-white/10 transition-colors duration-500">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold text-black dark:text-white">
          Post Once, Reach Everywhere
        </h2>
        <p className="text-black/60 dark:text-gray-400 mt-2">
          RecruiterAI automatically syncs your job postings across all major
          platforms
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee flex whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="mx-12 flex items-center justify-center">
              <span className="text-4xl font-bold text-black/20 dark:text-white/20 hover:text-black dark:hover:text-brand-accent3 transition-all cursor-pointer duration-300">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles Inline for safety */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;
