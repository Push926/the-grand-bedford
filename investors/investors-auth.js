const AUTH_KEY = "tgb-investor-auth";
const PASSWORD_HASH =
  "81c2e4f71631321684f01d67f406210c93d27faf73e4bf11bdc602943d65eba0";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetPageScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

async function hashPassword(value) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

function dismissGate() {
  const gate = document.getElementById("investor-gate");
  if (gate) {
    gate.classList.add("is-dismissed");
    gate.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("memo-page--locked");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  resetPageScroll();
}

function showLoadError(message) {
  const main = document.querySelector(".memo-main");
  if (!main) return;
  main.innerHTML = `
    <div class="memo-wrap">
      <div class="memo-panel memo-load-error">
        <p>${message}</p>
        <button type="button" class="memo-btn memo-btn--primary" id="memo-reload-btn">Reload page</button>
      </div>
    </div>
  `;
  document.getElementById("memo-reload-btn")?.addEventListener("click", () => {
    location.reload();
  });
}

function loadPortal() {
  dismissGate();
  resetPageScroll();
  import("./investors.js?v=14").catch((err) => {
    console.error("Failed to load investor memo:", err);
    showLoadError(
      "Unable to load investor materials. Please refresh the page or try again in a moment.",
    );
  });
}

function initGate() {
  resetPageScroll();
  document.body.classList.add("memo-page--locked");
  document.body.style.position = "fixed";
  document.body.style.top = "0";
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";

  const form = document.getElementById("investor-gate-form");
  const error = document.getElementById("investor-gate-error");
  const input = document.getElementById("investor-gate-password");

  if (!form || !input) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const value = input.value.trim();
      const hash = await hashPassword(value);
      if (hash === PASSWORD_HASH) {
        sessionStorage.setItem(AUTH_KEY, "1");
        if (error) error.hidden = true;
        loadPortal();
        return;
      }
    } catch (err) {
      console.error("Password check failed:", err);
      if (error) {
        error.textContent =
          "Unable to verify password in this browser. Try refreshing the page.";
        error.hidden = false;
      }
      return;
    }

    if (error) {
      error.textContent = "Incorrect password. Please try again.";
      error.hidden = false;
    }
    input.value = "";
    input.focus();
  });
}

if (sessionStorage.getItem(AUTH_KEY) === "1") {
  loadPortal();
} else {
  initGate();
}
