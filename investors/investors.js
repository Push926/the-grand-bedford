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

function createKpiCard(label, value) {
  const card = document.createElement("div");
  card.className = "investor-kpi-card";
  card.innerHTML = `
    <div class="label">${label}</div>
    <div class="value">${value}</div>
  `;
  return card;
}

function renderKpiRow(container, kpiDefs) {
  if (!container) return;
  container.innerHTML = "";
  kpiDefs.forEach(({ label, key }) => {
    container.appendChild(createKpiCard(label, formatMetric(key)));
  });
}

function renderHero() {
  const heroContent = document.getElementById("hero-content");
  const heroImage = document.getElementById("hero-image");
  const heroKpis = document.getElementById("hero-kpis");

  if (heroContent) {
    heroContent.innerHTML = `
      <span class="eyebrow">${heroData.eyebrow}</span>
      <h1>${heroData.headline}</h1>
      <p class="subhead">${heroData.subhead}</p>
      <div class="investor-hero-actions">
        <a class="investor-cta primary" href="${heroData.primaryCta.href}">${heroData.primaryCta.label}</a>
        <a class="investor-cta secondary" href="${heroData.secondaryCta.href}">${heroData.secondaryCta.label}</a>
      </div>
    `;
  }

  if (heroImage) {
    heroImage.innerHTML = `
      <img src="${heroData.image.src}" alt="${heroData.image.alt}" />
    `;
  }

  renderKpiRow(heroKpis, heroData.kpis);
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
