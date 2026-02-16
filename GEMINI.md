# Project Overview

This is a React-based single-page web application for a "FREESTYLE - Women's Edition" workshop. The application is built using Vite, TypeScript, and styled with Tailwind CSS. It features a modern, animated, and responsive design with a glassmorphism effect on the header. The content is in Hebrew and aims to provide information about the workshop, including its purpose, structure, and contact details.

## Main Technologies

-   **Framework:** React
-   **Build Tool:** Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **Animations:** `react-intersection-observer` for scroll-based animations.
-   **Icons:** `react-icons`

## Project Structure

-   `src/App.tsx`: The main and only component, containing the entire application logic and layout.
-   `public/`: Contains static assets like images (`logo.png`, `main.jpeg`) and SVGs.
-   `tailwind.config.js`: Tailwind CSS configuration with custom theme extensions.
-   `vite.config.ts`: Vite configuration, including the React and Tailwind CSS plugins.
-   `package.json`: Defines project dependencies and scripts.

# Building and Running

## Development

To run the application in development mode with hot-reloading:

```bash
npm run dev
```

## Building for Production

To build the application for production:

```bash
npm run build
```

This command first runs the TypeScript compiler (`tsc -b`) and then builds the project with Vite. The output will be in the `dist` directory.

## Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

# Development Conventions

## Linting

The project is configured with ESLint. To run the linter and check for code quality issues:

```bash
npm run lint
```

The configuration is in the `eslint.config.js` file.

## Styling

The project uses Tailwind CSS for utility-first styling. Customizations to the default theme, such as fonts and colors, are defined in `tailwind.config.js`.

## Component Structure

The application is composed of a single main component, `App.tsx`. Different sections of the page are created as distinct `<section>` elements within this component. Reusable animation logic is encapsulated in the `AnimatedSection` and `AnimatedLogo` components.
