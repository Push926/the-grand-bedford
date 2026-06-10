const AUTH_KEY = "tgb-investor-auth";
const PASSWORD_HASH =
  "cfa704bdadc565b21fd4fc0022902bdd37208b9bcae12cac618b33a1520fba62";

async function hashPassword(value) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

function showPortal() {
  const gate = document.getElementById("investor-gate");
  const portal = document.getElementById("investor-portal");

  if (gate) gate.hidden = true;
  if (portal) portal.hidden = false;
  document.body.classList.remove("memo-page--locked");

  import("./investors.js");
}

function initGate() {
  const form = document.getElementById("investor-gate-form");
  const error = document.getElementById("investor-gate-error");
  const input = document.getElementById("investor-gate-password");

  if (!form || !input) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const hash = await hashPassword(input.value);
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(AUTH_KEY, "1");
      if (error) error.hidden = true;
      showPortal();
      return;
    }

    if (error) error.hidden = false;
    input.value = "";
    input.focus();
  });
}

document.body.classList.add("memo-page--locked");

if (sessionStorage.getItem(AUTH_KEY) === "1") {
  showPortal();
} else {
  initGate();
}
