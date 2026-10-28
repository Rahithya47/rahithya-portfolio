# Kunisetty Rahithya, Portfolio

React + Vite + Tailwind CSS.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Editing content
All content lives in `src/data/index.js`. Components only render it.

For each project, add these only when they are real. The page shows them automatically:
- `repo`: GitHub repository URL (until set, the button links to the GitHub profile)
- `demo`: live demo URL
- `api`: `{ title, request, response }` copied from the real running app
- `screenshots`: `[{ src: '/screens/name.webp', alt: '...' }]` (files go in `public/screens/`, keep each under 200 KB)

## Resume
Replace `public/resume.pdf` (same file name). Keep it a text-based PDF so ATS software can read it.

## Rules
Every metric, certification and technology on the site must be something you can explain or show in an interview.

## Theme and contact
- Dark is the default; the toggle saves the choice in `localStorage`. Colors are CSS variables in `src/index.css`.
- The contact form opens an email draft with `mailto:`. It cannot confirm delivery, so the page says so. Real delivery needs a form service or a small backend.
- Certificate links: add `url` to an item in `certifications` and the title becomes a link.
