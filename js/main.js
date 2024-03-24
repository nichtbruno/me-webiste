var theme = document.getElementById("theme");
let dark_theme = true;
let actual_theme = getCookie("theme");
if (actual_theme === "light_theme") {
    document.body.classList.add("light_theme");
    dark_theme = false;
}

theme.onclick = function(){
    document.body.classList.toggle("light_theme");
    if (dark_theme) {
        dark_theme = false;
        setCookie("theme", "light_theme");
    } else {
        dark_theme = true;
        setCookie("theme", "dark_theme");
    }
}

var font_button = document.getElementById("font_button");
let alt_font = false;
let actual_font = getCookie("web_font");
if (actual_font === "Mono") {
    document.body.classList.add("alt_font");
    alt_font = true;
}

font_button.onclick = function(){
    document.body.classList.toggle("alt_font");
    if (alt_font) {
        alt_font = false;
        setCookie("web_font", "Pixel");
    } else {
        alt_font = true;
        setCookie("web_font", "Mono");
    }
}
