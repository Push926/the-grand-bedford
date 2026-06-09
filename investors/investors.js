import {
  investorMetrics,
  investorNav,
  heroData,
  sections,
} from "../data/investorData.js";

function formatMetric(key) {
  const val = investorMetrics[key];
  if (val === undefined) return "—";
  return typeof val === "number" ? val.toLocaleString() : val;
}

const ICONS = {
  chart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5M4 19h16M8 17V11M12 17V7M16 17v-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  lock:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 11V8a4 4 0 118 0v3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  frame:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="8" y="8" width="8" height="8" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
  bank:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10h18M5 10V19M9 10V19M15 10V19M19 10V19M2 19h20M12 3l9 5H3l9-5z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ledger:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M9 8h6M9 12h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  forecast:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18V6M4 18h16M7 15l3-4 3 2 4-6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  partners:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="16" cy="9" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4 19c0-3 2.5-5 5-5s5 2 5 5M13 19c0-2.5 1.5-4.5 3.5-4.5S20 16.5 20 19" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  gallery:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M3 15l5-5 4 4 5-6 4 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
  events:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="15" cy="8" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="13" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M5 19c0-2 2-3.5 4-3.5M15 19c0-2 2-3.5 4-3.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  handshake:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l3-2 3 2 2-3 3 1 2 4-4 3-5-1-3-3-1 1Z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M8 10V7a2 2 0 114 0v1M14 11V8a2 2 0 114 0v2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  location:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.33 6-10a6 6 0 10-12 0c0 4.67 6 10 6 10z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="11" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
  arrow:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  art:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4 16l4-4 3 3 5-6 4 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
  column:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v3H8zM7 7h10v13H7z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 10h6M9 13h6M9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  building:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V8l7-4 7 4v12" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M9 12h2v3H9zM13 12h2v3h-2zM9 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
};

function iconMarkup(name) {
  return ICONS[name] || "";
}

function createKpiCard(label, value, footnote, icon) {
  const card = document.createElement("div");
  card.className = footnote ? "investor-kpi-card investor-kpi-card--hero" : "investor-kpi-card";
  const iconHtml = icon
    ? `<div class="kpi-icon">${iconMarkup(icon)}</div>`
    : "";
  const footnoteHtml = footnote ? `<div class="footnote">${footnote}</div>` : "";
  card.innerHTML = `
    ${iconHtml}
    <div class="label">${label}</div>
    <div class="value">${value}</div>
    ${footnoteHtml}
  `;
  return card;
}

function renderKpiRow(container, kpiDefs, heroStyle = false) {
  if (!container) return;
  container.innerHTML = "";
  kpiDefs.forEach(({ label, key, footnote, icon }) => {
    container.appendChild(
      createKpiCard(
        label,
        formatMetric(key),
        heroStyle ? footnote : undefined,
        heroStyle ? icon : undefined,
      ),
    );
  });
}

function renderCtaButton({ label, href, icon }, variant) {
  return `<a class="investor-cta ${variant}" href="${href}">
    <span class="cta-icon">${iconMarkup(icon)}</span>
    <span>${label}</span>
  </a>`;
}

function renderHero() {
  const heroContent = document.getElementById("hero-content");
  const heroImage = document.getElementById("hero-image");
  const heroKpis = document.getElementById("hero-kpis");
  const heroTagline = document.getElementById("hero-tagline");

  if (heroContent) {
    const paragraphs = heroData.copy
      .map((text) => `<p class="hero-copy">${text}</p>`)
      .join("");
    heroContent.innerHTML = `
      <h1>${heroData.headline}</h1>
      ${paragraphs}
      <div class="investor-hero-actions">
        ${renderCtaButton(heroData.primaryCta, "primary")}
        ${renderCtaButton(heroData.secondaryCta, "secondary")}
      </div>
    `;
  }

  if (heroImage) {
    heroImage.innerHTML = `
      <img src="${heroData.image.src}" alt="${heroData.image.alt}" />
    `;
  }

  renderKpiRow(heroKpis, heroData.kpis, true);

  if (heroTagline) {
    heroTagline.textContent = heroData.tagline;
  }
}

function renderNav() {
  const nav = document.getElementById("investor-nav");
  if (!nav) return;
  nav.innerHTML = investorNav
    .map(({ id, label }) => `<a href="#${id}">${label}</a>`)
    .join("");
}

function renderSectionKpis() {
  const map = {
    "traction-kpis": sections.traction.kpis,
    "financials-kpis": sections.financials.kpis,
    "receivables-kpis": sections.receivables.kpis,
    "art-kpis": sections.artInventory.kpis,
    "events-kpis": sections.events.kpis,
    "pipeline-kpis": sections.pipeline.kpis,
    "capital-kpis": sections.capital.kpis,
  };

  Object.entries(map).forEach(([id, kpis]) => {
    renderKpiRow(document.getElementById(id), kpis);
  });
}

function renderEngines() {
  const { engines } = sections;
  const header = document.getElementById("engines-header");
  const grid = document.getElementById("engines-grid");
  const footer = document.getElementById("engines-footer");

  if (header) {
    header.innerHTML = `
      <div class="engines-brand-mark">
        <img src="../assets/logo.png" alt="" width="36" height="36" />
        <span class="engines-brand-name">${engines.brand}</span>
      </div>
      <h2>${engines.headline}</h2>
      <span class="engines-headline-divider" aria-hidden="true"></span>
      <p class="engines-intro">${engines.intro}</p>
    `;
  }

  if (grid) {
    grid.innerHTML = engines.items
      .map(
        (item) => `
      <article class="engines-card">
        <span class="engines-card-icon">${iconMarkup(item.icon)}</span>
        <span class="engines-card-number">${item.number}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span class="engines-card-divider" aria-hidden="true"></span>
        <span class="engines-card-label">${item.label}</span>
      </article>
    `,
      )
      .join("");
  }

  if (footer) {
    footer.innerHTML = `
      <span class="engines-footer-icon">${iconMarkup("shield")}</span>
      <span>${engines.footer}</span>
    `;
  }
}

function renderEventsTable() {
  const tbody = document.getElementById("events-table-body");
  if (!tbody) return;
  tbody.innerHTML = sections.events.placeholderEvents
    .map(
      (e) => `
    <tr>
      <td>${e.name}</td>
      <td>${e.date}</td>
      <td><span class="status">${e.status}</span></td>
    </tr>
  `,
    )
    .join("");
}

function renderPartnersTable() {
  const tbody = document.getElementById("partners-table-body");
  if (!tbody) return;
  tbody.innerHTML = sections.partnerships.partners
    .map(
      (p) => `
    <tr>
      <td>${p.name}</td>
      <td>${p.type}</td>
      <td><span class="status">${p.status}</span></td>
    </tr>
  `,
    )
    .join("");
}

function renderPipelineTable() {
  const tbody = document.getElementById("pipeline-table-body");
  if (!tbody) return;
  tbody.innerHTML = sections.pipeline.stages
    .map(
      (s) => `
    <tr>
      <td>${s.stage}</td>
      <td>${s.count}</td>
      <td>${s.value}</td>
    </tr>
  `,
    )
    .join("");
}

function renderProofGrid() {
  const grid = document.getElementById("proof-grid");
  if (!grid) return;
  grid.innerHTML = sections.proof.images
    .map(
      (img) => `
    <figure class="investor-proof-card">
      <img src="${img.src}" alt="${img.caption}" loading="lazy" />
      <figcaption>${img.caption}</figcaption>
    </figure>
  `,
    )
    .join("");
}

function renderRiskGrid() {
  const grid = document.getElementById("risk-grid");
  if (!grid) return;
  grid.innerHTML = sections.risk.items
    .map(
      (item) => `
    <div class="investor-risk-card">
      <div class="risk-label">Risk</div>
      <h3>${item.risk}</h3>
      <p><strong>Mitigation:</strong> ${item.mitigation}</p>
    </div>
  `,
    )
    .join("");
}

function renderBulletList(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderWhatIsSection() {
  const { whatIs } = sections;
  const main = document.getElementById("what-is-main");
  const collage = document.getElementById("what-is-collage");
  const detail = document.getElementById("what-is-detail");

  if (main) {
    const paragraphs = whatIs.copy
      .map((text) => `<p class="what-is-copy">${text}</p>`)
      .join("");
    const cards = whatIs.cards
      .map(
        (card) => `
      <a class="what-is-card" href="${card.href}" aria-label="${card.title}: ${card.description}">
        <span class="what-is-card-icon">${iconMarkup(card.icon)}</span>
        <span class="what-is-card-title">${card.title}</span>
        <span class="what-is-card-arrow">${iconMarkup("arrow")}</span>
      </a>
    `,
      )
      .join("");

    main.innerHTML = `
      <div class="what-is-text">
        <span class="what-is-eyebrow">${whatIs.eyebrow}</span>
        <h2>${whatIs.title}</h2>
        <span class="what-is-divider" aria-hidden="true"></span>
        <div class="what-is-body">${paragraphs}</div>
      </div>
      <div class="what-is-cards">${cards}</div>
    `;
  }

  if (collage) {
    const { main: mainImg, bottomLeft, bottomRight } = whatIs.images;
    collage.innerHTML = `
      <figure class="what-is-collage-main">
        <img src="${mainImg.src}" alt="${mainImg.alt}" loading="lazy" />
      </figure>
      <div class="what-is-collage-bottom">
        <figure class="what-is-collage-small">
          <img src="${bottomLeft.src}" alt="${bottomLeft.alt}" loading="lazy" />
        </figure>
        <figure class="what-is-collage-small">
          <img src="${bottomRight.src}" alt="${bottomRight.alt}" loading="lazy" />
        </figure>
      </div>
    `;
  }

  if (detail) {
    detail.innerHTML = `
      <span class="what-is-detail-left">${whatIs.detail.left}</span>
      <span class="what-is-detail-right">${whatIs.detail.right}</span>
    `;
  }
}

function renderEvidenceList() {
  const grid = document.getElementById("evidence-grid");
  if (!grid) return;
  grid.innerHTML = sections.evidence.items
    .map(
      (item) => `
    <div class="investor-card">
      <h3>${item.label}</h3>
      <p><span class="status">${item.status}</span></p>
    </div>
  `,
    )
    .join("");
}

function initNavToggle() {
  const toggle = document.getElementById("investor-nav-toggle");
  const nav = document.getElementById("investor-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });
}

function initScrollSpy() {
  const navLinks = document.querySelectorAll("#investor-nav a");
  const sectionIds = investorNav.map((n) => n.id);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function initFooterYear() {
  const yearEl = document.getElementById("investor-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderHero();
  renderSectionKpis();
  renderEngines();
  renderEventsTable();
  renderPartnersTable();
  renderPipelineTable();
  renderProofGrid();
  renderRiskGrid();
  renderEvidenceList();
  renderWhatIsSection();
  renderBulletList("capital-bullets", sections.capital.bullets);
  renderBulletList("location-highlights", sections.location.highlights);
  initNavToggle();
  initScrollSpy();
  initFooterYear();
});
