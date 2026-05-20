# Play.ht (Play.ai) Homepage Clone - Pixel-Perfect React Web App

A high-fidelity, responsive, and **pixel-perfect landing page clone** of the Play.ht (Play.ai) homepage. This application is built with **React** using modern modular `.jsx` files and styled with highly performant, custom **Vanilla CSS** and micro-interactions.

---

## 🎨 A Personal Developer's Perspective on the Project

### The "Defunct Domain" Challenge & Zero-Dependency Restoration
When I took over this repository, the site faced a critical issue: **Play.ht was acquired by Meta and permanently shut down on December 31, 2025**. Consequently, all remote images, voice narration avatars, and vector icon assets hosted under the `play.ht` and `play.ai` domains were completely offline, resulting in broken image icons and failed network fetches.

To restore this landing page to its absolute peak aesthetic form without compromising on performance, I refactored the media and asset loading strategy:
* **Custom speech Studio Dashboard**: Crafted an ultra-high-definition dark-mode Speech Studio dashboard mockup (`studio_mockup.png`) saved locally in the public folder to display the voice editor interface in razor-sharp quality.
* **Inline Vector SVGs**: Replaced all 8 dead remote iconography files with hand-crafted, zero-dependency inline SVGs styled with the exact branding brand colors (indigo `#6366f1` and grey hues). Inline vector icons scale flawlessly on high-DPI displays and have absolute immunity to latency and domain shutdowns.
* **Curated Narrative Avatars**: Replaced the dead avatar faces (`anthony.webp`, `arthur.webp`, etc.) with a highly professional, diverse array of 9 portrait photos sourced from tested Unsplash endpoints.
* **Unified White Brand Cloud**: The partner logo cloud (DoorDash, Salesforce, Spotify, etc.) was restored using Simple Icons SVGs, processed with a modern CSS filter stack (`filter: brightness(0) invert(1)`) to make them uniform white and transparent, with premium hover opacity micro-interactions.

---

## 📱 Premium Responsive Drawer Navigation

On screens with a width `<= 1024px`, the navigation bar gracefully collapses into a modern **hamburger menu**. Clicking this triggers a premium, side-drawer slide-out menu that matches the standard of modern SaaS applications:
1. **Slide-Out Transition**: Slides out smoothly from the right side of the screen using hardware-accelerated transforms (`transform: translateX()`) and custom Bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
2. **Glassmorphic Backdrop Blur**: A full-screen dark overlay fades in behind the drawer, utilizing advanced backdrop blurring (`backdrop-filter: blur(8px)`) to keep the user focused on navigation.
3. **Rotating Close Button**: A clean vector close (X) button with a rotational hover animation (`transform: rotate(90deg)`) for satisfying interactive feedback.
4. **List-Item Hover Indents**: Navigation list items slightly slide to the right (`padding-left: 8px`) and transition to neon lime-green (`#b4fd83`) on hover.
5. **Tactile CTAs**: Login and "Sign Up Free" buttons are fully customized for mobile touch interfaces, featuring interactive lift transformations and soft glowing box shadows.

---

## 📂 Modular React Folder Structure

The project employs an isolated, component-driven architecture. Each structural section is encapsulated in its own folder under `src/myComponents/`, containing its `.jsx` structural logic and a dedicated component-specific `.css` stylesheet.

```text
play.ht-homepage-clone/
├── public/                 # Static assets (HTML template, tab favicon, manifest)
│   ├── favicon.ico
│   ├── index.html          # HTML5 entry & Google Fonts imports (Inter, Roboto)
│   └── studio_mockup.png   # Custom-crafted AI Voice Studio mockup
└── src/
    ├── asset/              # Standard logo and branding icons
    ├── myComponents/       # Dedicated modular React components
    │   ├── 1_Header/       # Sticky Navigation Header & Mobile Drawer Menu
    │   │   ├── Header.jsx
    │   │   └── Header.css
    │   ├── 2_Title/        # Hero Headline and CTA Section
    │   │   ├── Title.jsx
    │   │   └── Title.css
    │   ├── 3_Input/        # Speech Input Box & Voice Dropdowns
    │   │   ├── Input.jsx
    │   │   └── Input.css
    │   ├── 4_Users/        # Customer Logo Cloud (Simple Icons SVGs)
    │   │   ├── Users.jsx
    │   │   └── Users.css
    │   ├── 5_Voice_generator/ # Narrator Profile Cards & Unsplash Avatars
    │   │   ├── Voice_generator.jsx
    │   │   └── Voice_generator.css
    │   ├── 6_Feature/      # Studio Editor Grid Features (Local Mockups)
    │   │   ├── Feature.jsx
    │   │   └── Feature.css
    │   ├── 7_Feature_2/    # Additional Feature Highlights & Grid Panels
    │   │   ├── Feature_2 .jsx
    │   │   └── Feature_2.css
    │   ├── 8_Leading/      # Use-case Highlights (AI Podcasts, Audiobooks)
    │   │   ├── Leading.jsx
    │   │   └── Leading.css
    │   ├── 9_Voices/       # Embedded Audio Samples Showcase
    │   │   ├── Voices.jsx
    │   │   └── Voices.css
    │   ├── 10_Synthesis/   # Speech Synthesis API documentation references
    │   │   ├── Synthesis.jsx
    │   │   └── Synthesis.css
    │   ├── 11_Work/        # Developer Integration and API Code Blocks
    │   │   ├── Work.jsx
    │   │   └── Work.css
    │   ├── 12_About/       # Security, Compliance, & Trust Badges
    │   │   ├── About.jsx
    │   │   └── About.css
    │   ├── 13_Fotter/      # Sitemap links & social links
    │   │   ├── Fotter.jsx
    │   │   └── Fotter.css
    │   └── 14_Model/       # Floating Help Modal Bubble
    │       ├── Model.jsx
    │       └── Model.css
    ├── App.jsx             # Main Orchestration mounting all sections
    ├── App.css             # Page body layout
    ├── index.js            # Webpack React DOM entry point
    └── index.css           # Global typography, colors, resets
```

---

## 🛠️ Technology Stack & Styling

* **Core Framework**: [React 19](https://react.dev/)
* **Component-File Extension**: Modern `.jsx` for explicit tag parsing
* **Styling Paradigm**: Modular Vanilla CSS (avoiding heavy framework overhead to achieve exceptionally fast page loads)
* **Fonts & Icons**: Custom Google Fonts (Inter, Roboto, and material symbols outline font)
* **Media Optimization**: Optimized vector SVGs and CDN caching for visual assets.

---

## 💻 Available Scripts

In the project root, you can run the following development commands:

### `npm start`
Launches the local Webpack development server.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload and update automatically as you modify the files.

### `npm run build`
Compiles and bundles the entire application for production into the `build/` folder.\
Optimizes, minifies, and bundles assets, ensuring a highly performant and production-ready static website package.
