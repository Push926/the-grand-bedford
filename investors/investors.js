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

function parseMetricValue(key) {
  const val = investorMetrics[key];
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

function renderSectionKpis() {
  const map = {
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
  renderTractionSection();
  renderFinancialsSection();
  renderReceivablesSection();
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
