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

function parseMetricValue(key, rawValue) {
  const val = rawValue !== undefined ? rawValue : investorMetrics[key];
  if (typeof val === "number") return val;
  if (typeof val !== "string") return 0;
  const cleaned = val.replace(/[$,]/g, "");
  const match = cleaned.match(/^([\d.]+)([KMB])?$/i);
  if (!match) return 0;
  let num = parseFloat(match[1]);
  const suffix = (match[2] || "").toUpperCase();
  if (suffix === "K") num *= 1000;
  else if (suffix === "M") num *= 1000000;
  else if (suffix === "B") num *= 1000000000;
  return num;
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
  artist:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 20c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  balance:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="14" height="16" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  inventory:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="14" height="12" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="7" y="7" width="14" height="12" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
  tag:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l8-8 8 8-8 8-8-8z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><circle cx="15" cy="9" r="1" fill="currentColor"/></svg>',
  artists:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="9" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="16" cy="9" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="6" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4 19c0-2.5 2-4 4-4M16 19c0-2.5 2-4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 3v4M16 3v4M4 10h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  grid:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 8v4l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10M8 10l4 4 4-4M5 18h14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  info:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 11v5M12 8h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12l4 4 8-8" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  star:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l2.2 5.5L20 10l-4.5 3.8L16.5 20 12 16.8 7.5 20l1-6.2L4 10l5.8-.5L12 4z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
  leaf:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 20c6-1 10-5 12-12-7 2-11 6-12 12z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M9 15c2-2 4-3 6-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  megaphone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10v4h3l5 4V6L8 10H5z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M17 9a3 3 0 010 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  dining:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4v8M8 4v5M10 4v8M6 12v2c0 2 1 3 3 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M16 4v16M19 4c1.5 0 2 2 2 4v4c0 2-.5 4-2 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  bike:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="17" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="18" cy="17" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M6 14h4l2-4h4l2 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10l2-4h3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  newspaper:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  diamond:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10l8-12 8 12-8 12-8-12z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
  gift:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="10" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 10v10M4 10h16M12 10c-2 0-3-1.5-3-3.5S10 3 12 3s3 1.5 3 3.5S14 10 12 10z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2C9.5 20 4 14.5 4 8.5A2 2 0 016.5 4z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  folder:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h6l2 2h8v10H4V7z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
  message:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14a2 2 0 012 2v7a2 2 0 01-2 2H10l-5 4v-4H5a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M9 11h6M9 14h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  pen:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18l2-6 9-9 3 3-9 9-6 2 1-1z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M13 5l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  warning:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5l8 14H4L12 5z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M12 10v4M12 16h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  trend:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 14l3-3 2 2 4-5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
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

function formatChartValue(value) {
  if (value >= 100) return `$${Math.round(value)}K`;
  return `$${value % 1 === 0 ? value : value.toFixed(1)}K`;
}

function buildChartCoords(points, layout) {
  const { width, height, pad, yMax } = layout;
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const count = points.length;
  return points.map((point, index) => ({
    ...point,
    x: pad.left + (count > 1 ? (index / (count - 1)) * plotW : plotW / 2),
    y: pad.top + (1 - point.value / yMax) * plotH,
  }));
}

function polylinePath(coords) {
  return coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
}

function buildYAxisTicks(yMax, step = 20) {
  const ticks = [];
  for (let v = 0; v <= yMax; v += step) {
    ticks.push(v);
  }
  return ticks;
}

function renderRevenueChartSvg(chart) {
  const width = 800;
  const height = 300;
  const pad = { top: 28, right: 20, bottom: 56, left: 52 };
  const coords = buildChartCoords(chart.points, { width, height, pad, yMax: chart.yMax });
  const actualCoords = coords.filter((c) => c.type === "actual");
  const forecastStart = coords.findIndex((c) => c.type === "forecast");
  const forecastCoords =
    forecastStart >= 0 ? [coords[forecastStart - 1], ...coords.slice(forecastStart)] : [];
  const yTicks = buildYAxisTicks(chart.yMax);
  const plotH = height - pad.top - pad.bottom;

  const gridLines = yTicks
    .map((tick) => {
      const y = pad.top + (1 - tick / chart.yMax) * plotH;
      return `<line x1="${pad.left}" y1="${y}" x2="${width - pad.right}" y2="${y}" class="financials-grid-line"/>`;
    })
    .join("");

  const yLabels = yTicks
    .map((tick) => {
      const y = pad.top + (1 - tick / chart.yMax) * plotH;
      return `<text x="${pad.left - 10}" y="${y + 4}" class="financials-axis-label" text-anchor="end">$${tick}K</text>`;
    })
    .join("");

  const xLabels = coords
    .map((c) => {
      const typeClass = c.type === "actual" ? "financials-x-label--actual" : "financials-x-label--forecast";
      return `<text x="${c.x}" y="${height - 28}" class="financials-x-label ${typeClass}" text-anchor="middle">${c.label}</text>
        <text x="${c.x}" y="${height - 14}" class="financials-x-year" text-anchor="middle">${c.year}</text>`;
    })
    .join("");

  const actualDots = actualCoords
    .map(
      (c) =>
        `<circle cx="${c.x}" cy="${c.y}" r="4" class="financials-dot financials-dot--actual"/>
         <text x="${c.x}" y="${c.y - 12}" class="financials-point-label" text-anchor="middle">${formatChartValue(c.value)}</text>`,
    )
    .join("");

  const forecastDots = coords
    .filter((c) => c.type === "forecast")
    .map(
      (c) =>
        `<circle cx="${c.x}" cy="${c.y}" r="3.5" class="financials-dot financials-dot--forecast"/>
         <text x="${c.x}" y="${c.y - 12}" class="financials-point-label financials-point-label--forecast" text-anchor="middle">${formatChartValue(c.value)}</text>`,
    )
    .join("");

  const actualPath = actualCoords.length
    ? `<path d="${polylinePath(actualCoords)}" class="financials-line financials-line--actual" fill="none"/>`
    : "";
  const forecastPath = forecastCoords.length
    ? `<path d="${polylinePath(forecastCoords)}" class="financials-line financials-line--forecast" fill="none"/>`
    : "";

  const ariaLabel = chart.points
    .map((p) => `${p.label} ${p.year} ${p.type}: ${formatChartValue(p.value)}`)
    .join("; ");

  return `
    <svg class="financials-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${ariaLabel}">
      ${gridLines}
      ${yLabels}
      ${actualPath}
      ${forecastPath}
      ${actualDots}
      ${forecastDots}
      ${xLabels}
      <line x1="${pad.left}" y1="${pad.top + plotH}" x2="${width - pad.right}" y2="${pad.top + plotH}" class="financials-axis-line"/>
    </svg>
    <div class="financials-legend">
      <span class="financials-legend-item"><span class="financials-legend-swatch financials-legend-swatch--actual"></span>Actual</span>
      <span class="financials-legend-item"><span class="financials-legend-swatch financials-legend-swatch--forecast"></span>Forecast</span>
    </div>
  `;
}

function renderComparisonChartSvg(chart) {
  const width = 520;
  const height = 260;
  const pad = { top: 24, right: 16, bottom: 44, left: 48 };
  const revenueCoords = buildChartCoords(chart.revenue, { width, height, pad, yMax: chart.yMax });
  const expenseCoords = buildChartCoords(chart.expense, { width, height, pad, yMax: chart.yMax });
  const yTicks = buildYAxisTicks(chart.yMax);
  const plotH = height - pad.top - pad.bottom;

  const gridLines = yTicks
    .map((tick) => {
      const y = pad.top + (1 - tick / chart.yMax) * plotH;
      return `<line x1="${pad.left}" y1="${y}" x2="${width - pad.right}" y2="${y}" class="financials-grid-line"/>`;
    })
    .join("");

  const yLabels = yTicks
    .map((tick) => {
      const y = pad.top + (1 - tick / chart.yMax) * plotH;
      return `<text x="${pad.left - 8}" y="${y + 4}" class="financials-axis-label" text-anchor="end">$${tick}K</text>`;
    })
    .join("");

  const xLabels = revenueCoords
    .map(
      (c) =>
        `<text x="${c.x}" y="${height - 16}" class="financials-x-label" text-anchor="middle">${c.label}</text>`,
    )
    .join("");

  const revenuePath = `<path d="${polylinePath(revenueCoords)}" class="financials-line financials-line--revenue" fill="none"/>`;
  const expensePath = `<path d="${polylinePath(expenseCoords)}" class="financials-line financials-line--expense" fill="none"/>`;

  const revenueDots = revenueCoords
    .map((c) => `<circle cx="${c.x}" cy="${c.y}" r="3" class="financials-dot financials-dot--revenue"/>`)
    .join("");
  const expenseDots = expenseCoords
    .map((c) => `<circle cx="${c.x}" cy="${c.y}" r="3" class="financials-dot financials-dot--expense"/>`)
    .join("");

  const ariaLabel = "Revenue and expense forecast comparison chart";

  return `
    <svg class="financials-svg financials-svg--compact" viewBox="0 0 ${width} ${height}" role="img" aria-label="${ariaLabel}">
      ${gridLines}
      ${yLabels}
      ${revenuePath}
      ${expensePath}
      ${revenueDots}
      ${expenseDots}
      ${xLabels}
      <line x1="${pad.left}" y1="${pad.top + plotH}" x2="${width - pad.right}" y2="${pad.top + plotH}" class="financials-axis-line"/>
    </svg>
    <div class="financials-legend">
      <span class="financials-legend-item"><span class="financials-legend-swatch financials-legend-swatch--revenue"></span>Revenue Forecast</span>
      <span class="financials-legend-item"><span class="financials-legend-swatch financials-legend-swatch--expense"></span>Expense Forecast</span>
    </div>
  `;
}

function renderStatusPill(status, label) {
  return `<span class="receivables-status receivables-status--${status}">${label}</span>`;
}

let artInventoryFilter = "all";

function artworkMatchesFilter(artwork, filterId) {
  if (filterId === "all") return true;
  return artwork.filterTags.includes(filterId);
}

function renderArtworkImage(artwork) {
  if (artwork.image) {
    return `<img src="${artwork.image}" alt="" class="art-inventory-card-image" loading="lazy" />`;
  }
  const tone = artwork.placeholderTone || "ivory";
  return `<div class="art-inventory-card-placeholder art-inventory-card-placeholder--${tone}" aria-hidden="true"><span class="art-inventory-placeholder-mark">${iconMarkup("frame")}</span></div>`;
}

function renderArtworkStatusPill(status, label) {
  return `<span class="art-inventory-status art-inventory-status--${status}">${label}</span>`;
}

function renderArtworkCard(artwork) {
  const soldFields =
    artwork.status.startsWith("sold")
      ? `
      <div class="art-inventory-card-financials">
        <div><span class="art-inventory-card-fin-label">Sold Price</span><span class="art-inventory-card-fin-value">${artwork.soldPrice}</span></div>
        <div><span class="art-inventory-card-fin-label">Collected</span><span class="art-inventory-card-fin-value">${artwork.amountCollected}</span></div>
        <div><span class="art-inventory-card-fin-label">Balance Due</span><span class="art-inventory-card-fin-value">${artwork.balanceDue}</span></div>
      </div>
    `
      : "";

  return `
    <article class="art-inventory-card" data-status="${artwork.status}">
      <div class="art-inventory-card-media">
        ${renderArtworkImage(artwork)}
        ${renderArtworkStatusPill(artwork.status, artwork.statusLabel)}
      </div>
      <div class="art-inventory-card-body">
        <p class="art-inventory-card-artist">${artwork.artist}</p>
        <h3 class="art-inventory-card-title">${artwork.title}</h3>
        <p class="art-inventory-card-meta">${artwork.type} · ${artwork.medium}</p>
        <p class="art-inventory-card-meta">${artwork.dimensions} · ${artwork.year}</p>
        <div class="art-inventory-card-price">
          <span class="art-inventory-card-price-label">List Price</span>
          <span class="art-inventory-card-price-value">${artwork.listPrice}</span>
        </div>
        ${soldFields}
      </div>
    </article>
  `;
}

function renderArtInventoryGrid() {
  const grid = document.getElementById("art-inventory-grid");
  if (!grid) return;
  const { artworks } = sections.artInventory;
  const filtered = artworks.filter((item) => artworkMatchesFilter(item, artInventoryFilter));
  grid.innerHTML =
    filtered.length > 0
      ? filtered.map((item) => renderArtworkCard(item)).join("")
      : `<p class="art-inventory-empty">No works match this filter. Inventory is tracked across all statuses for investor review.</p>`;
}

function updateArtInventoryFilterButtons() {
  const filters = document.getElementById("art-inventory-filters");
  if (!filters) return;
  filters.querySelectorAll(".art-inventory-filter").forEach((btn) => {
    const isActive = btn.dataset.filter === artInventoryFilter;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function initArtInventoryFilters() {
  const filters = document.getElementById("art-inventory-filters");
  if (!filters) return;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest(".art-inventory-filter");
    if (!button) return;
    artInventoryFilter = button.dataset.filter;
    updateArtInventoryFilterButtons();
    renderArtInventoryGrid();
  });
}

function renderArtInventorySection() {
  const { artInventory } = sections;
  const header = document.getElementById("art-inventory-header");
  const metrics = document.getElementById("art-inventory-metrics");
  const filters = document.getElementById("art-inventory-filters");
  const note = document.getElementById("art-inventory-note");

  if (header) {
    header.innerHTML = `
      <h2>${artInventory.headline}</h2>
      <p class="art-inventory-intro">${artInventory.intro}</p>
    `;
  }

  if (metrics) {
    metrics.innerHTML = artInventory.metrics
      .map(
        (item) => `
      <div class="art-inventory-metric">
        <span class="art-inventory-metric-icon">${iconMarkup(item.icon)}</span>
        <span class="art-inventory-metric-label">${item.label}</span>
        <span class="art-inventory-metric-value">${formatMetric(item.key)}</span>
      </div>
    `,
      )
      .join("");
  }

  if (filters) {
    filters.innerHTML = artInventory.filters
      .map(
        (filter) => `
      <button type="button" class="art-inventory-filter${filter.active ? " is-active" : ""}" data-filter="${filter.id}" aria-pressed="${filter.active}">
        ${filter.label}
      </button>
    `,
      )
      .join("");
    artInventoryFilter = artInventory.filters.find((f) => f.active)?.id || "all";
  }

  renderArtInventoryGrid();

  if (note) {
    note.innerHTML = `
      <span class="art-inventory-note-icon">${iconMarkup("shield")}</span>
      <p>${artInventory.note}</p>
    `;
  }
}

function renderReceivablesSection() {
  const { receivables } = sections;
  const breadcrumb = document.getElementById("receivables-breadcrumb");
  const header = document.getElementById("receivables-header");
  const summary = document.getElementById("receivables-summary");
  const table = document.getElementById("receivables-table");
  const cards = document.getElementById("receivables-cards");
  const footer = document.getElementById("receivables-footer");

  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <span class="receivables-breadcrumb-label">${receivables.breadcrumb}</span>
      <span class="receivables-breadcrumb-icon">${iconMarkup("shield")}</span>
    `;
  }

  if (header) {
    header.innerHTML = `
      <h2>${receivables.headline}</h2>
      <p class="receivables-intro">${receivables.intro}</p>
    `;
  }

  if (summary) {
    const maxVal = parseMetricValue(receivables.barBaseKey) || 1;
    const metrics = receivables.summary
      .map(
        (item) => `
      <div class="receivables-metric receivables-metric--${item.tone}">
        <span class="receivables-metric-label">${item.label}</span>
        <span class="receivables-metric-value">${formatMetric(item.key)}</span>
        <span class="receivables-metric-accent" aria-hidden="true"></span>
      </div>
    `,
      )
      .join("");

    const bars = receivables.summary
      .map((item) => {
        const value = parseMetricValue(item.key);
        const pct = Math.min(100, (value / maxVal) * 100);
        return `
        <div class="receivables-bar-row">
          <span class="receivables-bar-label">${item.label}</span>
          <div class="receivables-bar-track" role="presentation">
            <div class="receivables-bar-fill receivables-bar-fill--${item.tone}" style="width: ${pct}%"></div>
          </div>
          <span class="receivables-bar-value">${formatMetric(item.key)}</span>
        </div>
      `;
      })
      .join("");

    const axis = receivables.barAxis.map((tick) => `<span>${tick}</span>`).join("");

    summary.innerHTML = `
      <p class="receivables-summary-label">${receivables.summaryLabel}</p>
      <div class="receivables-metrics">${metrics}</div>
      <div class="receivables-bars" role="img" aria-label="Revenue summary comparison bars">${bars}</div>
      <div class="receivables-bar-axis" aria-hidden="true">${axis}</div>
    `;
  }

  if (table) {
    const headers = receivables.tableColumns
      .map((col) => `<th scope="col">${col.label}</th>`)
      .join("");
    const rows = receivables.rows
      .map(
        (row) => `
      <tr>
        <td>${row.buyer}</td>
        <td>${row.category}</td>
        <td>${row.grossAmount}</td>
        <td>${row.collectedAmount}</td>
        <td>${row.balanceDue}</td>
        <td>${row.dueDate}</td>
        <td>${renderStatusPill(row.status, row.statusLabel)}</td>
      </tr>
    `,
      )
      .join("");

    table.innerHTML = `
      <div class="receivables-table-wrap">
        <table class="receivables-table">
          <caption class="visually-hidden">Accounts receivable ledger with collection status</caption>
          <thead><tr>${headers}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  if (cards) {
    cards.innerHTML = receivables.rows
      .map(
        (row) => `
      <article class="receivables-card">
        <div class="receivables-card-top">
          <h3 class="receivables-card-buyer">${row.buyer}</h3>
          ${renderStatusPill(row.status, row.statusLabel)}
        </div>
        <p class="receivables-card-category">${row.category}</p>
        <dl class="receivables-card-details">
          <div><dt>Gross Amount</dt><dd>${row.grossAmount}</dd></div>
          <div><dt>Collected</dt><dd>${row.collectedAmount}</dd></div>
          <div><dt>Balance Due</dt><dd>${row.balanceDue}</dd></div>
          <div><dt>Due Date</dt><dd>${row.dueDate}</dd></div>
        </dl>
      </article>
    `,
      )
      .join("");
  }

  if (footer) {
    footer.innerHTML = `
      <span class="receivables-footer-icon">${iconMarkup("shield")}</span>
      <span>${receivables.footerNote}</span>
    `;
  }
}

function renderFinancialsSection() {
  const { financials } = sections;
  const header = document.getElementById("financials-header");
  const toggles = document.getElementById("financials-toggles");
  const actuals = document.getElementById("financials-actuals");
  const revenueChart = document.getElementById("financials-revenue-chart");
  const comparisonChart = document.getElementById("financials-comparison-chart");
  const takeaways = document.getElementById("financials-takeaways");
  const disclosures = document.getElementById("financials-disclosures");

  if (header) {
    header.innerHTML = `
      <h2>${financials.headline}</h2>
      <p class="financials-intro">${financials.intro}</p>
    `;
  }

  if (toggles) {
    toggles.innerHTML = financials.toggles
      .map(
        (toggle) => `
      <button type="button" class="financials-toggle${toggle.active ? " is-active" : ""}" aria-pressed="${toggle.active}">
        <span class="financials-toggle-icon">${iconMarkup(toggle.icon)}</span>
        <span>${toggle.label}</span>
      </button>
    `,
      )
      .join("");
  }

  if (actuals) {
    actuals.innerHTML = financials.actuals
      .map(
        (card) => `
      <div class="financials-actual-card">
        <div class="financials-actual-header">
          <span class="financials-actual-month">${card.month}</span>
          <span class="financials-actual-type">${card.type}</span>
        </div>
        <span class="financials-actual-icon">${iconMarkup("chart")}</span>
        <div class="financials-actual-value">${formatMetric(card.key)}</div>
        <div class="financials-actual-label">Revenue</div>
      </div>
    `,
      )
      .join("");
  }

  if (revenueChart) {
    revenueChart.innerHTML = `
      <h3 class="financials-chart-title">${financials.revenueChart.title}</h3>
      <div class="financials-chart-wrap">${renderRevenueChartSvg(financials.revenueChart)}</div>
    `;
  }

  if (comparisonChart) {
    comparisonChart.innerHTML = `
      <h3 class="financials-chart-title">${financials.comparisonChart.title}</h3>
      <div class="financials-chart-wrap">${renderComparisonChartSvg(financials.comparisonChart)}</div>
    `;
  }

  if (takeaways) {
    takeaways.innerHTML = `
      <div class="financials-takeaways-mark">
        <img src="../assets/logo.png" alt="" width="28" height="28" />
      </div>
      <h3 class="financials-takeaways-title">Key Takeaways</h3>
      <ul class="financials-takeaways-list">
        ${financials.takeaways.map((item) => `<li><span class="financials-takeaways-check">${iconMarkup("check")}</span>${item}</li>`).join("")}
      </ul>
    `;
  }

  if (disclosures) {
    disclosures.innerHTML = `
      <div class="financials-disclosure-item">
        <span class="financials-disclosure-icon">${iconMarkup("shield")}</span>
        <span>${financials.disclosures[0]}</span>
      </div>
      <div class="financials-disclosure-item">
        <span class="financials-disclosure-icon">${iconMarkup("info")}</span>
        <span>${financials.disclosures[1]}</span>
      </div>
      <a class="financials-download" href="#" aria-disabled="true">
        <span class="financials-disclosure-icon">${iconMarkup("download")}</span>
        <span>${financials.download.label} — ${financials.download.formats}</span>
      </a>
    `;
  }
}

function renderTractionSection() {
  const { traction } = sections;
  const header = document.getElementById("traction-header");
  const kpis = document.getElementById("traction-kpis");
  const chart = document.getElementById("traction-chart");
  const note = document.getElementById("traction-note");

  if (header) {
    header.innerHTML = `
      <h2>${traction.headline}</h2>
      <p class="traction-intro">${traction.intro}</p>
    `;
  }

  if (kpis) {
    kpis.innerHTML = traction.kpis
      .map(
        (item) => `
      <div class="traction-kpi-card">
        <span class="traction-kpi-icon">${iconMarkup(item.icon)}</span>
        <div class="traction-kpi-content">
          <span class="traction-kpi-label">${item.label}</span>
          <span class="traction-kpi-value">${formatMetric(item.key)}</span>
        </div>
      </div>
    `,
      )
      .join("");
  }

  if (chart) {
    const maxVal = parseMetricValue(traction.chart.baseKey) || 1;
    const rows = traction.chart.rows
      .map((row) => {
        const value = parseMetricValue(row.key);
        const pct = Math.min(100, (value / maxVal) * 100);
        return `
        <div class="traction-bar-row">
          <span class="traction-bar-label">${row.label}</span>
          <div class="traction-bar-track" role="presentation">
            <div class="traction-bar-fill" style="width: ${pct}%"></div>
          </div>
          <span class="traction-bar-value">${formatMetric(row.key)}</span>
        </div>
      `;
      })
      .join("");
    const axis = traction.chart.axis
      .map((tick) => `<span>${tick}</span>`)
      .join("");

    chart.innerHTML = `
      <h3 class="traction-chart-title">${traction.chart.title}</h3>
      <div class="traction-bars" role="img" aria-label="Financial traction overview bar chart">${rows}</div>
      <div class="traction-chart-axis" aria-hidden="true">${axis}</div>
    `;
  }

  if (note) {
    note.innerHTML = `
      <div class="traction-note-mark">
        <img src="../assets/logo.png" alt="" width="32" height="32" />
      </div>
      <h3>${traction.note.headline}</h3>
      <p>${traction.note.copy}</p>
      <a class="traction-note-cta" href="${traction.note.cta.href}">
        ${traction.note.cta.label}
        <span class="traction-note-arrow">${iconMarkup("arrow")}</span>
      </a>
    `;
  }
}

function renderCapitalSection() {
  const cap = sections.capital;
  const header = document.getElementById("capital-header");
  const metricsHeader = document.getElementById("capital-metrics-header");
  const kpis = document.getElementById("capital-kpis");
  const overview = document.getElementById("capital-overview");
  const timeline = document.getElementById("capital-timeline");
  const materials = document.getElementById("capital-materials");
  const actions = document.getElementById("capital-actions");

  if (header) {
    header.innerHTML = `
      <span class="capital-badge">${cap.badge}</span>
      <h2>${cap.headline} <em class="capital-headline-emphasis">${cap.headlineEmphasis}</em></h2>
      <p class="capital-intro">${cap.intro}</p>
    `;
  }

  if (metricsHeader) {
    metricsHeader.innerHTML = `
      <span class="capital-metrics-label">${cap.metricsLabel}</span>
      <span class="capital-metrics-note">
        <span class="capital-metrics-lock">${iconMarkup("lock")}</span>
        ${cap.metricsNote}
      </span>
    `;
  }

  if (kpis) {
    kpis.innerHTML = cap.kpis
      .map(
        (item) => `
        <div class="capital-kpi-card">
          <span class="capital-kpi-icon">${iconMarkup(item.icon)}</span>
          <span class="capital-kpi-label">${item.label}</span>
          <span class="capital-kpi-value">${formatMetric(item.key)}</span>
        </div>
      `,
      )
      .join("");
  }

  if (overview) {
    const principles = cap.overview.principles
      .map(
        (item) => `
        <li class="capital-principle">
          <span class="capital-principle-icon">${iconMarkup(item.icon)}</span>
          <div>
            <span class="capital-principle-title">${item.title}</span>
            <p class="capital-principle-copy">${item.copy}</p>
          </div>
        </li>
      `,
      )
      .join("");

    overview.innerHTML = `
      <h3 class="capital-overview-title">${cap.overview.headline}</h3>
      <p class="capital-overview-copy">${cap.overview.copy}</p>
      <ul class="capital-principles">${principles}</ul>
    `;
  }

  if (timeline) {
    const steps = cap.timeline
      .map(
        (item) => `
        <li class="capital-step">
          <div class="capital-step-marker">
            <span class="capital-step-num">${String(item.step).padStart(2, "0")}</span>
            <span class="capital-step-icon">${iconMarkup(item.icon)}</span>
          </div>
          <div class="capital-step-body">
            <h4 class="capital-step-title">${item.title}</h4>
            <p class="capital-step-copy">${item.copy}</p>
          </div>
        </li>
      `,
      )
      .join("");

    timeline.innerHTML = `
      <span class="capital-timeline-label">${cap.timelineLabel}</span>
      <ol class="capital-timeline-steps" aria-label="${cap.timelineLabel}">${steps}</ol>
    `;
  }

  if (materials) {
    materials.innerHTML = `
      <span class="capital-materials-label">${cap.materialsLabel}</span>
      <div class="capital-materials-grid">
        ${cap.materials
          .map(
            (item) => `
          <a class="capital-material-card" href="${item.href}">
            <span class="capital-material-icon">${iconMarkup(item.icon)}</span>
            <h4 class="capital-material-title">${item.title}</h4>
            <p class="capital-material-copy">${item.copy}</p>
          </a>
        `,
          )
          .join("")}
      </div>
    `;
  }

  if (actions) {
    const ctas = cap.ctas.map((cta) => renderCtaButton(cta, cta.variant)).join("");
    actions.innerHTML = `
      <div class="capital-ctas">${ctas}</div>
      <span class="capital-security">
        <span class="capital-security-icon">${iconMarkup("shield")}</span>
        ${cap.securityNote}
      </span>
    `;
  }
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

function renderEventCategoryImage(category) {
  if (category.image) {
    return `<img src="${category.image}" alt="" class="events-category-image" loading="lazy" />`;
  }
  const tone = category.placeholderTone || "ivory";
  return `<div class="events-category-placeholder events-category-placeholder--${tone}" aria-hidden="true"><span>${iconMarkup(category.icon)}</span></div>`;
}

function renderRevenueStreamChart(chart) {
  const { yMax, streams, quarters } = chart;
  const yLabels = chart.yAxis
    .map(
      (tick, index) =>
        `<span class="events-stacked-y-label" style="bottom: ${(index / (chart.yAxis.length - 1)) * 100}%">${tick}</span>`,
    )
    .join("");

  const columns = quarters
    .map((quarter) => {
      const total = streams.reduce((sum, stream) => sum + (quarter.values[stream.id] || 0), 0);
      const barHeight = Math.min(100, (total / yMax) * 100);
      const segments = [...streams]
        .reverse()
        .map((stream) => {
          const value = quarter.values[stream.id] || 0;
          const segHeight = total > 0 ? (value / total) * 100 : 0;
          return `<div class="events-stack-segment events-stack--${stream.id}" style="height: ${segHeight}%"></div>`;
        })
        .join("");
      return `
        <div class="events-stacked-col">
          <div class="events-stacked-bar-wrap">
            <div class="events-stacked-bar" style="height: ${barHeight}%">${segments}</div>
          </div>
          <span class="events-stacked-label">${quarter.label}</span>
        </div>
      `;
    })
    .join("");

  const legend = streams
    .map(
      (stream) =>
        `<span class="events-legend-item"><span class="events-legend-swatch events-stack--${stream.id}"></span>${stream.label}</span>`,
    )
    .join("");

  const ariaLabel = quarters
    .map((quarter) => {
      const parts = streams.map((s) => `${s.label} $${quarter.values[s.id] || 0}K`);
      return `${quarter.label}: ${parts.join(", ")}`;
    })
    .join("; ");

  return `
    <h3 class="events-chart-title">${chart.title}</h3>
    <div class="events-stacked-chart" role="img" aria-label="${ariaLabel}">
      <div class="events-stacked-y-axis" aria-hidden="true">${yLabels}</div>
      <div class="events-stacked-cols">${columns}</div>
    </div>
    <div class="events-legend">${legend}</div>
    <p class="events-chart-disclaimer">${chart.disclaimer}</p>
  `;
}

function renderEventsSection() {
  const { events } = sections;
  const header = document.getElementById("events-header");
  const chart = document.getElementById("events-chart");
  const kpis = document.getElementById("events-kpis");
  const supporting = document.getElementById("events-supporting");
  const divider = document.getElementById("events-categories-divider");
  const categories = document.getElementById("events-categories");
  const footer = document.getElementById("events-footer");

  if (header) {
    header.innerHTML = `
      <h2>${events.headline}</h2>
      <p class="events-eyebrow">${events.eyebrow}</p>
      <p class="events-intro">${events.intro}</p>
    `;
  }

  if (chart) {
    chart.innerHTML = renderRevenueStreamChart(events.revenueStreamChart);
  }

  if (kpis) {
    kpis.innerHTML = events.kpis
      .map(
        (item) => `
      <div class="events-kpi-card">
        <span class="events-kpi-icon">${iconMarkup(item.icon)}</span>
        <span class="events-kpi-value">${formatMetric(item.key)}</span>
        <span class="events-kpi-label">${item.label}</span>
        <span class="events-kpi-footnote">${item.footnote}</span>
      </div>
    `,
      )
      .join("");
  }

  if (supporting) {
    const items = events.supportingBreakdown.items
      .map(
        (item) => `
      <span class="events-supporting-item">
        <span class="events-supporting-item-label">${item.label}</span>
        <span class="events-supporting-item-value">${formatMetric(item.key)}</span>
      </span>
    `,
      )
      .join("");
    supporting.innerHTML = `
      <span class="events-supporting-heading">${events.supportingBreakdown.label}</span>
      <div class="events-supporting-items">${items}</div>
      <span class="events-supporting-note">${events.supportingBreakdown.note}</span>
    `;
  }

  if (divider) {
    divider.innerHTML = `<span>${events.categoriesDivider}</span>`;
  }

  if (categories) {
    categories.innerHTML = events.categories
      .map(
        (cat) => `
      <article class="events-category-card">
        <div class="events-category-media">${renderEventCategoryImage(cat)}</div>
        <div class="events-category-body">
          <span class="events-category-icon">${iconMarkup(cat.icon)}</span>
          <h3 class="events-category-name">${cat.name}</h3>
          <p class="events-category-desc">${cat.description}</p>
        </div>
      </article>
    `,
      )
      .join("");
  }

  if (footer) {
    footer.innerHTML = `
      <span class="events-footer-icon">${iconMarkup("shield")}</span>
      <span>${events.footer}</span>
    `;
  }
}

const PARTNERSHIP_EXAMPLE_STATUS = {
  representative: "Representative",
  target: "Target",
  "in-discussion": "In discussion",
  aligned: "Aligned",
  pipeline: "Pipeline",
  potential: "Potential",
};

function formatPartnershipExampleStatus(status) {
  return PARTNERSHIP_EXAMPLE_STATUS[status] || status;
}

function renderPartnershipCategoryNode(category) {
  const examples = (category.examples || [])
    .map(
      (ex) => `
      <li class="partnerships-example">
        <span class="partnerships-example-name">${ex.name}</span>
        <span class="partnerships-example-status">${formatPartnershipExampleStatus(ex.status)}</span>
      </li>
    `,
    )
    .join("");

  return `
    <article class="partnerships-node" data-pos="${category.position}">
      <span class="partnerships-node-icon">${iconMarkup(category.icon)}</span>
      <h3 class="partnerships-node-name">${category.name}</h3>
      ${
        examples
          ? `<ul class="partnerships-node-examples" aria-label="Representative examples for ${category.name}">${examples}</ul>`
          : ""
      }
    </article>
  `;
}

function renderPartnershipEcosystemSection() {
  const ps = sections.partnerships;
  const header = document.getElementById("partnerships-header");
  const approach = document.getElementById("partnerships-approach");
  const map = document.getElementById("partnerships-map");
  const strategy = document.getElementById("partnerships-strategy");
  const note = document.getElementById("partnerships-note");
  const footer = document.getElementById("partnerships-footer");

  if (header) {
    header.innerHTML = `
      <span class="partnerships-eyebrow">${ps.eyebrow}</span>
      <h2>${ps.headline}</h2>
      <p class="partnerships-intro">${ps.intro}</p>
    `;
  }

  if (approach) {
    const principles = ps.approach.principles
      .map(
        (item) => `
        <li class="partnerships-principle">
          <span class="partnerships-principle-icon">${iconMarkup(item.icon)}</span>
          <span>${item.label}</span>
        </li>
      `,
      )
      .join("");

    approach.innerHTML = `
      <span class="partnerships-approach-label">${ps.approach.label}</span>
      <p class="partnerships-approach-text">${ps.approach.text}</p>
      <ul class="partnerships-principles">${principles}</ul>
    `;
  }

  if (map) {
    const { centerNode, categories } = ps;
    const categoryNodes = categories.map(renderPartnershipCategoryNode).join("");
    const mapAriaLabel = `Partnership ecosystem centered on ${centerNode.name}, surrounded by ${categories.map((c) => c.name).join(", ")}`;

    map.innerHTML = `
      <div class="partnerships-ecosystem" role="group" aria-label="${mapAriaLabel}">
        <svg class="partnerships-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="50" y1="50" x2="16" y2="16" />
          <line x1="50" y1="50" x2="50" y2="10" />
          <line x1="50" y1="50" x2="84" y2="16" />
          <line x1="50" y1="50" x2="10" y2="50" />
          <line x1="50" y1="50" x2="90" y2="50" />
          <line x1="50" y1="50" x2="16" y2="84" />
          <line x1="50" y1="50" x2="50" y2="90" />
          <line x1="50" y1="50" x2="84" y2="84" />
          <line x1="50" y1="50" x2="50" y2="96" />
        </svg>
        <article class="partnerships-hub">
          <span class="partnerships-hub-icon">${iconMarkup(centerNode.icon)}</span>
          <h3 class="partnerships-hub-name">${centerNode.name}</h3>
          <p class="partnerships-hub-location">${centerNode.location}</p>
        </article>
        ${categoryNodes}
      </div>
    `;
  }

  if (strategy) {
    strategy.innerHTML = ps.strategyCards
      .map(
        (card) => `
        <article class="partnerships-strategy-card">
          <span class="partnerships-strategy-icon">${iconMarkup(card.icon)}</span>
          <h3 class="partnerships-strategy-title">${card.title}</h3>
          <p class="partnerships-strategy-copy">${card.copy}</p>
        </article>
      `,
      )
      .join("");
  }

  if (note) {
    note.innerHTML = `
      <span class="partnerships-note-text">${ps.examplesNote}</span>
      <span class="partnerships-pipeline-teaser">${ps.pipelineTeaser}</span>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <span class="partnerships-footer-icon">${iconMarkup("building")}</span>
      <span>${ps.footer}</span>
    `;
  }
}

const PIPELINE_STATUS_LABELS = {
  "in-discussion": "In Discussion",
  target: "Target",
  pipeline: "Pipeline",
  aligned: "Aligned",
  confirmed: "Confirmed",
};

function pipelineStatusMarkup(status) {
  const label = PIPELINE_STATUS_LABELS[status] || status;
  return `<span class="pipeline-status pipeline-status--${status}">${label}</span>`;
}

function renderPipelineSection() {
  const pl = sections.pipeline;
  const header = document.getElementById("pipeline-header");
  const kpis = document.getElementById("pipeline-kpis");
  const table = document.getElementById("pipeline-table");
  const cards = document.getElementById("pipeline-cards");
  const methodology = document.getElementById("pipeline-methodology");
  const viz = document.getElementById("pipeline-viz");
  const footer = document.getElementById("pipeline-footer");

  if (header) {
    header.innerHTML = `
      <h2>${pl.headline}</h2>
      <p class="pipeline-intro">${pl.intro}</p>
    `;
  }

  if (kpis) {
    kpis.innerHTML = pl.kpis
      .map(
        (item) => `
        <div class="pipeline-kpi-card">
          <span class="pipeline-kpi-icon">${iconMarkup(item.icon)}</span>
          <span class="pipeline-kpi-label">${item.label}</span>
          <span class="pipeline-kpi-value">${formatMetric(item.key)}</span>
        </div>
      `,
      )
      .join("");
  }

  if (table) {
    const headers = pl.tableColumns.map((col) => `<th scope="col">${col.label}</th>`).join("");
    const rows = pl.rows
      .map(
        (row) => `
        <tr>
          <td class="pipeline-cell-partner">${row.partner}</td>
          <td>${row.category}</td>
          <td>${pipelineStatusMarkup(row.status)}</td>
          <td class="pipeline-cell-num">${row.oneTime}</td>
          <td class="pipeline-cell-num">${row.monthly}</td>
          <td class="pipeline-cell-num">${row.annual}</td>
          <td class="pipeline-cell-num">${row.probability}</td>
          <td class="pipeline-cell-num pipeline-cell-weighted">${row.weighted}</td>
          <td class="pipeline-cell-notes">${row.notes}</td>
        </tr>
      `,
      )
      .join("");

    table.innerHTML = `
      <div class="pipeline-table-wrap">
        <table class="pipeline-table">
          <thead><tr>${headers}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  if (cards) {
    cards.innerHTML = pl.rows
      .map(
        (row) => `
        <article class="pipeline-card">
          <div class="pipeline-card-top">
            <div>
              <h3 class="pipeline-card-partner">${row.partner}</h3>
              <p class="pipeline-card-category">${row.category}</p>
            </div>
            ${pipelineStatusMarkup(row.status)}
          </div>
          <dl class="pipeline-card-details">
            <div><dt>Est. One-Time</dt><dd>${row.oneTime}</dd></div>
            <div><dt>Est. Monthly</dt><dd>${row.monthly}</dd></div>
            <div><dt>Est. Annual</dt><dd>${row.annual}</dd></div>
            <div><dt>Probability</dt><dd>${row.probability}</dd></div>
            <div><dt>Weighted Value</dt><dd class="pipeline-card-weighted">${row.weighted}</dd></div>
          </dl>
          <p class="pipeline-card-notes">${row.notes}</p>
        </article>
      `,
      )
      .join("");
  }

  if (methodology) {
    methodology.innerHTML = `
      <span class="pipeline-methodology-icon">${iconMarkup("info")}</span>
      <h3 class="pipeline-methodology-title">${pl.methodology.headline}</h3>
      <p class="pipeline-methodology-copy">${pl.methodology.copy}</p>
    `;
  }

  if (viz) {
    const maxWeighted = Math.max(
      ...pl.rows.map((row) => parseMetricValue(undefined, row.weighted)),
      1,
    );

    const bars = pl.rows
      .map((row) => {
        const val = parseMetricValue(undefined, row.weighted);
        const pct = Math.round((val / maxWeighted) * 100);
        return `
          <div class="pipeline-viz-row">
            <span class="pipeline-viz-label">${row.partner}</span>
            <div class="pipeline-viz-track" role="presentation">
              <div class="pipeline-viz-fill" style="width: ${pct}%"></div>
            </div>
            <span class="pipeline-viz-value">${row.weighted}</span>
          </div>
        `;
      })
      .join("");

    const ariaLabel = pl.rows
      .map((row) => `${row.partner}: ${row.weighted} weighted value`)
      .join("; ");

    viz.innerHTML = `
      <h3 class="pipeline-viz-title">${pl.visualization.title}</h3>
      <div class="pipeline-viz-chart" role="img" aria-label="${ariaLabel}">${bars}</div>
      <p class="pipeline-viz-disclaimer">${pl.visualization.disclaimer}</p>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <span class="pipeline-footer-icon">${iconMarkup("shield")}</span>
      <span>${pl.footerNote}</span>
    `;
  }
}

function renderLocationAbstractMap(label, caption) {
  return `
    <div class="location-map" role="img" aria-label="${label} — abstract neighborhood context">
      <svg class="location-map-svg" viewBox="0 0 240 180" aria-hidden="true">
        <rect x="0" y="0" width="240" height="180" rx="8" fill="rgba(250,247,242,0.8)" />
        <path d="M20 90 H220 M120 20 V160 M60 40 L180 140 M180 40 L60 140" stroke="currentColor" stroke-width="0.8" opacity="0.22" />
        <ellipse cx="120" cy="90" rx="70" ry="52" stroke="currentColor" stroke-width="1" fill="none" opacity="0.35" />
        <ellipse cx="95" cy="75" rx="28" ry="20" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.2" />
        <ellipse cx="145" cy="105" rx="32" ry="22" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.2" />
        <circle cx="120" cy="90" r="6" fill="currentColor" opacity="0.55" />
        <circle cx="120" cy="90" r="10" stroke="currentColor" stroke-width="1" fill="none" opacity="0.4" />
      </svg>
      <span class="location-map-label">${label}</span>
      <span class="location-map-caption">${caption}</span>
    </div>
  `;
}

function renderLocationSection() {
  const loc = sections.location;
  const header = document.getElementById("location-header");
  const narrative = document.getElementById("location-narrative");
  const visual = document.getElementById("location-visual");
  const advantages = document.getElementById("location-advantages");
  const thesis = document.getElementById("location-thesis");
  const revenue = document.getElementById("location-revenue");
  const footer = document.getElementById("location-footer");

  if (header) {
    header.innerHTML = `
      <h2>${loc.headline}</h2>
      <p class="location-intro">${loc.intro}</p>
    `;
  }

  if (narrative) {
    const paragraphs = loc.narrative.map((p) => `<p>${p}</p>`).join("");
    narrative.innerHTML = `
      <div class="location-narrative-body">${paragraphs}</div>
    `;
  }

  if (visual) {
    const photos = loc.visual.images
      .map(
        (img) => `
        <figure class="location-photo">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" />
          <figcaption>${img.caption}</figcaption>
        </figure>
      `,
      )
      .join("");

    visual.innerHTML = `
      <div class="location-visual-grid">
        ${photos}
        ${renderLocationAbstractMap(loc.visual.mapLabel, loc.visual.mapCaption)}
      </div>
    `;
  }

  if (advantages) {
    advantages.innerHTML = `
      <span class="location-section-label">${loc.advantagesLabel}</span>
      <div class="location-advantages-grid">
        ${loc.advantages
          .map(
            (item) => `
          <article class="location-advantage-card">
            <span class="location-advantage-icon">${iconMarkup(item.icon)}</span>
            <h3 class="location-advantage-title">${item.title}</h3>
            <p class="location-advantage-copy">${item.copy}</p>
          </article>
        `,
          )
          .join("")}
      </div>
    `;
  }

  if (thesis) {
    thesis.innerHTML = `
      <span class="location-thesis-icon">${iconMarkup("location")}</span>
      <h3 class="location-thesis-title">${loc.thesis.headline}</h3>
      <p class="location-thesis-copy">${loc.thesis.copy}</p>
    `;
  }

  if (revenue) {
    revenue.innerHTML = `
      <span class="location-section-label">${loc.revenueLabel}</span>
      <div class="location-revenue-grid">
        ${loc.revenueStreams
          .map(
            (item) => `
          <article class="location-revenue-card">
            <span class="location-revenue-icon">${iconMarkup(item.icon)}</span>
            <h4 class="location-revenue-title">${item.title}</h4>
            <p class="location-revenue-copy">${item.copy}</p>
          </article>
        `,
          )
          .join("")}
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <span class="location-footer-divider" aria-hidden="true"></span>
      <span>${loc.footer}</span>
    `;
  }
}

function renderProofArchiveMedia(item) {
  if (item.image) {
    return `<img src="${item.image.src}" alt="${item.image.alt}" loading="lazy" />`;
  }
  return `
    <div class="proof-archive-placeholder proof-archive-placeholder--${item.placeholderTone || "ivory"}">
      ${iconMarkup(item.icon)}
    </div>
  `;
}

function renderVisualProofArchiveSection() {
  const proof = sections.proof;
  const header = document.getElementById("proof-header");
  const callout = document.getElementById("proof-callout");
  const grid = document.getElementById("proof-archive-grid");
  const curation = document.getElementById("proof-archive-curation");

  if (header) {
    header.innerHTML = `
      <h2>${proof.headline}</h2>
      <p class="proof-archive-supporting">${proof.supportingLine}</p>
      <p class="proof-archive-intro">${proof.intro}</p>
    `;
  }

  if (callout) {
    callout.innerHTML = `
      <span class="proof-archive-callout-icon">${iconMarkup("shield")}</span>
      <span class="proof-archive-callout-label">${proof.privacyCallout.label}</span>
      <p class="proof-archive-callout-copy">${proof.privacyCallout.copy}</p>
    `;
  }

  if (grid) {
    grid.innerHTML = proof.archive
      .map(
        (item) => `
        <article class="proof-archive-card">
          <div class="proof-archive-media">
            ${renderProofArchiveMedia(item)}
            ${
              item.locked
                ? `<span class="proof-archive-lock">${iconMarkup("lock")}</span>`
                : ""
            }
          </div>
          <div class="proof-archive-body">
            <div class="proof-archive-card-top">
              <span class="proof-archive-category">${item.category}</span>
              <span class="proof-archive-status">${item.statusBadge}</span>
            </div>
            <h3 class="proof-archive-title">${item.title}</h3>
            <p class="proof-archive-meta">${item.meta}</p>
            <p class="proof-archive-desc">${item.description}</p>
          </div>
        </article>
      `,
      )
      .join("");
  }

  if (curation) {
    curation.innerHTML = `
      <span class="proof-archive-curation-icon">${iconMarkup("shield")}</span>
      <h3 class="proof-archive-curation-title">${proof.curation.headline}</h3>
      <p class="proof-archive-curation-copy">${proof.curation.copy}</p>
    `;
  }
}

function renderRiskSection() {
  const risk = sections.risk;
  const header = document.getElementById("risk-header");
  const columns = document.getElementById("risk-columns");
  const footer = document.getElementById("risk-footer");

  if (header) {
    header.innerHTML = `
      <span class="risk-flourish" aria-hidden="true">${iconMarkup("diamond")}</span>
      <h2>${risk.headline}</h2>
      <p class="risk-intro">${risk.intro}</p>
    `;
  }

  if (columns) {
    columns.innerHTML = risk.columns
      .map((col) => {
        const items = col.items
          .map(
            (item) => `
            <li class="risk-item">
              <span class="risk-item-icon">${iconMarkup(item.icon)}</span>
              <span class="risk-item-text">${item.text}</span>
            </li>
          `,
          )
          .join("");

        return `
          <article class="risk-column" id="${col.id}">
            <span class="risk-column-icon">${iconMarkup(col.icon)}</span>
            <h3 class="risk-column-title">${col.title}</h3>
            <span class="risk-column-divider" aria-hidden="true">${iconMarkup("diamond")}</span>
            <ul class="risk-items">${items}</ul>
          </article>
        `;
      })
      .join("");
  }

  if (footer) {
    footer.innerHTML = `
      <span class="risk-footer-icon">${iconMarkup("building")}</span>
      <div class="risk-footer-copy">
        <p>${risk.footer.copy}</p>
        <p class="risk-footer-emphasis">${risk.footer.emphasis}</p>
      </div>
    `;
  }
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

function renderEvidenceDocPreview(label) {
  return `
    <div class="evidence-card-doc" aria-hidden="true">
      <span class="evidence-card-doc-label">${label}</span>
      <div class="evidence-card-doc-preview">
        <span class="evidence-card-doc-line evidence-card-doc-line--wide"></span>
        <span class="evidence-card-doc-line"></span>
        <span class="evidence-card-doc-line"></span>
        <span class="evidence-card-doc-bar"></span>
      </div>
    </div>
  `;
}

function renderEvidenceSection() {
  const ev = sections.evidence;
  const header = document.getElementById("evidence-header");
  const grid = document.getElementById("evidence-grid");
  const protocol = document.getElementById("evidence-protocol");
  const note = document.getElementById("evidence-note");
  const footer = document.getElementById("evidence-footer");

  if (header) {
    header.innerHTML = `
      <span class="evidence-eyebrow">${ev.eyebrow}</span>
      <h2>${ev.headline}</h2>
      <p class="evidence-intro">${ev.intro}</p>
    `;
  }

  if (grid) {
    grid.innerHTML = ev.categories
      .map(
        (cat) => `
        <article class="evidence-card">
          <div class="evidence-card-main">
            <div class="evidence-card-top">
              <span class="evidence-card-icon">${iconMarkup(cat.icon)}</span>
              <div class="evidence-card-text">
                <h3 class="evidence-card-title">${cat.title}</h3>
                <p class="evidence-card-copy">${cat.copy}</p>
              </div>
            </div>
            ${renderEvidenceDocPreview("Summary")}
          </div>
          <div class="evidence-card-footer">
            <span class="evidence-badge evidence-badge--access">
              <span class="evidence-badge-icon">${iconMarkup("lock")}</span>
              ${cat.accessBadge}
            </span>
            <span class="evidence-badge evidence-badge--availability">${cat.availabilityBadge}</span>
          </div>
        </article>
      `,
      )
      .join("");
  }

  if (protocol) {
    const steps = ev.protocol.steps
      .map(
        (item) => `
        <li class="evidence-protocol-step">
          <span class="evidence-protocol-num">${String(item.step).padStart(2, "0")}</span>
          <div>
            <span class="evidence-protocol-step-title">${item.title}</span>
            <p class="evidence-protocol-step-copy">${item.copy}</p>
          </div>
        </li>
      `,
      )
      .join("");

    protocol.innerHTML = `
      <span class="evidence-protocol-icon">${iconMarkup("shield")}</span>
      <h3 class="evidence-protocol-title">${ev.protocol.headline}</h3>
      <p class="evidence-protocol-copy">${ev.protocol.copy}</p>
      <ol class="evidence-protocol-steps">${steps}</ol>
    `;
  }

  if (note) {
    note.innerHTML = `
      <span class="evidence-note-icon">${iconMarkup("shield")}</span>
      <span>${ev.supportingNote}</span>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <span class="evidence-footer-divider" aria-hidden="true"></span>
      <span>${ev.footer}</span>
    `;
  }
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
  renderTractionSection();
  renderFinancialsSection();
  renderReceivablesSection();
  renderArtInventorySection();
  initArtInventoryFilters();
  renderEngines();
  renderEventsSection();
  renderPartnershipEcosystemSection();
  renderPipelineSection();
  renderCapitalSection();
  renderLocationSection();
  renderVisualProofArchiveSection();
  renderRiskSection();
  renderEvidenceSection();
  renderWhatIsSection();
  initNavToggle();
  initScrollSpy();
  initFooterYear();
});
