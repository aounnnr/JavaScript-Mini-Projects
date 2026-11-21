const body = document.body;
body.classList.add(localStorage.getItem("prefer") || "light");

document.querySelector("button").addEventListener("click", function () {
    const isDark = body.classList.toggle("dark");
    body.classList.toggle("light", !isDark);

    if (isDark) {
        localStorage.setItem("prefer", "dark");
    } else {
        localStorage.setItem("prefer", "light");
    }
});