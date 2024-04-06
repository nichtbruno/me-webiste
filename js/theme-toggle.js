var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
    if (storedTheme === "dark") {
        toggle.classList.remove("fa-sun");
        toggle.classList.add("fa-moon");
     } else {
        toggle.classList.remove("fa-moon");
        toggle.classList.add("fa-sun");
     }
}

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    toggle.classList.remove("fa-moon");
    toggle.classList.add("fa-sun");

    if (currentTheme === "light") {
        targetTheme = "dark";
        toggle.classList.remove("fa-sun");
        toggle.classList.add("fa-moon");
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
};
