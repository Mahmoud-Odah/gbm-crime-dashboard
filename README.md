# 📊 GBM Crime Dashboard

A modern, responsive dashboard built with **Next.js** to visualize crime data across the UAE.  
It features interactive maps and charts to help track, analyze, and understand crime trends in different emirates.

---

## 🚀 Features

- 🗺️ **Map View**: Interactive map displaying all reported crimes across Emirates.
- 📈 **Charts & Graphs**: Dynamic visualizations such as pie charts and bar charts to analyze crime types, distribution, severity, and more.
- 🌗 **Dark / Light Theme**: Toggle between light and dark themes seamlessly.
- 🌍 **Internationalization (i18n)**: Supports both Arabic and English interfaces.
- 📱 **Responsive Design**: Fully optimized for all screen sizes.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Next.js 15** (App Router with Turbopack)
- **React 19**
- **Tailwind CSS** – Utility-first styling
- **Lucide React** – Icon library
- **Radix UI** – Accessible UI components (e.g. dropdown menu)

### Charts & Maps
- **Recharts** – Dynamic data visualizations
- **React Leaflet + Leaflet** – Interactive maps

### Theming & Utilities
- **next-themes** – Light/Dark mode toggling
- `clsx`, `class-variance-authority`, `tailwind-merge` – Class name utilities

### Type System & Tooling
- **TypeScript**
- **ESLint**
- **PostCSS & Autoprefixer**

---

## 🧑‍💻 Getting Started

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Start the production server
npm start
