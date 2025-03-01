<div align="center">
  <br />
    <a href="https://travel-web-ui-next-js.vercel.app/" target="_blank">
      <img src="/public/preview.png" alt="Web Preview">
    </a>
  <br />
  <br />
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="reactdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

<h3 align="center">Travel Explorer | Explore the world with Travel Explorer</h3>

   <div align="center">
     Travel Explorer is a modern and responsive travel website built with Next.js, React.js, and TailwindCSS. This platform allows users to explore travel destinations, book trips, and discover travel guides with an intuitive and visually appealing interface.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Travel Explorer is a next-generation travel website designed to ignite wanderlust and make trip planning effortless. Built with Next.js, React.js, and TailwindCSS, it delivers a blazing-fast, visually stunning, and user-friendly experience. With immersive destination pages, seamless trip booking, smart search and filter options, and lightning-fast performance, Travel Explorer ensures that users can explore breathtaking locations with ease. Its fully responsive design guarantees a flawless experience on any device, while Next.js optimizations enhance speed and SEO. Whether you're searching for your next adventure or planning the perfect getaway, Travel Explorer is your ultimate travel companion, making every journey unforgettable.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Appealing Hero Section**: Visually striking hero section that captures attention and sets the tone for the website

👉 **Camp Exploration Section**: Showcase various camps in a dedicated section, allowing users to explore different options.

👉 **Engaging Travel Guide Section**: A compelling travel guide section with informative content and captivating visuals.

👉 **Feature-Rich Section**: A complex and feature-rich section offering advanced functionalities or in-depth information.

👉 **Call to Action for Mobile Apps**: A call-to-action section encouraging users to explore the mobile app version, complete with download links.

👉 **Footer**: Comprehensive footer section containing site and social media links for easy navigation and connectivity.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/MenathNDGD/Travel-Web-UI-NextJS.git
cd Travel-Web-UI-NextJS
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants --> index.ts</code></summary>

```typescript
// NAVIGATION
export const NAV_LINKS = [
  { href: "#", key: "home", label: "Home", ref: "hero" },
  {
    href: "#camp",
    key: "hilink_camping",
    label: "Hilink Camping",
    ref: "camp",
  },
  {
    href: "#guide",
    key: "guide_support",
    label: "Guide & Support",
    ref: "guide",
  },
  { href: "#features", key: "features", label: "Features", ref: "features" },
  { href: "#get-app", key: "download", label: "Download", ref: "get-app" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      { name: "About Hilink", url: "/about-hilink" },
      { name: "Press Releases", url: "/press-releases" },
      { name: "Environment", url: "/environment" },
      { name: "Jobs", url: "/jobs" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Contact Us", url: "/contact-us" },
    ],
  },
  {
    title: "Our Community",
    links: [
      { name: "Climbing Xixixi", url: "/climbing-xixixi" },
      { name: "Hiking Hilink", url: "/hiking-hilink" },
      { name: "Hilink Kinthill", url: "/hilink-kinthill" },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: "/facebook.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: "/instagram.svg",
    },
    { name: "Twitter", url: "https://twitter.com", icon: "/twitter.svg" },
    { name: "YouTube", url: "https://www.youtube.com", icon: "/youtube.svg" },
    { name: "WordPress", url: "https://wordpress.com", icon: "/wordpress.svg" },
  ],
};
```

</details>

<details>
<summary><code>globals.css</code></summary>

```typescript
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter;
}

.btn_white {
  @apply border-white bg-white px-8 py-3 text-green-50;
}
.btn_white_text {
  @apply border-white bg-white px-8 py-3 text-gray-90;
}
.btn_green {
  @apply border-green-50 bg-green-50 hover:bg-green-600 px-8 py-5 text-white;
}
.btn_dark_green {
  @apply bg-green-90 px-8 py-4 text-white transition-all hover:bg-black;
}
.btn_dark_green_outline {
  @apply border-gray-20 bg-green-90 px-8 py-5 text-white;
}

.max-container {
  @apply mx-auto max-w-[1440px];
}

.padding-container {
  @apply px-6 lg:px-20 3xl:px-0;
}

.flexCenter {
  @apply flex items-center justify-center;
}

.flexBetween {
  @apply flex items-center justify-between;
}

.flexStart {
  @apply flex items-center justify-start;
}

.flexEnd {
  @apply flex items-center justify-end;
}

/* FONTS */
.regular-64 {
  @apply text-[64px] font-[400] leading-[120%];
}

.regular-40 {
  @apply text-[40px] font-[400] leading-[120%];
}

.regular-32 {
  @apply text-[32px] font-[400];
}

.regular-24 {
  @apply text-[24px] font-[400];
}

.regular-20 {
  @apply text-[20px] font-[400];
}

.regular-18 {
  @apply text-[18px] font-[400];
}

.regular-16 {
  @apply text-[16px] font-[400];
}

.regular-14 {
  @apply text-[14px] font-[400];
}

.medium-14 {
  @apply text-[14px] font-[600];
}

.bold-88 {
  @apply text-[88px] font-[700] leading-[120%];
}

.bold-64 {
  @apply text-[64px] font-[700] leading-[120%];
}

.bold-52 {
  @apply text-[52px] font-[700] leading-[120%];
}

.bold-40 {
  @apply text-[40px] font-[700] leading-[120%];
}

.bold-32 {
  @apply text-[32px] font-[700] leading-[120%];
}

.bold-20 {
  @apply text-[20px] font-[700];
}

.bold-18 {
  @apply text-[18px] font-[700];
}

.bold-16 {
  @apply text-[16px] font-[700];
}

/* Hero */
.hero-map {
  @apply absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60;
}

/* Camp */
.camp-quote {
  @apply absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0;
}

/* Feature */
.feature-phone {
  @apply absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20;
}

/* Get App */
.get-app {
  @apply max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "bg-img-3": "url('/img-3.png')",
        "bg-img-4": "url('/img-4.png')",
        "bg-img-5": "url('/img-5.png')",
        "bg-img-6": "url('/img-6.png')",
        "bg-img-7": "url('/img-7.png')",
        "bg-img-8": "url('/img-8.png')",
        "bg-img-9": "url('/img-9.png')",
        "bg-img-10": "url('/img-10.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
```

</details>

## <a name="more">🚀 More</a>

**Deploy on Vercel**

For a hassle-free deployment experience, use the **Vercel Platform**. Vercel, created by the team behind Next.js, provides an easy way to deploy and scale your application.

Check out the **Next.js deployment documentation** for more details on deploying your app.
