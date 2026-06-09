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
  const grid = document.getElementById("engines-grid");
  if (!grid) return;
  grid.innerHTML = sections.engines.items
    .map(
      (item) => `
    <div class="investor-card">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="card-metric">
        <div class="label">${item.metricLabel}</div>
        <div class="value">${formatMetric(item.metricKey)}</div>
      </div>
    </div>
  `,
    )
    .join("");
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
  renderBulletList("what-is-bullets", sections.whatIs.bullets);
  renderBulletList("capital-bullets", sections.capital.bullets);
  renderBulletList("location-highlights", sections.location.highlights);
  initNavToggle();
  initScrollSpy();
  initFooterYear();
});
