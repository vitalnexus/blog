# How to Create a Category

This guide explains how to create and manage categories in your Jekyll blog. Categories help organize your posts and improve navigation.

## Understanding Categories in Jekyll

Categories in Jekyll are metadata tags that organize your posts. A single post can belong to multiple categories (e.g., a post can be in both "tutorial" and "jekyll").

## Step 1: Enable Category Support in Jekyll Config

First, verify your `_config.yml` file has the necessary settings:

```yaml
# In _config.yml
plugins:
  - jekyll-feed
  - jekyll-seo-tag

# Collections for organizing content
collections:
  posts:
    output: true
    permalink: /:categories/:title/

# Build settings
encoding: utf-8
```

The key setting is the `permalink` which includes `:categories`. This generates URLs like `/category-name/post-title/`.

## Step 2: Assign Categories to Posts

When creating a new post, add categories in the front matter:

```yaml
---
layout: post
title: "My Awesome Post"
date: 2024-02-20
categories: [tutorial, jekyll, beginner]
---
```

You can assign multiple categories as a list:
- `categories: [tutorial]` - Single category
- `categories: [tutorial, jekyll]` - Multiple categories
- `categories: [tutorial, jekyll, web-development]` - Three categories

## Step 3: Create a Archive Pages For Each Category

To create dedicated pages for each category, create files in a `_pages` directory or create a category page layout.

### Option A: Manual Category Pages

Create a file for each major category:

**`_pages/category-tutorial.md`:**
```yaml
---
layout: category
title: "Tutorial Posts"
category: tutorial
permalink: /categories/tutorial/
---
```

**`_pages/category-jekyll.md`:**
```yaml
---
layout: category
title: "Jekyll Posts"
category: jekyll
permalink: /categories/jekyll/
---
```

### Option B: Automatic Category Archive (Recommended)

Create a custom layout that displays all posts in a category:

Create `_layouts/category.html`:
```html
---
layout: default
---

<div class="page-content">
  <h1>{{ page.title }}</h1>
  
  <div class="posts-list">
    {% for post in site.categories[page.category] %}
      <div class="post-item">
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt }}</p>
      </div>
    {% endfor %}
  </div>
</div>
```

## Step 4: Add Category Links to Your Navigation

Update your site's navigation menu to include category links. Edit `_includes/header.html` or your theme's header:

```html
<nav>
  <a href="/">Home</a>
  <a href="/categories/tutorial/">Tutorials</a>
  <a href="/categories/jekyll/">Jekyll</a>
  <a href="/categories/general/">General</a>
</nav>
```

Or use a dynamic approach:

```html
<nav>
  <a href="/">Home</a>
  {% for category in site.categories %}
    <a href="/categories/{{ category[0] | slugify }}/">{{ category[0] | capitalize }}</a>
  {% endfor %}
</nav>
```

## Step 5: Display Categories in Post Layouts

Update `_layouts/post.html` to show categories:

```html
---
layout: default
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <p class="post-meta">
      {{ page.date | date: "%B %d, %Y" }}
      
      {% if page.categories %}
        <span class="post-categories">
          Categories:
          {% for category in page.categories %}
            <a href="/categories/{{ category | slugify }}/">{{ category }}</a>{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        </span>
      {% endif %}
    </p>
  </header>

  <div class="post-content">
    {{ content }}
  </div>
</article>
```

## Best Practices for Categories

1. **Keep them consistent**: Use lowercase, use hyphens instead of spaces
   - ✅ Good: `jekyll`, `web-development`, `tutorial`
   - ❌ Bad: `Jekyll`, `web development`, `Tutorials`

2. **Don't create too many**: Aim for 5-10 main categories max
   - Too many categories make navigation confusing

3. **Use meaningful names**: Categories should clearly describe the content
   - ✅ Good: `tutorial`, `machine-learning`, `javascript`
   - ❌ Bad: `stuff`, `misc`, `random`

4. **Organize hierarchically with tags**: Use categories for main topics, tags for subtopics
   - Categories: `programming`, `design`
   - Tags (if you add them): `javascript`, `python`, `css`

## Recommended Category Structure

For a tech blog like this one, consider these main categories:

```yaml
categories: [tutorial]        # Educational posts
categories: [how-to]          # Step-by-step guides
categories: [jekyll]          # Jekyll-specific
categories: [deployment]      # Deployment & DevOps
categories: [troubleshooting] # Problem solving
categories: [showcase]        # Project showcases
```

## Creating Category Pages Automatically

To automatically generate category pages, you can use a plugin. Add to your Gemfile:

```ruby
gem "jekyll-archives"
```

Then update your `_config.yml`:

```yaml
plugins:
  - jekyll-archives

jekyll-archives:
  enabled: [categories]
  layouts:
    category: category
  permalinks:
    category: /categories/:name/
```

And create `_layouts/category.html` as shown in Step 3.

## Troubleshooting Category Issues

- **Categories not showing**: Check the spelling in your post's front matter
- **Category pages not generating**: Verify the layout file exists in `_layouts/`
- **Broken category links**: Use the `slugify` filter to convert spaces/uppercase
- **Empty category pages**: Ensure posts have matching category names

## Example Post with Multiple Categories

```markdown
---
layout: post
title: "Getting Started with Jekyll"
date: 2024-02-20
categories: [jekyll, tutorial, static-site]
author: Jane Doe
---

Your post content here...
```

This post would appear on:
- `/categories/jekyll/`
- `/categories/tutorial/`
- `/categories/static-site/`
