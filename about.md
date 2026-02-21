---
layout: default
title: About
permalink: /about/
---

# About This Blog

This is a Jekyll-based blog clone inspired by Vitalik Buterin's personal blog, showcasing a clean, minimalist design with full dark mode support.

## Features

- **Light & Dark Mode**: Toggle between light and dark themes with persistent preferences stored locally
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Markdown Posts**: Write posts in Markdown with automatic HTML conversion
- **SEO Optimized**: Built-in meta tags and structured data for better search engine visibility
- **GitHub Pages Native**: Deployed directly from GitHub with no build configuration needed
- **Fast & Secure**: Static HTML generation means no database vulnerabilities and lightning-fast page loads

## Theme Colors

- **Light Mode**: Clean white background with dark text
- **Dark Mode**: Pure black background (#000000) with Vitalik's signature green text (#3EAF4A)

## Technology Stack

- **Generator**: Jekyll (Ruby-based static site generator)
- **Hosting**: GitHub Pages
- **Theme**: Minima (default Jekyll theme)
- **Styling**: Custom CSS with CSS variables for theme support
- **JavaScript**: Vanilla JS for client-side theme toggle

## How to Use

1. Clone the repository
2. Add posts to the `_posts/` directory as Markdown files
3. Push to GitHub and enable GitHub Pages in settings
4. Your blog is live!

## Post Format

Posts should be placed in the `_posts/` directory with the filename format: `YYYY-MM-DD-post-title.md`

Example frontmatter:
```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-15
author: "Your Name"
tags: [tag1, tag2]
excerpt: "A brief excerpt of your post"
---
```

## Customization

- Edit `_config.yml` to change site title, description, and other metadata
- Modify `assets/css/style.css` to customize colors and styling
- Update `_layouts/default.html` and `_layouts/post.html` for structural changes

## License

This project is open source and available for personal and commercial use.
