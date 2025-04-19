<div align="center">
  
  # 🌙 curate-nights ✨

  <img src="./public/favicon.ico" alt="curate-nights logo" width="200"/>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF.svg)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
  
  *Discover and share the best nightlife experiences* 🍸🎵🎭
  
  </div>
  
  ---
  
  ## 📋 Table of Contents
  
  - [✨ Overview](#-overview)
  - [🚀 Features](#-features)
  - [🛠️ Technology Stack](#️-technology-stack)
  - [🏁 Getting Started](#-getting-started)
  - [📖 Usage Guide](#-usage-guide)
  - [📚 Component Documentation](#-component-documentation)
  - [📄 License](#-license)
  - [📞 Contact](#-contact)
  
  ---
  
  ## ✨ Overview
  
  **curate-nights** is a dynamic event discovery platform focused on helping users find, share, and rate the best nightlife venues and experiences. From trendy nightclubs and intimate jazz lounges to spectacular rooftop bars and unique events, our platform empowers users to explore and contribute to a curated collection of nightlife options.
  
  <div align="center">
  <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bmlnaHRsaWZlfHx8fHx8MTY4NTY0NzYwMQ&ixlib=rb-4.0.3&q=80&w=800" alt="curate-nights nightlife" width="80%"/>
  
  *Discover vibrant nightlife experiences with curate-nights*
  </div>
  
  ---
  
  ## 🚀 Features
  
  - 🎭 **Venue Discovery** - Browse a curated selection of nightclubs, bars, lounges, and special events
  - 🏷️ **Category Filtering** - Easily filter venues by categories like Nightclubs, Lounges, Bars, Shows, and Events
  - ⬆️ **Voting System** - Upvote and downvote venues to help the best places rise to the top
  - ➕ **Submit New Venues** - Share your favorite nightlife spots with the community
  - 🌟 **Detailed Listings** - View rich descriptions and images of each venue
  - 🌓 **Dark/Light Modes** - Browse in your preferred theme for optimal viewing any time of day
  - 📱 **Responsive Design** - Enjoy a seamless experience across all devices
  
  ---
  
  ## 🛠️ Technology Stack
  
  Our platform leverages modern web technologies for a smooth, engaging user experience:
  
  ### Frontend
  - **[React](https://reactjs.org/)** (v18.3.1) - UI library
  - **[TypeScript](https://www.typescriptlang.org/)** (v5.5.3) - Type safety
  - **[Vite](https://vitejs.dev/)** (v5.4.1) - Build tool and dev server
  - **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
  
  ### UI Components
  - **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
  - **[Recharts](https://recharts.org/)** - Data visualization
  - **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon set
  - **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
  
  ### State Management
  - **Context API** - Lightweight state management
  - **[React Query](https://tanstack.com/query)** - Data fetching and caching

### Form Handling
- **[React Hook Form](https://react-hook-form.com/)** with Zod validation

### Development Tools
- **[ESLint](https://eslint.org/)** (v9.9.0) - Code linting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/aloukikjoshi/curate-nights.git
cd curate-nights
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

The application will be available at [http://localhost:8080](http://localhost:8080) (or the port specified in your configuration).

### Build for Production

```bash
npm run build
```

This will generate optimized assets in the `dist` directory.

---

## 📖 Usage Guide

### 🧭 Browsing Nightlife Venues

<div align="center">
  <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Nightlife venue browsing" width="80%"/>
</div>

1. **Explore Venues**: Browse through our curated collection of nightlife venues on the main page
2. **Filter by Category**: Use the category buttons to filter venues by type:
   - Nightclubs
   - Lounges
   - Bars
   - Shows
   - Events

### ⬆️ Voting on Venues

<div align="center">
  <img src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Voting on venues" width="80%"/>
</div>

Help the community discover the best venues by voting:

- Click 👍 to upvote venues you recommend
- Click 👎 to downvote venues that didn't meet expectations
- Your votes affect the popularity ranking of venues

### ➕ Submitting New Venues

<div align="center">
  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Submit new venues" width="80%"/>
</div>

Share your favorite nightlife spots with the community:

1. Click the **Add New** button in the navigation bar
2. Fill out the submission form with:
   - Venue title
   - Detailed description
   - Image URL (for the venue photo)
   - Category selection
   - Your username
3. Submit the form to add your venue to the platform

### 🌓 Theme Switching

Toggle between light and dark modes using the theme toggle in the navigation bar to suit your preference or time of day.

---

## 📚 Component Documentation

### Core Components

#### `<DataProvider />`
- Manages the global state for venues and user interactions
- Handles voting system and content filtering
- Provides context for venue data throughout the application

#### `<VenueCard />`
- Displays individual venue information
- Implements voting functionality
- Renders venue images, descriptions, and metadata

#### `<CategoryFilter />`
- Enables filtering venues by category
- Maintains selected category state
- Provides visual feedback for active filters

#### `<AddVenueForm />`
- Handles new venue submissions
- Implements form validation
- Manages image URL preview

#### `<ThemeToggle />`
- Switches between light and dark modes
- Persists theme preference
- Provides smooth theme transitions

---

## 📄 License

This project is licensed under the Apache License 2.0 - see [APACHE-LICENSE](LICENSE) for details.

## 📞 Contact

GitHub: @aloukikjoshi

<hr>
<div align="center">Made with ❤️ by Aloukik Joshi</div>

