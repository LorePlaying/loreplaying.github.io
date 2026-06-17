document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");
    const body = document.body;

    if (!toggle) return;

    // Load saved theme
    const saved = localStorage.getItem("theme");

    if (saved === "light") {
        body.classList.add("light");
        toggle.textContent = "🌞";
    } else {
        toggle.textContent = "🌙";
    }

    toggle.addEventListener("click", () => {
        body.classList.toggle("light");

        const isLight = body.classList.contains("light");

        toggle.textContent = isLight ? "🌞" : "🌙";
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
});