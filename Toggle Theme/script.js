let theme;
const body = document.querySelector("body");
let pref = localStorage.getItem("prefer");


document.querySelector("body").classList.add(pref || "light");


document.querySelector("button").addEventListener("click", function () {
    if (document.querySelector("body").classList.contains("light")) {
        body.classList.replace("light", "dark");
        theme = "dark";
    }
    else {
        body.classList.replace("dark", "light");
        theme = "light";
    }
    localStorage.setItem("prefer", theme);
});