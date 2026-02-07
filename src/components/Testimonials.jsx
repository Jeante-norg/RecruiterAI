import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "RecruiterAI didn't just speed up our hiring; it improved the quality of our team. The AI screening found candidates we would have missed manually.",
      author: "Rahul Mehta",
      role: "Founder at TechStart Solutions",
      color: "border-brand-accent1",
    },
    {
      quote:
        "The multi-stage automation is a game changer. We went from 40 days to 10 days for our average time-to-hire. Simply incredible.",
      author: "Sarah Jenkins",
      role: "HR Director at InnovateFlow",
      color: "border-brand-accent2",
    },
  ];

  return (
    <section className="py-24 bg-brand-accent3 dark:bg-brand-bgDark px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          Trusted by Founders & Teams
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border-t-8 ${t.color} transition-all hover:-translate-y-2`}
            >
              <p className="text-xl italic text-gray-800 dark:text-gray-300 mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-black dark:text-white">
                  {t.author}
                </p>
                <p className="text-brand-primary font-semibold text-sm">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
