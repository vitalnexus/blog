# Guides

This directory contains comprehensive guides for managing and maintaining your Jekyll blog.

## Available Guides

### 1. [How to Add a New Post](./how-to-add-a-new-post.md)
Learn how to create blog posts with proper formatting, front matter, and best practices for Jekyll. This guide covers:
- Creating post files with correct naming conventions
- Adding front matter metadata
- Writing content in Markdown
- Including images
- Testing posts locally
- Publishing and pushing to Git

**Best for**: Content creators, bloggers, anyone writing new posts

### 2. [How to Create a Category](./how-to-create-a-category.md)
Complete guide to implementing and managing categories in your Jekyll blog. This guide covers:
- Understanding Jekyll's category system
- Assigning categories to posts
- Creating category archive pages
- Adding category navigation
- Displaying categories in post layouts
- Best practices for category organization

**Best for**: Blog organizers, developers implementing category features

### 3. [How to Maintain, Deploy, and Manage on Windows](./how-to-maintain-deploy-manage-on-windows.md)
Complete guide for Windows users covering the entire development lifecycle. This guide covers:
- Initial setup and prerequisites
- Local development workflow
- Building the blog
- Git workflow and version control
- Deployment strategies (GitHub Pages, Netlify, custom servers)
- Maintenance tasks and troubleshooting
- Performance optimization
- Backup and recovery procedures

**Best for**: Windows developers, DevOps, blog administrators

## Quick Start by Role

### If you're a **Content Creator**:
1. Read [How to Add a New Post](./how-to-add-a-new-post.md)
2. Learn about [Categories](./how-to-create-a-category.md) to organize your posts

### If you're a **Developer Setting Up the Blog**:
1. Start with [Windows Maintenance Guide](./how-to-maintain-deploy-manage-on-windows.md)
2. Implement [Categories](./how-to-create-a-category.md) if not already done
3. Reference [Post Creation](./how-to-add-a-new-post.md) for testing

### If you're an **Administrator Managing Everything**:
1. Follow [Windows Maintenance Guide](./how-to-maintain-deploy-manage-on-windows.md) for daily operations
2. Use [Categories Guide](./how-to-create-a-category.md) to organize content structure
3. Reference [Post Guide](./how-to-add-a-new-post.md) for content management

## Recent Changes to Support Categories

The blog now has full category support with:
- ✅ **jekyll-archives plugin** - Automatically generates category pages
- ✅ **Category layouts** - Professional category archive pages in `_layouts/category.html`
- ✅ **Category configuration** - Properly configured in `_config.yml`
- ✅ **Automatic URL generation** - Categories automatically appear at `/categories/category-name/`

## Category Example

To assign a post to one or more categories, add this to your post's front matter:

```yaml
---
layout: post
title: "My Post Title"
date: 2024-02-20
categories: [tutorial, jekyll, web-development]
---
```

This automatically creates/populates:
- `/categories/tutorial/`
- `/categories/jekyll/`
- `/categories/web-development/`

## Useful Commands Reference

```bash
# Local development
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Clean build
bundle exec jekyll clean
bundle exec jekyll build

# Build with drafts visible
bundle exec jekyll serve --drafts

# Update dependencies
bundle update

# Check Bundler version
bundler --version
```

## Getting Help

If you can't find an answer in these guides:

1. Check the official Jekyll documentation: [jekyll.com](https://jekyllrb.com)
2. Search the Jekyll community forums
3. Check `_config.yml` for current configuration
4. Run `bundle exec jekyll build --trace` for detailed error messages

## Contributing to These Guides

Found a mistake or want to improve these guides? 

1. Edit the relevant guide markdown file
2. Test your changes locally
3. Commit and push with a clear message
4. Create a pull request

## File Structure

```
Guides/
├── README.md (this file)
├── how-to-add-a-new-post.md
├── how-to-create-a-category.md
└── how-to-maintain-deploy-manage-on-windows.md
```

---

**Last Updated**: February 20, 2026

For the most up-to-date Jekyll documentation, visit [jekyllrb.com](https://jekyllrb.com/)
