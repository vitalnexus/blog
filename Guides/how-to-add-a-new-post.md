# How to Add a New Post

This guide explains how to create and publish a new blog post on your Jekyll blog.

## Step 1: Create a New Post File

Create a new markdown file in the `_posts` directory following Jekyll's naming convention:

```
_posts/YYYY-MM-DD-post-title.md
```

**Example:**
```
_posts/2024-02-20-my-first-post.md
```

## Step 2: Add Front Matter

Every post requires front matter at the top of the file. This is YAML metadata enclosed by triple dashes:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-02-20 10:30:00
categories: [general, tutorial]
author: Your Name
description: "A brief description of your post"
---
```

### Front Matter Fields Explained:

- **layout**: Use `post` for all blog posts
- **title**: The title of your post (use quotes for titles with special characters)
- **date**: Publication date and time (YYYY-MM-DD HH:MM:SS)
- **categories**: Array of categories (see "How to Create a Category" guide)
- **author**: Name of the post author
- **description**: Short description for SEO and previews

## Step 3: Write Your Content

Write your post content in Markdown below the front matter:

```markdown
---
layout: post
title: "Welcome to My Blog"
date: 2024-02-20 10:30:00
categories: [general]
---

# Welcome

This is my first blog post using Jekyll!

## Subheading

You can use Markdown formatting:
- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks with syntax highlighting
```python
print("Hello, World!")
```

```

## Step 4: Add Images

To include images in your post:

1. **Create an image file** in the `assets/images/` directory
2. **Reference it in your post** using Markdown:

```markdown
![Alt text](/assets/images/my-image.png)

# Or with sizing
![Alt text](/assets/images/my-image.png){: width="200" }
```

## Step 5: Test Your Post Locally

Before publishing, test your blog locally:

```bash
# Build and serve your site
bundle exec jekyll serve

# Your site will be available at http://localhost:4000
```

Visit `http://localhost:4000` and check if your post appears correctly.

## Step 6: Commit and Push

Once you're happy with your post:

```bash
git add _posts/2024-02-20-my-first-post.md
git commit -m "Add new post: Your Post Title"
git push origin main
```

## Tips for Writing Posts

- **Keep it clear**: Use headings and sections to organize your content
- **Add metadata**: Use the `description` field for better SEO
- **Proofread**: Check for grammar and spelling before publishing
- **Use categories wisely**: Choose relevant categories to help readers find related posts
- **Add dates**: Always use accurate publication dates
- **Code formatting**: Use triple backticks with language identifiers for syntax highlighting

## Example Post Template

```markdown
---
layout: post
title: "Understanding Jekyll"
date: 2024-02-20
categories: [tutorial, jekyll]
author: John Doe
description: "Learn the basics of Jekyll static site generation"
---

# Understanding Jekyll

Let me share what I learned about Jekyll...

## Getting Started

First, you need to install Ruby and the Jekyll gem. Then...

## Key Concepts

Jekyll processes your markdown files and converts them to...

## Conclusion

Jekyll is a powerful tool for blog creators!

```

## Troubleshooting

- **Post doesn't appear**: Check the YYYY-MM-DD format in the filename
- **Formatting is wrong**: Ensure proper Markdown syntax
- **Images not loading**: Verify the correct path to assets/images/
- **Build errors**: Run `bundle exec jekyll build` to see detailed error messages
