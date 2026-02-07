import React from "react";

const ImpactMetrics = () => {
  const stats = [
    { label: "Faster Screening", value: "10x" },
    { label: "Faster Hiring", value: "70%" },
    { label: "Lower Costs", value: "80%" },
    { label: "Qualified Apps", value: "89%" },
  ];

  return (
    <section className="py-24 px-6 text-black dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center group">
            <div className="text-8xl font-black mb-2 dark:text-brand-accent3 transition-transform group-hover:scale-110">
              {s.value}
            </div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold opacity-60">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ImpactMetrics;
