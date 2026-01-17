# Pusakadev Portfolio Website

Modern, fast, and SEO-friendly portfolio website built with Astro, featuring multilingual support (Indonesian/English) and markdown-based content management.

## 🚀 Features

- ⚡ **Lightning Fast** - Static HTML generation with Astro
- 🌍 **Multilingual** - Indonesian (default) and English support
- 📝 **Markdown Content** - Easy project management with markdown files
- 🎨 **Modern Design** - Tailwind CSS with dark mode support
- 🔍 **SEO Optimized** - Meta tags, sitemap, and robots.txt
- 📱 **Fully Responsive** - Mobile-first design approach
- ✨ **Premium UI** - Glassmorphism effects and smooth animations

## 🛠️ Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript
- **Content**: Markdown with frontmatter
- **SEO**: @astrojs/sitemap
- **Deployment**: Static HTML (can be deployed anywhere)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── projects/
│   │       ├── id/          # Indonesian projects
│   │       └── en/          # English projects
│   ├── i18n/
│   │   ├── ui.ts            # Translation strings
│   │   └── utils.ts         # i18n utilities
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # Indonesian homepage
│   │   ├── projects/
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── en/              # English pages
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## ✍️ Adding New Projects

1. Create a new markdown file in `src/content/projects/id/` for Indonesian:

```markdown
---
title: "Project Title"
description: "Project description"
date: 2024-01-15
techStack: ["Laravel", "PHP", "MySQL"]
featured: true
lang: "id"
projectUrl: "https://example.com"
githubUrl: "https://github.com/username/repo"
---

# Project Title

Your project content in markdown...
```

2. Create the English version in `src/content/projects/en/` with `lang: "en"`

3. The project will automatically appear on the projects page!

## 🌐 Multilingual Support

The website supports Indonesian (default) and English:

- Indonesian pages: `/` (root)
- English pages: `/en/`

Language switcher is available in the navigation bar.

## 🎨 Customization

### Colors

Edit `src/styles/global.css` to customize the color scheme:

```css
:root {
  --color-primary: 59 130 246;
  --color-secondary: 139 92 246;
  --color-accent: 236 72 153;
}
```

### Site URL

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### Social Links

Edit `src/components/Footer.astro` and `src/pages/contact.astro` to update social media links.

## 📊 SEO

The website includes:

- Comprehensive meta tags (title, description, Open Graph, Twitter Cards)
- Automatic sitemap generation
- robots.txt configuration
- Semantic HTML structure
- Fast loading times (static HTML)

## 🚀 Deployment

Build the project:

```bash
npm run build
```

The `dist/` folder contains static HTML files that can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Astro
