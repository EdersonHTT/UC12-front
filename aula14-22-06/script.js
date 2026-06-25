const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
}

function updateButtonText() {
  const isDark = root.getAttribute("data-theme") === "dark";

  themeToggle.textContent = isDark
    ? "Ativar tema claro"
    : "Ativar tema escuro";
}

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }

  updateButtonText();
});

updateButtonText();

const range = document.getElementById("hue-range");

if (range) {
  range.addEventListener("input", (event) => {
    document.documentElement.style.setProperty(
      "--hue",
      event.target.value
    );
  });
}