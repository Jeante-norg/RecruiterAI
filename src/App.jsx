import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Flowcharts from "./components/Flowcharts";
import ImpactMetrics from "./components/ImpactMetrics";
import LogoSlider from "./components/LogoSlider";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import { Sun, Moon } from "lucide-react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply dark class to body for Tailwind's dark: prefix
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="min-h-screen font-sans transition-colors duration-500 bg-brand-accent3 dark:bg-brand-bgDark selection:bg-brand-primary selection:text-white">
      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 z-[100] p-4 rounded-2xl bg-black/10 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-black dark:text-white shadow-2xl hover:scale-110 transition-all"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <Hero />
      <Flowcharts />
      <ImpactMetrics />
      <LogoSlider />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

export default App;
