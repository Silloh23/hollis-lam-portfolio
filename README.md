# Hollis Lam — Interactive Portfolio

An elegant, highly interactive, and production-ready developer portfolio for **Hollis Lam**, a Computer Science student at the **University of Bath** with professional experience at **Amazon Web Services (AWS)** and **Zoftable**. 

This portfolio showcases key software engineering projects, professional experience, academic achievements, and extracurricular highlights in a modern, responsive, dark-themed user interface.

---

## Key Features

*   **Interactive Project Gallery:** Highlighted key projects with deep-dive technical breakdowns, impact metrics, and direct links to active GitHub repositories.
*   **Dynamic Timeline Experience:** Interactive switcher to seamlessly explore professional work experience, education, and competitive extracurricular achievements.
*   **Integrated Contact Engine:** A secure, interactive contact form with client-side validation, beautiful feedback states, and full integration with the **Web3Forms** email API.
*   **Stunning Visual Identity:** Built on a clean, space-inspired aesthetic featuring premium typography, high-contrast layouts, smooth custom enter/exit animations via `motion`, and full responsive behavior.

---

## Tech Stack

*   **Frontend Framework:** React 19 & TypeScript
*   **Bundler & Dev Server:** Vite 6
*   **Styling & Theme:** Tailwind CSS v4 (off-white grids, elegant card layouts, and subtle neon highlights)
*   **Animations:** Motion (`motion/react`) for smooth, high-fidelity micro-interactions and staggered entry animations
*   **Iconography:** Lucide React

---

## Getting Started

To run the application locally on your machine, follow these instructions:

### Prerequisites

*   **Node.js:** Ensure you have Node.js installed (v18 or higher is recommended).
*   **NPM:** npm is bundled with Node.js and is used for dependency management.

### Installation & Execution

1.  **Clone or download** the project directory to your local machine.
2.  **Navigate** to the project directory:
    ```bash
    cd hollis-lam-portfolio
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the development server**:
    ```bash
    npm run dev
    ```
5.  **Open your browser** and navigate to:
    ```
    http://localhost:3000
    ```

---

## Troubleshooting Common Run Errors

### "Cannot find native binding" / Tailwind Oxide Bug
If you encounter an error when starting the dev server on your local machine (common on macOS/MacBook Air architectures), such as:
```
Error: Cannot find native binding. npm has a bug related to optional dependencies...
Error when starting dev server: Cannot find native binding.
```
This is a known bug with NPM when downloading native dependencies across different operating systems. You can fix this easily with the following steps:

1.  **Clean your workspace** by deleting `node_modules` and the auto-generated lockfile:
    ```bash
    rm -rf node_modules package-lock.json
    ```
2.  **Re-run installation** to download the clean native architecture bindings for your exact operating system:
    ```bash
    npm install
    ```
3.  **Run the development server again**:
    ```bash
    npm run dev
    ```

---

## Project Structure

```
├── .env.example          # Template for environment variables (Web3Forms Key)
├── index.html            # Primary HTML entry point
├── package.json          # Configuration, script commands, and npm dependencies
├── vite.config.ts        # Vite configuration with Tailwind CSS v4 support
└── src/
    ├── main.tsx          # Application bootstrapper
    ├── App.tsx           # Main application structure & layout
    ├── types.ts          # Consolidated global TypeScript definitions
    ├── data.ts           # Highly curated data file containing experiences and projects
    ├── index.css         # Tailwind global stylesheet & typography configuration
    └── components/
        ├── Navbar.tsx    # Header navigation with glassmorphism styling
        ├── Hero.tsx      # Landing layout with interactive personal card
        ├── Skills.tsx    # Category-based skills grid
        ├── ProjectGallery.tsx # Deep-dive project dialogs and filterable gallery
        ├── Experience.tsx # Tabs-driven professional timeline
        ├── ContactForm.tsx # Secure Web3Forms form with feedback banners
        └── Footer.tsx    # Social channels and copyright block
```

---

*All rights reserved by Hollis Lam.*
