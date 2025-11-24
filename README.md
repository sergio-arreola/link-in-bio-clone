# 📌 Link-in-bio Clone — Static, Themeable, GitHub Pages–Ready

A lightweight, fully customizable **link-in-bio** micro-site—built with pure HTML/CSS/JS and designed to deploy instantly on **GitHub Pages**.

No dependencies. No lock-in. No ads.  
You control the code, themes, layout, and experience.

---

## 🌟 Features

- **⚡ Fast:** Lightweight static files, zero frameworks.
- **🎨 Theming system:** Swap color themes via `config.json`.
- **📐 Layout presets:** Choose between `stacked` (pill links) or `cards`.
- **⚙️ Config-driven:** Update avatar, title, links, and social icons from a single file.
- **🔧 Extensible:** Build custom themes + layouts.
- **🔒 Free hosting:** Deploy on GitHub Pages with SSL.
- **📱 Mobile-first:** Perfect for social profiles.

---

## 📁 Project Structure
```
linktree-clone/
├─ index.html
├─ config.json
├─ js/
│ 	└─ main.js
├─ themes/
│ 	├─ base.css
│ 	├─ theme-minimal.css
│ 	├─ theme-dark.css
│ 	└─ theme-gradient.css
└─ img/
└─ avatar.jpg
```


### Key Files

| File | Purpose |
|------|---------|
| `index.html` | Template. Theme/layout applied via JS. |
| `config.json` | Controls site content, theme, layout, links. |
| `js/main.js` | Loads config + generates the page. |
| `themes/base.css` | Shared layout, spacing, structure. |
| `themes/theme-*.css` | Visual theme definitions. |
| `img/avatar.jpg` | Optional profile image. |

---

## ⚙️ Configuration (`config.json`)

Your entire site is controlled by this file.

### Example

```json
{
  "site": {
    "title": "FirstName LastName",
    "bio": "Your bio here.",
    "avatar": "img/avatar.jpg",
    "theme": "minimal",
    "layout": "stacked",
    "footerText": "© 2025 YourName. All rights reserved."
  },
  "links": [
    {
      "label": "Portfolio",
      "url": "https://your-portfolio.com",
      "badge": "Featured",
      "featured": true
    }
  ],
  "social": [
    {
      "label": "Instagram",
      "url": "https://instagram.com/your-handle",
      "icon": "instagram"
    }
  ]
}
```

🎨 **Changing the Theme**

Edit:
``"theme": "dark"``

Built-in themes:
 - minimal
 - dark
 - gradient

To add your own theme, see below.

📐 **Changing the Layout**
 - Edit:<br>
``
"layout": "cards"
``
 - Built-in layouts:<br>
``stacked → pill-style links``<br>
``cards → card-style blocks``

🎨 **Adding a New Theme**

1. Duplicate any theme file:
``themes/theme-mytheme.css``
2. Add to theme map in main.js:
```javascript
const themeMap = {
  minimal: "themes/theme-minimal.css",
  dark: "themes/theme-dark.css",
  gradient: "themes/theme-gradient.css",
  mytheme: "themes/theme-mytheme.css"
};
```
3. Set in config.json:
```json
"theme": "mytheme"
```

Done.

📐 **Adding a New Layout**

Layouts rely on data-layout in <html> plus CSS rules.

1. Add new rules to themes/base.css:
```css
html[data-layout="compact"] .links { ... }
html[data-layout="compact"] .link-item { ... }
```
3. Set in config:
```json
"layout": "compact"
```

🚀 **Deploying to GitHub Pages**

1. Push all project files to a repository.
2. Go to Settings → Pages.
3. Build and deployment:
 - Source: ``Deploy from branch``
 - Branch: ``main``
 - Folder: ``/ (root)``

4. Save.

Your site will be live at:<br>
``https://<username>.github.io/<repo>/``

🛠 **Local Development**

No install needed. Just open ``index.html``.

For a live preview:
```javascript
npx live-server
```

Or use VS Code Live Server extension.

📦 **Reuse or Fork This Template**

You can use this as:
```
 - A personal link-in-bio page
 - A micro landing page
 - A minimal personal homepage
 - A template you customize for clients
```
MIT-licensed by default (change if you want).

🐛 **Troubleshooting**

 - Links not showing:<br>
Formatting issue in ``links`` array.
 - Theme won’t load:<br>
	Check the theme name in both ``config.json`` and ``main.js``.
 - Avatar broken:<br>
	Wrong file path → set ``"avatar": ""`` to hide.
 - CSS caching on GitHub Pages:<br>
		Add cache-bust param:<br>
		``theme-minimal.css?v=1.0``
		
📄 **License**

MIT License
Free for personal and commercial use.
