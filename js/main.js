// js/main.js

async function loadConfig() {
  const res = await fetch("config.json", { cache: "no-store" });
  if (!res.ok) {
    console.error("Failed to load config.json");
    return null;
  }
  return res.json();
}

function applyTheme(themeName) {
  const themeMap = {
    minimal: "themes/theme-minimal.css",
    dark: "themes/theme-dark.css",
    gradient: "themes/theme-gradient.css"
  };

  const href = themeMap[themeName] || themeMap.minimal;
  const linkEl = document.getElementById("theme-stylesheet");
  if (linkEl) {
    linkEl.setAttribute("href", href);
  }
}

function applyLayout(layoutName) {
  const html = document.documentElement;
  // Supported: "stacked", "cards"
  html.setAttribute("data-layout", layoutName || "stacked");
}

function renderProfile(site) {
  const titleEl = document.getElementById("title");
  const bioEl = document.getElementById("bio");
  const avatarEl = document.getElementById("avatar");
  const footerEl = document.getElementById("footer-text");

  if (site.title) {
    document.title = site.title + " · Links";
    titleEl.textContent = site.title;
  }

  if (site.bio) {
    bioEl.textContent = site.bio;
  } else {
    bioEl.style.display = "none";
  }

  if (site.avatar) {
    avatarEl.src = site.avatar;
  } else {
    avatarEl.style.display = "none";
  }

  if (site.footerText) {
    footerEl.textContent = site.footerText;
  } else {
    footerEl.style.display = "none";
  }
}

function renderLinks(links) {
  const container = document.getElementById("links");
  container.innerHTML = "";

  links.forEach(link => {
    const a = document.createElement("a");
    a.className = "link-item";
    if (link.featured) {
      a.classList.add("link-item--featured");
    }
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const labelSpan = document.createElement("span");
    labelSpan.className = "link-item__label";
    labelSpan.textContent = link.label;

    a.appendChild(labelSpan);

    if (link.badge) {
      const badge = document.createElement("span");
      badge.className = "link-item__badge";
      badge.textContent = link.badge;
      a.appendChild(badge);
    }

    container.appendChild(a);
  });
}

function renderSocial(social) {
  const container = document.getElementById("social");
  container.innerHTML = "";

  if (!social || social.length === 0) {
    container.style.display = "none";
    return;
  }

  social.forEach(item => {
    const a = document.createElement("a");
    a.className = "social__item";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", item.label);

    const iconSpan = document.createElement("span");
    iconSpan.className = `social__icon social__icon--${item.icon || "generic"}`;
    iconSpan.textContent = iconSymbol(item.icon); // simple text icon or emoji

    a.appendChild(iconSpan);
    container.appendChild(a);
  });
}

function iconSymbol(iconName) {
  switch ((iconName || "").toLowerCase()) {
    case "instagram": return "◎";
    case "x": return "✕";
    case "twitter": return "✕";
    case "linkedin": return "in";
    case "github": return "{}";
    default: return "●";
  }
}

async function init() {
  const config = await loadConfig();
  if (!config) return;

  const { site, links, social } = config;

  applyTheme(site.theme);
  applyLayout(site.layout);
  renderProfile(site);
  renderLinks(links || []);
  renderSocial(social || []);
}

document.addEventListener("DOMContentLoaded", init);
