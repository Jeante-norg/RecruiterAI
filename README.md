# RecruiterAI

A high-performance, modern SaaS landing page for an AI-driven recruitment platform. This project features a custom **"Cyber-Flip"** theme engine that seamlessly toggles between a vibrant Lavender-Light mode and a sleek Midnight-Dark mode.

## Key Features

- **Cyber-Flip Theme Engine**: A bespoke implementation that swaps the entire color palette (Purple `#B197FC` ↔ Black `#000000`) with smooth 500ms transitions.
- **Automated Workflow Flowcharts**: Interactive, high-contrast decision trees showing Screening, Interviewing, and Offer stages with custom logic paths.
- **Logo Ticker / Slider**: An infinite-scroll social proof section showcasing top companies using the platform.
- **Impact Metrics Dashboard**: Data-driven grid highlighting key performance indicators like 70% faster time-to-hire.
- **Glassmorphic UI**: Modern design aesthetic using background blurs, thin borders, and translucent layers.
- **Fully Responsive**: Hand-crafted Tailwind layouts that scale perfectly from mobile devices to large desktops.

## Tech Stack

- **Framework**: [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Transitions & Tailwind variants

## Project Structure

```text
src/
├── components/
│   ├── Hero.jsx            # High-impact value proposition & primary CTA
│   ├── LogoSlider.jsx      # Infinite-scroll social proof (New)
│   ├── Flowcharts.jsx      # Decision-tree workflow visualization (The Core)
│   ├── ImpactMetrics.jsx   # Data-driven performance statistics
│   ├── Testimonials.jsx    # High-contrast social proof cards
│   ├── FAQ.jsx             # Glassmorphic accordion for common queries
│   └── FinalCTA.jsx        # Conversion-focused closing section
├── App.jsx                 # Theme state management & component assembly
└── index.css               # Tailwind directives & custom brand colors
```
