import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "How does the AI screening work?",
      a: "Our AI analyzes resumes and screening questions against your specific job requirements, ranking candidates based on skills, experience, and cultural fit.",
    },
    {
      q: "Does it integrate with my existing ATS?",
      a: "Yes, RecruiterAI offers seamless one-click integrations with major ATS platforms like Greenhouse, Lever, and Ashby.",
    },
    {
      q: "What is the pricing model?",
      a: "We offer flexible usage-based pricing designed for growing startups. You only pay for the active hiring pipelines you manage.",
    },
    {
      q: "How long does setup take?",
      a: "You can be up and running in less than 15 minutes. Just connect your job boards and define your first workflow.",
    },
    {
      q: "Is my candidate data secure?",
      a: "Security is our priority. We are SOC2 Type II compliant and use enterprise-grade encryption for all candidate and company data.",
    },
  ];

  return (
    <section className="py-24 bg-brand-accent3 dark:bg-brand-bgDark px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden transition-all"
            >
              <summary className="flex items-center justify-between cursor-pointer">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {faq.q}
                </h3>
                <span className="ml-4 transition-transform group-open:rotate-180 text-black dark:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-black/70 dark:text-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
