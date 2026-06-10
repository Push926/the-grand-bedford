import { landingData as d } from "../data/investorLandingData.js";

function formatMoney(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

function renderPhaseItems(phase) {
  const rows = phase.items
    .map(
      (item) => `
      <li class="memo-phase-row">
        <span>${item.label}</span>
        <span>${formatMoney(item.amount)}</span>
      </li>
    `,
    )
    .join("");

  return `
    <div class="memo-phase-block">
      <h4 class="memo-phase-label">${phase.label}</h4>
      <ul class="memo-phase-list">${rows}</ul>
      <p class="memo-phase-total">Phase total: <strong>${formatMoney(phase.total)}</strong></p>
    </div>
  `;
}

function renderRoadmapChart(roadmap) {
  const { periods, scenarios, yLabel } = roadmap;
  const width = 320;
  const height = 180;
  const pad = { top: 16, right: 12, bottom: 28, left: 36 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;
  const allValues = Object.values(scenarios).flatMap((s) => s.values);
  const yMax = Math.max(...allValues) * 1.1;
  const xStep = chartW / (periods.length - 1);

  const lines = Object.entries(scenarios)
    .map(([key, scenario]) => {
      const points = scenario.values
        .map((val, i) => {
          const x = pad.left + i * xStep;
          const y = pad.top + chartH - (val / yMax) * chartH;
          return `${x},${y}`;
        })
        .join(" ");
      return `<polyline class="memo-chart-line memo-chart-line--${key}" data-scenario="${key}" points="${points}" fill="none" stroke="${scenario.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`;
    })
    .join("");

  const dots = Object.entries(scenarios)
    .map(([key, scenario]) =>
      scenario.values
        .map((val, i) => {
          const x = pad.left + i * xStep;
          const y = pad.top + chartH - (val / yMax) * chartH;
          return `<circle class="memo-chart-dot memo-chart-dot--${key}" data-scenario="${key}" cx="${x}" cy="${y}" r="3.5" fill="${scenario.color}" />`;
        })
        .join(""),
    )
    .join("");

  const xLabels = periods
    .map((label, i) => {
      const x = pad.left + i * xStep;
      return `<text x="${x}" y="${height - 6}" text-anchor="middle" class="memo-chart-axis-label">${label}</text>`;
    })
    .join("");

  const yTicks = [0, 0.5, 1].map((pct) => {
    const val = Math.round((yMax * pct) / 50) * 50;
    const y = pad.top + chartH - pct * chartH;
    return `<text x="${pad.left - 6}" y="${y + 4}" text-anchor="end" class="memo-chart-axis-label">$${val}K</text>`;
  });

  return `
    <div class="memo-chart-wrap">
      <p class="memo-chart-y-label">${yLabel}</p>
      <svg class="memo-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Revenue roadmap line chart">
        ${yTicks.join("")}
        <line x1="${pad.left}" y1="${pad.top + chartH}" x2="${pad.left + chartW}" y2="${pad.top + chartH}" class="memo-chart-grid" />
        ${lines}
        ${dots}
        ${xLabels}
      </svg>
      <div class="memo-chart-legend" id="roadmap-legend"></div>
    </div>
  `;
}

function initRoadmapToggle(roadmap) {
  const toggles = document.querySelectorAll("[data-roadmap-toggle]");
  const lines = document.querySelectorAll("[data-scenario]");
  const legend = document.getElementById("roadmap-legend");

  if (legend) {
    legend.innerHTML = Object.entries(roadmap.scenarios)
      .map(
        ([key, s]) =>
          `<span class="memo-legend-item" data-legend="${key}"><span class="memo-legend-swatch" style="background:${s.color}"></span>${s.label}</span>`,
      )
      .join("");
  }

  function setActive(scenario) {
    toggles.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.roadmapToggle === scenario);
      btn.setAttribute("aria-pressed", btn.dataset.roadmapToggle === scenario ? "true" : "false");
    });
    lines.forEach((el) => {
      const match = el.dataset.scenario === scenario;
      el.style.opacity = match ? "1" : "0.2";
    });
    legend?.querySelectorAll("[data-legend]").forEach((el) => {
      el.style.opacity = el.dataset.legend === scenario ? "1" : "0.45";
    });
  }

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => setActive(btn.dataset.roadmapToggle));
  });

  setActive(roadmap.defaultScenario);
}

function renderHero() {
  const el = document.getElementById("hero");
  if (!el) return;
  const h = d.hero;
  const bullets = h.proof.map((item) => `<li>${item}</li>`).join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <div class="memo-hero-grid">
        <div class="memo-hero-content">
          <p class="memo-eyebrow">Private Investment Opportunity</p>
          <h1 class="memo-headline">${h.headline}</h1>
          <p class="memo-subheadline">${h.subheadline}</p>
          <p class="memo-body">${h.copy}</p>
          <ul class="memo-bullets">${bullets}</ul>
          <div class="memo-cta-row">
            <a class="memo-btn memo-btn--primary" href="${h.primaryCta.href}">${h.primaryCta.label}</a>
            <a class="memo-btn memo-btn--ghost" href="${h.secondaryCta.href}">${h.secondaryCta.label}</a>
          </div>
        </div>
        <div class="memo-hero-media">
          <img src="${h.image}" alt="The Grand Bedford storefront in Williamsburg" loading="eager" />
        </div>
      </div>
    </div>
  `;
}

function renderOffer() {
  const el = document.getElementById("offer");
  if (!el) return;
  const o = d.offer;
  const terms = o.terms
    .map(
      (t) => `
      <div class="memo-term-row">
        <span class="memo-term-label">${t.label}</span>
        <span class="memo-term-value">${t.value}</span>
      </div>
    `,
    )
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <div class="memo-panel memo-panel--featured">
        <h2 class="memo-section-title">${o.title}</h2>
        <div class="memo-terms">${terms}</div>
        <p class="memo-plain-english">${o.plainEnglish}</p>
      </div>
    </div>
  `;
}

function renderValuation() {
  const el = document.getElementById("valuation");
  if (!el) return;
  const v = d.valuation;
  const points = v.points.map((p) => `<li>${p}</li>`).join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${v.title}</h2>
      <ul class="memo-check-list">${points}</ul>
      <div class="memo-callout">
        <p>${v.proof}</p>
      </div>
      <p class="memo-note">${v.note}</p>
    </div>
  `;
}

function renderUseOfFunds() {
  const el = document.getElementById("use-of-funds");
  if (!el) return;
  const f = d.useOfFunds;
  const items = f.items
    .map((item) => {
      const pct = Math.round((item.amount / f.total) * 100);
      return `
        <div class="memo-fund-row">
          <div class="memo-fund-row-head">
            <span>${item.label}</span>
            <span>${formatMoney(item.amount)}</span>
          </div>
          <div class="memo-fund-bar" aria-hidden="true"><span style="width:${pct}%"></span></div>
        </div>
      `;
    })
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${f.title}</h2>
      <p class="memo-section-intro">${f.intro}</p>
      <div class="memo-panel">${items}</div>
      <p class="memo-fund-total">Total raise: <strong>${formatMoney(f.total)}</strong></p>
    </div>
  `;
}

function renderPhases() {
  const el = document.getElementById("phases");
  if (!el) return;
  const p = d.phases;
  const cards = p.items
    .map(
      (item) => `
      <article class="memo-card">
        <h3 class="memo-card-title">${item.title}</h3>
        <p class="memo-card-copy">${item.purpose}</p>
      </article>
    `,
    )
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${p.title}</h2>
      <p class="memo-section-intro">${p.copy}</p>
      <div class="memo-card-grid">${cards}</div>
    </div>
  `;
}

function renderChannels() {
  const el = document.getElementById("channels");
  if (!el) return;

  const cards = d.channels
    .map((ch) => {
      const note = ch.note
        ? `<p class="memo-channel-note">${ch.note}</p>`
        : "";
      const internal = ch.internalNote
        ? `<p class="memo-channel-internal">${ch.internalNote}</p>`
        : "";

      return `
        <article class="memo-channel-card" id="channel-${ch.id}">
          <div class="memo-channel-header">
            <span class="memo-channel-num">Channel ${ch.number}</span>
            <h3 class="memo-channel-title">${ch.title}</h3>
            <p class="memo-channel-desc">${ch.description}</p>
            <p class="memo-channel-alloc">Allocation: <strong>${formatMoney(ch.allocation)}</strong></p>
          </div>
          ${renderPhaseItems(ch.phase1)}
          ${renderPhaseItems(ch.phase2)}
          ${note}
          ${internal}
          <p class="memo-channel-summary">${ch.summary}</p>
        </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">Revenue Channels</h2>
      <p class="memo-section-intro">Three direct revenue-producing channels activated in phased milestones.</p>
      <div class="memo-channel-stack">${cards}</div>
    </div>
  `;
}

function renderRoadmap() {
  const el = document.getElementById("roadmap");
  if (!el) return;
  const r = d.roadmap;
  const toggles = Object.entries(r.scenarios)
    .map(
      ([key, s]) =>
        `<button type="button" class="memo-toggle-btn" data-roadmap-toggle="${key}" aria-pressed="false">${s.label}</button>`,
    )
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${r.title}</h2>
      <p class="memo-section-intro">${r.subtitle}</p>
      <div class="memo-panel">
        <div class="memo-toggle-group" role="group" aria-label="Revenue scenario">${toggles}</div>
        ${renderRoadmapChart(r)}
        <p class="memo-disclaimer">${r.disclaimer}</p>
      </div>
    </div>
  `;

  initRoadmapToggle(r);
}

function renderReturns() {
  const el = document.getElementById("returns");
  if (!el) return;
  const r = d.returns;
  const highlights = r.highlights
    .map(
      (h) => `
      <div class="memo-stat-card">
        <span class="memo-stat-label">${h.label}</span>
        <span class="memo-stat-value">${h.value}</span>
      </div>
    `,
    )
    .join("");

  const headerCells = r.periods.map((p) => `<th>${p}</th>`).join("");
  const rows = r.scenarios
    .map(
      (s) => `
      <tr>
        <th scope="row">${s.label}</th>
        ${s.values.map((v) => `<td>${v}</td>`).join("")}
      </tr>
    `,
    )
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${r.title}</h2>
      <p class="memo-section-intro">${r.intro}</p>
      <div class="memo-stat-grid">${highlights}</div>
      <div class="memo-table-wrap">
        <table class="memo-table">
          <thead>
            <tr><th scope="col">Scenario</th>${headerCells}</tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="memo-disclaimer">${r.disclaimer}</p>
    </div>
  `;
}

function renderPeople() {
  const el = document.getElementById("people");
  if (!el) return;
  const p = d.people;
  const cards = p.team
    .map((person) => {
      const focus = person.focus.map((f) => `<li>${f}</li>`).join("");
      return `
        <article class="memo-person-card">
          <h3 class="memo-person-name">${person.name}</h3>
          <p class="memo-person-role">${person.role}</p>
          <p class="memo-person-focus-label">30–45 day focus</p>
          <ul class="memo-person-focus">${focus}</ul>
        </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${p.title}</h2>
      <div class="memo-person-grid">${cards}</div>
      <p class="memo-note">${p.note}</p>
    </div>
  `;
}

function renderProof() {
  const el = document.getElementById("proof");
  if (!el) return;
  const items = d.proof.items
    .map(
      (item) => `
      <figure class="memo-proof-item">
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <figcaption>
          <span class="memo-proof-cat">${item.category}</span>
          ${item.caption}
        </figcaption>
      </figure>
    `,
    )
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${d.proof.title}</h2>
      <div class="memo-proof-grid">${items}</div>
    </div>
  `;
}

function renderRisk() {
  const el = document.getElementById("risk");
  if (!el) return;
  const items = d.risk.items.map((item) => `<li>${item}</li>`).join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <h2 class="memo-section-title">${d.risk.title}</h2>
      <ul class="memo-risk-list">${items}</ul>
    </div>
  `;
}

function renderInvestForm() {
  const el = document.getElementById("invest");
  if (!el) return;
  const f = d.invest;
  const nextSteps = f.fields.nextSteps
    .map((opt) => `<option value="${opt}">${opt}</option>`)
    .join("");
  const accredited = f.fields.accredited
    .map((opt) => `<option value="${opt}">${opt}</option>`)
    .join("");

  el.innerHTML = `
    <div class="memo-wrap">
      <div class="memo-panel memo-panel--featured">
        <h2 class="memo-section-title">${f.title}</h2>
        <form class="memo-form" id="memo-invest-form">
          <label class="memo-field">
            <span>Full name</span>
            <input type="text" name="name" required autocomplete="name" />
          </label>
          <label class="memo-field">
            <span>Email</span>
            <input type="email" name="email" required autocomplete="email" />
          </label>
          <label class="memo-field">
            <span>Phone</span>
            <input type="tel" name="phone" autocomplete="tel" />
          </label>
          <label class="memo-field">
            <span>Entity name, if applicable</span>
            <input type="text" name="entity" />
          </label>
          <label class="memo-field">
            <span>Intended investment amount</span>
            <input type="text" name="amount" placeholder="$150,000" />
          </label>
          <label class="memo-field">
            <span>Accredited investor status</span>
            <select name="accredited" required>${accredited}</select>
          </label>
          <label class="memo-field">
            <span>Preferred next step</span>
            <select name="nextStep" required>${nextSteps}</select>
          </label>
          <label class="memo-field">
            <span>Notes</span>
            <textarea name="notes" rows="3"></textarea>
          </label>
          <label class="memo-checkbox">
            <input type="checkbox" name="acknowledge" required />
            <span>${f.disclaimer}</span>
          </label>
          <div class="memo-cta-row memo-cta-row--stack">
            <button type="submit" class="memo-btn memo-btn--primary memo-btn--full" data-action="call">${f.primaryCta}</button>
            <button type="submit" class="memo-btn memo-btn--ghost memo-btn--full" data-action="walkthrough">${f.secondaryCta}</button>
          </div>
        </form>
      </div>
    </div>
  `;

  const form = document.getElementById("memo-invest-form");
  let submitAction = "call";

  form?.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      submitAction = btn.dataset.action;
    });
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject =
      submitAction === "walkthrough"
        ? "Walkthrough Request — The Grand Bedford Investment"
        : "Investor Call Request — The Grand Bedford Investment";
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Entity: ${data.get("entity") || "—"}`,
      `Intended amount: ${data.get("amount") || "—"}`,
      `Accredited: ${data.get("accredited")}`,
      `Next step: ${data.get("nextStep")}`,
      `Notes: ${data.get("notes") || "—"}`,
    ].join("\n");

    window.location.href = `mailto:${d.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function initStickyCta() {
  const bar = document.getElementById("memo-sticky-cta");
  if (!bar) return;
  bar.hidden = false;

  const hero = document.getElementById("hero");
  if (!hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      bar.classList.toggle("is-visible", !entry.isIntersecting);
    },
    { threshold: 0 },
  );
  observer.observe(hero);
}

function initFooterYear() {
  const year = document.getElementById("memo-year");
  if (year) year.textContent = new Date().getFullYear();
}

function initInvestorMemo() {
  renderHero();
  renderOffer();
  renderValuation();
  renderUseOfFunds();
  renderPhases();
  renderChannels();
  renderRoadmap();
  renderReturns();
  renderPeople();
  renderProof();
  renderRisk();
  renderInvestForm();
  initStickyCta();
  initFooterYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initInvestorMemo);
} else {
  initInvestorMemo();
}
