const toggleButton = document.getElementById("dark-mode-toggle") || document.getElementById("toggle-dark-mode-setting");
const body = document.body;

window.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("theme");
  if (mode === "dark") {
    body.classList.add("dark-mode");
  }
});

toggleButton?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
