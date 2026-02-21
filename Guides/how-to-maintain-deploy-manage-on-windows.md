# How to Maintain, Deploy, and Manage Your Blog on Windows

This guide covers everything you need to know about maintaining your Jekyll blog on a Windows machine, including local development, building, testing, and deployment strategies.

## Prerequisites

Before you start, ensure you have installed:

- **Ruby**: Download from [ruby-lang.org](https://www.ruby-lang.org/)
- **Git**: Download from [git-scm.com](https://git-scm.com/)
- **Text Editor/IDE**: VS Code, Sublime Text, or your preferred editor
- **Ruby DevKit**: Required for building native gems on Windows

## Initial Setup

### 1. Clone or Setup Your Blog Repository

```bash
# Clone your existing blog
git clone https://github.com/YOUR-USERNAME/blog.git
cd blog

# Or initialize a new Jekyll blog
jekyll new my-blog
cd my-blog
```

### 2. Install Ruby Gems

Install all dependencies specified in your Gemfile:

```bash
bundle install
```

If you get errors related to native extensions:
- Ensure Ruby DevKit is installed
- Try: `bundle install --force`
- Update Bundler: `gem install bundler --default`

### 3. Verify Installation

Test that everything works:

```bash
bundle exec jekyll --version
bundle exec jekyll serve
```

Your site should be available at `http://localhost:4000`

## Local Development Workflow

### Daily Development Steps

#### 1. Start Your Local Server

```bash
cd path/to/your/blog
bundle exec jekyll serve --watch
```

Options:
- `--watch`: Automatically rebuild on file changes
- `--drafts`: Include draft posts (useful for preview)
- `--future`: Include future-dated posts
- `--port 4000`: Specify a different port

#### 2. Create or Edit Content

Open your blog directory in your editor:
- Edit existing posts in `_posts/`
- Create new posts following the naming convention: `YYYY-MM-DD-title.md`
- Edit pages, layouts, and styles as needed

#### 3. View Changes in Real-Time

Open your browser to `http://localhost:4000`:
- Changes to content refresh automatically
- Styling changes may require a hard refresh (Ctrl+Shift+R)
- New posts appear immediately if dates are not in the future

#### 4. Test Before Committing

Verify:
- Posts display correctly
- Links work properly
- Images load
- Code blocks render with syntax highlighting
- Mobile responsiveness (use browser DevTools)

### Building the Blog

To build your site for deployment:

```bash
bundle exec jekyll build
```

This generates a `_site/` directory with the compiled HTML, CSS, and JavaScript.

Options:
- `--future`: Include future-dated posts
- `--drafts`: Include draft posts
- `--destination`: Specify output directory
- `--source`: Specify source directory

## Git Workflow

### Before Making Changes

```bash
# Pull latest changes from remote
git pull origin main

# Create a feature branch for your work
git checkout -b feature/new-post-title
```

### After Writing Content

```bash
# Check what files changed
git status

# Stage your changes
git add .
# Or stage specific files
git add _posts/2024-02-20-new-post.md

# Commit with a descriptive message
git commit -m "Add post: How to Use Jekyll on Windows"

# Push to your repository
git push origin feature/new-post-title
```

### Create a Pull Request

1. Go to your GitHub repository
2. Click "Compare & pull request"
3. Add a description of your changes
4. Request review if needed
5. Merge when ready

### Merge to Main

```bash
git checkout main
git pull origin main
git merge feature/new-post-title
git push origin main
```

## Deployment Strategies for Windows

### Option 1: GitHub Pages (Recommended for Beginners)

**Advantages**: Free, automatic deployment, custom domain support

**Setup**:

1. Push your repository to GitHub
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch"
4. Select branch: `main` (or your default branch)
5. Your site will be available at `https://YOUR-USERNAME.github.io/blog`

**Deployment**: Simply push to GitHub, and it deploys automatically!

```bash
git push origin main
# Your site updates automatically in 1-2 minutes
```

**Custom Domain**:
1. Settings → Pages → Custom domain
2. Point your domain's DNS to GitHub
3. Add CNAME file to repository root

### Option 2: Deploy to Your Own Server

**Prerequisites**:
- Web hosting or VPS (e.g., DigitalOcean, Linode, AWS)
- SSH access to your server
- Server running Linux (recommended)

**Windows to Server Workflow**:

```bash
# 1. Build locally
bundle exec jekyll build

# 2. Copy the _site directory to your server
# Using scp (requires scp.exe or Git Bash)
scp -r _site/* user@yourserver.com:/var/www/html/blog/

# Or use an SFTP client like FileZilla
```

**Automated Deployment**:

Create a deploy script in your blog root:

**`deploy.sh`** (for Git Bash on Windows):
```bash
#!/bin/bash
echo "Building site..."
bundle exec jekyll build

echo "Uploading to server..."
scp -r _site/* user@yourserver.com:/var/www/html/blog/

echo "Deployment complete!"
```

Run it:
```bash
bash deploy.sh
```

### Option 3: Netlify (Advanced, Automatic)

**Advantages**: Automatic builds, SSL, CDN, form handling

**Setup**:
1. Go to [netlify.com](https://www.netlify.com/)
2. Connect your GitHub repository
3. Netlify auto-detects Jekyll and configures build settings
4. Your site deploys automatically on every push!

**Optional**: Create `netlify.toml` for custom configuration:
```toml
[build]
  command = "bundle exec jekyll build"
  publish = "_site"

[build.environment]
  JEKYLL_ENV = "production"
```

## Maintenance Tasks

### Weekly Tasks

```bash
# Update your dependencies
bundle update

# Check for broken links (install bundler-audit if needed)
gem install bundler-audit
bundler-audit check

# Backup your repository
git push origin main
```

### Monthly Tasks

```bash
# Clean old build artifacts
Remove-Item _site -Recurse -Force  # PowerShell
# rm -r _site  # Git Bash

# Rebuild from scratch
bundle exec jekyll clean
bundle exec jekyll build

# Check theme/plugin updates
gem outdated
bundle update
```

### Before Each Deployment

```bash
# Clean build
bundle exec jekyll clean

# Full rebuild with all posts
bundle exec jekyll build

# Test locally (double-check)
bundle exec jekyll serve
```

## Troubleshooting Common Issues

### Issue: "Cannot load such file"

**Solution**:
```bash
# Reinstall gems
Remove-Item Gemfile.lock
bundle install
```

### Issue: CSS/JavaScript not updating

**Solution**:
```bash
# Hard refresh in browser
Ctrl+Shift+Delete  # Open cache settings
# Or clear specific site data

# Rebuild site
bundle exec jekyll clean
bundle exec jekyll build
```

### Issue: Post doesn't appear

**Check**:
1. File is in `_posts/` directory
2. Filename format: `YYYY-MM-DD-title.md`
3. Date in front matter is not in the future (unless using `--future`)
4. No YAML errors in front matter

### Issue: Build fails with native extension errors

**Solution**:
```bash
# Update Ruby DevKit
# Reinstall problematic gems
gem install [gem-name]

# Or rebuild environment
Remove-Item Gemfile.lock
bundle install --force
```

### Issue: Can't push to GitHub

**Solution**:
```bash
# Update Git credentials
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Test SSH (if using SSH)
ssh -T git@github.com

# Use HTTPS if SSH fails
git remote set-url origin https://github.com/YOUR-USERNAME/blog.git
```

## Performance Optimization

### Enable Incremental Builds

Faster rebuilds during development:

```bash
bundle exec jekyll serve --incremental
```

### Optimize Images

Before adding images:
```bash
# Consider using image optimization tools
# Online: tinypng.com, imageoptim.com
# Tools: ImageMagick, ffmpeg
```

### Minify CSS/JavaScript

Already handled by Jekyll with:
```yaml
# In _config.yml
sass:
  style: compressed
```

## Backup and Recovery

### Regular Backups

```bash
# Backup to cloud storage
# Create a scheduled task in Windows Task Scheduler

# Manual backup
Copy-Item -Path "path/to/blog" -Destination "path/to/backup" -Recurse

# Or use version control (Git already handles this!)
git push origin main --mirror
```

### Restore from Backup

```bash
git clone https://github.com/YOUR-USERNAME/blog.git
bundle install
bundle exec jekyll serve
```

## Useful PowerShell Commands for Windows

```powershell
# Check Ruby version
ruby --version

# Check Bundler version
bundler --version

# List installed gems
gem list

# Update a specific gem
gem update [gem-name]

# Search for a gem
gem search [gem-name]

# Stop Jekyll server (Ctrl+C in terminal)

# Create a new terminal window
Start-Process powershell
```

## Setup a Convenient Development Script

Create `dev-start.ps1`:
```powershell
# Navigate to blog directory
Set-Location "C:\Users\YourUsername\Documents\MyGitHubProjects\blog"

# Install/update dependencies
bundle install

# Start Jekyll
bundle exec jekyll serve --watch --drafts

# Open browser automatically
Start-Process "http://localhost:4000"
```

Run it:
```bash
powershell -ExecutionPolicy Bypass -File dev-start.ps1
```

## Summary Checklist

- ✅ Ruby and Bundler installed
- ✅ Repository cloned/initialized
- ✅ Dependencies installed (`bundle install`)
- ✅ Local server works (`bundle exec jekyll serve`)
- ✅ Git configured with credentials
- ✅ Deployment method chosen (GitHub Pages, Netlify, or custom server)
- ✅ Post creation workflow documented
- ✅ Backup strategy in place
