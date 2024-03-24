var theme = document.getElementById("theme");
var font_button = document.getElementById("font_button");

theme.onclick = function(){
    document.body.classList.toggle("light_theme");
}
font_button.onclick = function(){
    document.body.classList.toggle("alt_font");
}
