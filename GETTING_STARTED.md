# 🚀 Quick Start - Jekyll Blog on GitHub Pages

Get your blog running in **5 minutes**!

## ⚡ Quick Setup (Local Development)

### Step 1: Install Ruby & Bundler

**Windows:**
1. Download [RubyInstaller](https://rubyinstaller.org/) (Ruby+Devkit 3.1.0 or higher)
2. Run installer, accept all default options
3. Open **NEW terminal window** and verify:
   ```bash
   ruby --version
   ```
4. Install Bundler:
   ```bash
   gem install bundler
   ```

**macOS:**
```bash
brew install ruby
gem install bundler
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
gem install bundler
```

### Step 2: Clone & Setup

```bash
git clone https://github.com/YOUR_USERNAME/blog.git
cd blog
bundle install
```

Bundler will install Jekyll and all dependencies.

### Step 3: Run Locally

```bash
bundle exec jekyll serve
```

You'll see:
```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
[Auto-regeneration enabled]
```

**Open browser to: http://localhost:4000** 🎉

## 🌙 Test Dark Mode Toggle

1. Look for the **☀️/🌙** icon in the top-right navigation
2. Click it to toggle between light and dark modes:
   - **Light Mode**: White background, dark text
   - **Dark Mode**: Black background (#000000), green text (#3EAF4A)
3. **Refresh the page** (F5) - your theme preference persists!

### Debug Theme Toggle

If the toggle doesn't work:
1. Open DevTools: **F12**
2. Go to **Console** tab
3. Check for JavaScript errors
4. Go to **Application** → **Local Storage**
5. Look for `vitalik-blog-theme` key

## ✍️ Create Your First Post

### Create a New Post File

Make a new file: `_posts/2024-01-20-my-first-post.md`

```markdown
---
layout: post
title: "My First Blog Post"
date: 2024-01-20
author: "Your Name"
tags: [welcome, blog]
excerpt: "My very first blog post on this awesome blog!"
---

# My First Blog Post

Welcome to my blog!

## Markdown Works Great

- Bullet points
- Bold text with **emphasis**
- Links like [Google](https://google.com)
- Code blocks with syntax highlighting:

\`\`\`python
def hello():
    print("Hello, blog!")
\`\`\`

## Test It!


```
\`\`\`python
def hello():
    print("Hello, blog!")
\`\`\`

### Post File Format

**Filename:** `YYYY-MM-DD-post-title.md`
- `YYYY-MM-DD`: Date the post appears (future dates hide until that date)
- `post-title`: URL slug (spaces become hyphens)

**Example:** `2024-01-20-hello-world.md` → appears at `/2024/01/20/hello-world/`

### YAML Front Matter

Every post must start with YAML between `---` lines:

```yaml
---
layout: post           # Required: always "post"
title: "Post Title"    # Required: your post title
date: 2024-01-20       # Required: YYYY-MM-DD format
author: "Your Name"    # Optional: who wrote this
tags: [tag1, tag2]     # Optional: categorize posts
excerpt: "Brief..."    # Optional: shows on home page
---
```

## 🔄 Auto-Reload

The server automatically rebuilds when you:
- Create a new post
- Edit an existing post
- Change CSS or templates
- Modify `_config.yml`

Just **refresh your browser** to see changes!

## 🛑 Stop the Server

Press **Ctrl+C** in the terminal where `jekyll serve` is running.

## 📁 Project Structure

```
blog/
├── _posts/                 # Your blog posts (Markdown files)
├── _layouts/
│   ├── default.html       # Main page layout
│   └── post.html          # Post template
├── assets/
│   ├── css/style.css      # Styling (with dark mode)
│   └── js/theme-toggle.js # Dark mode toggle script
├── _config.yml            # Site configuration
├── index.md               # Homepage
├── about.md               # About page
└── Gemfile                # Ruby dependencies
```

## 🎨 Customize Your Blog

### Change Site Title & Description

Edit `_config.yml`:

```yaml
title: My Awesome Blog
description: My personal blog about things I love
author: Your Name
```

### Change Colors (Dark Mode)

Edit `assets/css/style.css`, look for `:root.dark`:

```css
:root.dark {
  --bg-color: #000000;      # Background color
  --text-color: #3eaf4a;    # Text color  (#3eaf4a is Vitalik green)
  --link-color: #60a5fa;    # Link color
}
```

### Edit About Page

Edit `about.md` - it's just Markdown!

## 🌐 Deploy to GitHub Pages

### 1. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `username.github.io` (replace `username`)
3. Choose **Public**
4. Click **Create repository**

### 2. Push Your Code

```bash
git init
git add .
git commit -m "Initial blog setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

Your site automatically deploys! Visit:
**https://YOUR_USERNAME.github.io**

GitHub will rebuild your site whenever you push.

### Deployment Troubleshooting

**Site not showing?**
- Wait 60+ seconds after pushing
- Check **Actions** tab in GitHub for build status
- Make sure repository is **Public**

**Want custom domain?**
- Go to repo **Settings** → **Pages**
- Add your domain under "Custom domain"

## 🔍 Common Issues

### "command not found: bundle"

You didn't install Bundler! Open a **new terminal** and:

```bash
gem install bundler
```

Then try `bundle install` again.

### "bundle: command not found" when running jekyll

Always use:
```bash
bundle exec jekyll serve
```

NOT just `jekyll serve`

### "Liquid Exception: undefined method"

Check YAML front matter in your post:
- Make sure dates are `YYYY-MM-DD` format
- Make sure layout is exactly `post` or `default`
- No quotes needed around strings

### Posts not showing up

- Is file in `_posts/` folder?
- Is filename format `YYYY-MM-DD-title.md`?
- Is date not in the future?
- Check terminal for error messages

### Dark mode toggle doesn't work

Ensure files exist in `assets/`:
- `css/style.css` ✓
- `js/theme-toggle.js` ✓

Check browser console (F12) for errors.

## 📚 Helpful Resources

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Liquid Template Docs](https://shopify.github.io/liquid/)

## ✨ Next Steps

1. ✅ Run `bundle exec jekyll serve` (should already be running!)
2. ✅ Create your first post in `_posts/`
3. ✅ Test dark mode toggle
4. ✅ Edit `_config.yml` with your info
5. ✅ Deploy to GitHub Pages

## 🎉 You're Done!

You now have:
- ✅ A working blog with dark mode
- ✅ Running locally at http://localhost:4000
- ✅ Ready to deploy to GitHub Pages
- ✅ Persistent theme preferences
- ✅ Beautiful Markdown posts

**Happy blogging!** 📝

---

For complete documentation, see [README_JEKYLL.md](./README_JEKYLL.md)
