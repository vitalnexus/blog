# Vitalik Buterin Blog Clone

A **clean, fast, serverless blog** built with **Jekyll** and hosted on **GitHub Pages**. Features full light/dark mode support with Vitalik's signature green color (#3EAF4A) in dark mode.

**Optimized for Windows 11 Pro** - All instructions tested and verified on Windows 11 Pro desktop.

## ✨ Key Features

🌓 **Perfect Light/Dark Mode Toggle**
- Click the **sun/moon icon** (☀️/🌙) in the navigation to toggle themes
- **Dark Mode:** Black background (#000000) with Vitalik green text (#3EAF4A)
- **Light Mode:** White background with dark text
- Theme preference **persists** across sessions via localStorage
- Smooth CSS transitions between themes

📝 **Markdown-Based Blog Posts**
- Write posts in Markdown format
- Posts stored as version-controlled files in `_posts/`
- Automatic HTML conversion by Jekyll
- Complete post metadata support (date, author, tags, excerpt)

⚡ **Serverless & Super Fast**
- Zero backend required - pure static HTML/CSS/JavaScript
- GitHub Pages integration - deploy with a git push
- Lightning-fast page loads (static HTML only)
- No database vulnerabilities

🎯 **Responsive Design**
- Mobile-first design works perfectly on all devices
- Optimized for desktop, tablet, and mobile browsers
- Beautiful typography and spacing

🔍 **Built-in SEO**
- jekyll-feed plugin for RSS feeds
- jekyll-seo-tag for meta tags and structured data
- Automatic sitemap generation

## 🚀 Quick Start (5 Minutes on Windows 11 Pro)

### 1. Install Ruby & Bundler (Windows 11 Pro)

**Step 1: Download RubyInstaller**
1. Visit [rubyinstaller.org](https://rubyinstaller.org/)
2. Download **Ruby+Devkit 3.1.0** or higher (choose the 64-bit version for Windows 11 Pro)
3. Look for filename like: `rubyinstaller-3.X.X-x64.exe`

**Step 2: Run the Installer**
1. Double-click the downloaded `.exe` file
2. Accept the License Agreement
3. Choose installation path (default is fine: `C:\Ruby31-x64` or similar)
4. **IMPORTANT:** Check the box: **"Add Ruby executables to your PATH"**
5. Check the box: **"Use UTF-8 as default external encoding"**
6. Click **Install**
7. At the end, it will ask about "MSYS2 Installation" - click "Next" and let it complete

**Step 3: Verify Installation**
1. Open **Windows Terminal** or **PowerShell** (right-click → "Run as administrator" recommended)
2. Run:
   ```powershell
   ruby --version
   gem --version
   ```
3. You should see version numbers (e.g., `ruby 3.1.0`)

**Step 4: Install Bundler**
```powershell
gem install bundler
```

**Step 5: Verify Bundler**
```powershell
bundler --version
```

### 2. Clone the Repository (Windows 11 Pro)

**Option A: Using Git Command Line** (Recommended)
```powershell
# Navigate to where you want the blog
cd Documents
git clone https://github.com/YOUR_USERNAME/blog.git
cd blog
```

**Option B: Using GitHub Desktop**
1. Open [GitHub Desktop](https://desktop.github.com/)
2. File → Clone Repository
3. Enter: `https://github.com/YOUR_USERNAME/blog.git`
4. Choose location and click Clone

### 3. Install Dependencies

In PowerShell, make sure you're in the `blog` folder:

```powershell
cd blog
bundle install
```

This will install:
- Jekyll (static site generator)
- jekyll-feed plugin
- jekyll-seo-tag plugin
- All dependencies

**First time may take 1-2 minutes.**

### 4. Run Locally

```powershell
bundle exec jekyll serve
```

You'll see output like:
```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
[Auto-regeneration enabled]
```

**Open your browser to: http://localhost:4000**

✅ **Your blog is running locally!**

### 5. Test Dark Mode

1. Click the **☀️/🌙** icon in the top-right navigation
2. See the theme switch instantly
3. **Refresh the page** (F5) - your preference persists!

**Terminate the server anytime:**
- Press `Ctrl+C` in PowerShell

## 📝 Creating Blog Posts

### Post File Format

Create file: `_posts/YYYY-MM-DD-post-title.md`

**Example:** `_posts/2024-02-20-hello-world.md`

### Required YAML Frontmatter

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-02-20
author: "Your Name"
tags: [tag1, tag2]
excerpt: "Brief excerpt shown on home page"
---
```

### Write in Markdown

```markdown
---
layout: post
title: "My First Post"
date: 2024-02-20
author: "Your Name"
tags: [welcome]
excerpt: "This is my first blog post!"
---

# My First Post

This is the post content in **Markdown**.

## Features

- Markdown lists
- **Bold text**
- [Links](https://example.com)

\`\`\`python
# Code blocks with syntax highlighting
print("Hello, blog!")
\`\`\`
```

Save and refresh http://localhost:4000 - your post appears automatically!

## 🌐 Deploy to GitHub Pages (Windows 11 Pro)

### 1. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `username.github.io` (replace `username` with your GitHub username)
3. Choose **Public** (required for GitHub Pages)
4. Add description: "My Vitalik-inspired blog with Jekyll"
5. Click **Create repository**

### 2. Push Your Code to GitHub (Windows 11 Pro)

In **PowerShell**, navigate to your blog folder and run:

```powershell
cd path\to\blog

git init

git add .

git commit -m "Initial blog setup with Jekyll and dark mode"

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

**First push may prompt for authentication:**
- If using HTTPS: Enter your GitHub username and [Personal Access Token](https://github.com/settings/tokens)
- If using SSH: Ensure your SSH key is added to GitHub

### 3. Enable GitHub Pages (Windows 11 Pro)

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io`
2. Click **Settings** (top right)
3. Click **Pages** (in left sidebar)
4. Under "Build and deployment":
   - **Source:** "Deploy from a branch" 
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/ (root)`
5. Click **Save**

### 4. Wait & Visit Your Blog

- Wait 60-90 seconds for GitHub to build your site
- Watch the **Deployments** section to see the build status
- Visit: **https://YOUR_USERNAME.github.io**

✅ **Your blog is live!**

### Using a Project Repository (Alternative)

If you want to host at `username.github.io/blog` instead of `username.github.io`:

**Step 1:** Create a repository named `blog` (not `username.github.io`)

**Step 2:** Update `_config.yml`:
```yaml
baseurl: /blog
url: https://username.github.io
```

**Step 3:** Push to GitHub:
```powershell
git init
git add .
git commit -m "Initial blog setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/blog.git
git push -u origin main
```

**Step 4:** Your blog will be at: `https://YOUR_USERNAME.github.io/blog`

### GitHub Pages Troubleshooting (Windows 11 Pro)

**Site not building/deploying?**
1. Check the **Actions** tab in your GitHub repository
2. Click the failed workflow to see error details
3. Ensure your default branch is set to `main`
4. Verify repository is **Public** (Pages requires this)

**See a 404 error?**
1. Wait another 2-3 minutes for GitHub to rebuild
2. Hard refresh browser (Ctrl+Shift+R)
3. Check "Deployments" tab for build status

**Want to use a custom domain?**
1. Go to **Settings** → **Pages**
2. Enter your domain under "Custom domain"
3. Follow GitHub's DNS instructions

## 📁 Project Structure

```
blog/
├── _layouts/               # Page templates
│   ├── default.html       # Main layout (nav, header, footer)
│   └── post.html          # Post-specific layout
├── _includes/             # Reusable Liquid components
├── _posts/                # Blog posts (Markdown files)
│   └── 2024-02-20-welcome.md
├── assets/
│   ├── css/style.css      # Styles (dark mode colors!)
│   └── js/theme-toggle.js # Theme toggle logic
├── _config.yml            # Jekyll configuration
├── index.md               # Homepage
├── about.md               # About page
├── Gemfile                # Ruby dependencies
├── JEKYLL_SETUP.md        # Setup guide
├── GETTING_STARTED.md     # Quick start (5 min)
└── README.md              # This file
```

## 🎨 Customization

### Change Site Info

Edit `_config.yml`:

```yaml
title: My New Blog Title
description: My blog description
author: Your Name
```

### Change Theme Colors

Edit `assets/css/style.css`, find `:root.dark`:

```css
:root.dark {
  --bg-color: #000000;      # Dark background
  --text-color: #3eaf4a;    # Dark text (Vitalik green)
  --link-color: #60a5fa;    # Link color
}
```

### Edit About Page

Simply edit `about.md` - it's just Markdown!

### Add Custom CSS

Add styles to `assets/css/style.css` or create new CSS files in `assets/css/`

## 🔧 Development & Editing (Windows 11 Pro)

### Recommended Tools

**Code Editor (One of these):**
- [Visual Studio Code](https://code.visualstudio.com/) (Recommended - free, lightweight)
- [Sublime Text](https://www.sublimetext.com/) (Free with optional license)
- [Atom](https://github.blog/2022-06-08-sunsetting-atom/) (Deprecated but still works)

**Install VS Code Extensions for Jekyll (Optional but helpful):**
1. Open VS Code
2. Click Extensions (left sidebar or Ctrl+Shift+X)
3. Search and install:
   - "Jekyll Liquid Syntax"
   - "Markdown All in One"
   - "YAML"

### Auto-Rebuild on Changes

While running `bundle exec jekyll serve`, the server automatically rebuilds when you:
- Add or edit posts in `_posts/`
- Change CSS/JavaScript in `assets/`
- Modify layouts in `_layouts/`
- Update `_config.yml`

**Just refresh your browser** to see changes!

### Workflow (Windows 11 Pro)

**Terminal 1: Keep Jekyll Running**
```powershell
cd path\to\blog
bundle exec jekyll serve
```

Leave this running while you work.

**Terminal 2: Do Your Editing**
```powershell
cd path\to\blog
code .  # Opens current folder in VS Code
```

**Edit → Save → Refresh Browser** - repeat!

### Stop the Server

Press **Ctrl+C** in the terminal running `jekyll serve`

## 🔧 Customization (Windows 11 Pro)

### Change Site Title & Description

**File:** `_config.yml`

```yaml
title: My Awesome Blog
description: A blog about my thoughts and ideas
author: Your Name
```

Save and refresh at http://localhost:4000 to see changes.

### Change Dark Mode Colors

**File:** `assets/css/style.css`

Find the `:root.dark` section:

```css
:root.dark {
  --bg-color: #000000;      # Dark background (black)
  --text-color: #3eaf4a;    # Dark text (Vitalik green)
  --link-color: #60a5fa;    # Link color (light blue)
}
```

**Popular color combinations:**
- Purple theme: `--text-color: #a78bfa;`
- Orange theme: `--text-color: #fb923c;`
- Blue theme: `--text-color: #60a5fa;`

### Edit About Page

**File:** `about.md`

Simply open and edit with any text editor - it's just Markdown!

### Add Custom CSS

**Option 1:** Edit existing styles in `assets/css/style.css`

**Option 2:** Create a new file `assets/css/custom.css` and link it in `_layouts/default.html`:

```html
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
```

## 🌐 Local Development Features

While running Jekyll locally at http://localhost:4000:

✅ **Live Preview** - See changes instantly when you refresh  
✅ **Hot Reload** - Server rebuilds on file changes  
✅ **Easy Debugging** - Edit and test before pushing to GitHub  
✅ **Full Control** - Complete access to all files and configuration  

### Fresh Start / Rebuild

Sometimes you might want to force a rebuild. In Windows 11 Pro PowerShell:

```powershell
# Delete the built site
rmdir /s /q _site

# Stop Jekyll (Ctrl+C) and restart
bundle exec jekyll serve
```

## 🔍 Troubleshooting (Windows 11 Pro)

### "command not found: bundle" or "gem install bundler" failed

**Solution:**
1. Open PowerShell **as Administrator** (right-click → "Run as administrator")
2. Reinstall Ruby+Devkit from [rubyinstaller.org](https://rubyinstaller.org/)
3. **IMPORTANT:** Check "Add Ruby executables to your PATH" during installation
4. Restart PowerShell completely (close it and reopen)
5. Try `gem install bundler` again

### "bundle: command not found" when running jekyll

**Always use:**
```powershell
bundle exec jekyll serve
```

**NOT:**
```powershell
jekyll serve  # This won't work - don't use this!
```

### Posts not showing up

**Check:**
1. File is in `_posts/` folder?
2. Filename format is `YYYY-MM-DD-title.md`?
3. Date is not in the future? (Posts with future dates don't show)
4. Check the terminal output for error messages

**Debug a specific post:**
- Fix the error shown in terminal
- Save the file
- Refresh browser

### Dark mode toggle not working

**Check:**
1. Files exist in `assets/`:
   - `assets/css/style.css` ✓
   - `assets/js/theme-toggle.js` ✓
2. Open DevTools (F12) → **Console** tab
3. Look for JavaScript errors in red
4. Try clicking the button again - sometimes it takes a second

**Hard refresh browser**:
- Ctrl+Shift+R (clears cache and refreshes)

### Port 4000 already in use

**If you get "Address already in use - bind(2)":**

**Option 1: Use a different port**
```powershell
bundle exec jekyll serve --port 4001
# Visit http://localhost:4001
```

**Option 2: Kill the old process**
```powershell
# Find what's using port 4000
netstat -ano | findstr :4000

# Kill it (replace 1234 with the PID shown above)
taskkill /PID 1234 /F

# Restart Jekyll
bundle exec jekyll serve
```

### "YAML front matter" error

**Common issue:** Incorrect post frontmatter format

**Must be exactly:**
```yaml
---
layout: post
title: "Your Title"
date: 2024-02-20
---
```

**NOT:**
```yaml
---
layout: post
title: Your Title  # ← Don't forget quotes!
date: 2024-02-20
---:  # ← Extra colon!
```

### Git authentication fails

**Error:** "fatal: Authentication failed"

**Solution (Windows 11 Pro):**

1. **Using HTTPS with Personal Access Token (Recommended):**
   - Go to GitHub → Settings → Developer settings → Personal access tokens
   - Click "Generate new token"
   - Select scopes: `repo` (full control of private repositories)
   - Copy the token
   - When git asks for password, paste the token

2. **Using SSH (Alternative):**
   - [GitHub SSH Key Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
   - This is more secure but requires extra setup

### GitHub Pages showing old version

**Solution:**
1. Hard refresh with Ctrl+Shift+R
2. Wait 2-3 minutes and refresh again
3. Check GitHub repository **Deployments** tab for build status
4. If it failed, check **Actions** tab for error details

## 📚 Documentation & Resources

### This Project:
- **[GETTING_STARTED.md](GETTING_STARTED.md)** - Quick 5-minute start
- **[JEKYLL_SETUP.md](JEKYLL_SETUP.md)** - Complete setup summary

### External Resources:
- **[Official Jekyll Documentation](https://jekyllrb.com/docs/)** - Complete reference  
- **[Markdown Syntax Guide](https://www.markdownguide.org/)** - Learn Markdown  
- **[GitHub Pages Docs](https://docs.github.com/pages)** - GitHub Pages reference  
- **[Liquid Template Language](https://shopify.github.io/liquid/)** - Templating for advanced users

### Windows 11 Pro Specific:
- **[PowerShell Documentation](https://learn.microsoft.com/en-us/powershell/)** - Windows terminal guide
- **[Ruby for Windows](https://rubyinstaller.org/)** - Ruby setup
- **[Git for Windows](https://gitforwindows.org/)** - Version control

## ✨ Next Steps (Windows 11 Pro)

1. ✅ Install Ruby & Bundler
2. ✅ Run `bundle exec jekyll serve`
3. ✅ Visit http://localhost:4000
4. ✅ Create your first post in `_posts/`
5. ✅ Test dark mode toggle
6. ✅ Customize colors and site info
7. ✅ Push to GitHub
8. ✅ Enable GitHub Pages
9. ✅ Visit your live blog!

## 🎉 Success Indicators

✅ Jekyll server running (terminal shows "Server running")  
✅ Blog loads at http://localhost:4000  
✅ Dark mode toggle appears in top-right  
✅ Clicking toggle changes colors  
✅ Preference persists after refresh  
✅ New posts appear automatically  
✅ Blog deployed to GitHub Pages  
✅ Live blog accessible at `https://YOUR_USERNAME.github.io`

---

**Questions?** Check [GETTING_STARTED.md](GETTING_STARTED.md) or [JEKYLL_SETUP.md](JEKYLL_SETUP.md)

**Happy blogging on Windows 11 Pro!** 🚀
