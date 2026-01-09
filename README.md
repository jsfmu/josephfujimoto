# Joseph Fujimoto – Portfolio

A modern single-page portfolio built with React and Vite. The site highlights my experience, projects, and contact information and is delpoyed at [josephfujimoto.com](https://josephfujimoto.com).
## Features

- Sticky navigation with smooth section anchors
- Hero section with resume and social links
- About, Experience, Projects, and Contact sections fed by simple data modules
- Responsive dark theme with custom CSS only
- Reusable project cards with external GitHub links

## Tech Stack

- React 18 (JavaScript)
- Vite
- Plain CSS (`src/index.css`)

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite will print a local development URL. Open it in your browser to preview changes.

### Production Build

```bash
npm run build
```

The optimized output is written to `dist/`.

## Project Structure

```
src/
  App.jsx
  index.css
  main.jsx
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    ProjectCard.jsx
    Contact.jsx
    Footer.jsx
  data/
    experience.js
    projects.js
```

## Customization

- Update copy or add new sections in the respective component files.
- Add or remove experiences/projects by editing the arrays in `src/data/experience.js` and `src/data/projects.js`.
- Adjust colors, spacing, or responsive rules in `src/index.css`.

## Contact

Questions or ideas? Reach me at [j0sephmalakie@gmail.com](mailto:j0sephmalakie@gmail.com) or connect on [LinkedIn]([https://www.linkedin.com/in/j0sephmalakie/](https://www.linkedin.com/in/joseph-fujimoto/)).
