# Prospira Digital Product Agency — Exact Reconstruction

High-performance, pixel-precise recreation of the Prospira website: [https://prospira-agency-iuzt.vercel.app/](https://prospira-agency-iuzt.vercel.app/)

## Features & Highlights

- **Exact Design & Color Palette**: Extracted directly from production CSS `:root` variables (Cream `#FBF5E4`, Dark Slate `#233038`, Vibrant Orange `#FF5D05`, Deep Teal `#075056`, Gold `#F4D47C`).
- **All 6 Real Pages & Navigation**:
  - `Home (/)`: Hero with floating 3D tilt showcase, upward-counting statistics panel, client logos strip, 6 service cards with ambient glow, and high-impact CTA.
  - `Services (/services)`: Complete services list with real-time dynamic scope calculator and sticky estimate summary.
  - `Work (/portfolio)`: Filterable portfolio masonry grid with smooth `AnimatePresence` layout animations and case study reveals.
  - `Process (/process)`: Alternating timeline with central glowing connector line and step cards.
  - `About (/about)`: Company philosophy, 4-pillar principles grid, and dual-ambient orb banner.
  - `Contact (/contact)`: Interactive AI Project Advisor for instant tech stack & roadmap generation, plus inquiry form.
- **Physics-Based Animations**:
  - Dual-ring custom cursor with spring-damping physics (`damping: 25`, `stiffness: 400`).
  - Magnetic buttons with spring attraction (`damping: 15`, `stiffness: 150`) and light-sweep hover effect.
  - Upward count-up statistics with intersection observer triggers.
  - Vertical scroll progress bar tracking page depth.
  - Adaptive glassmorphic header transitioning on scroll.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run preview
```
