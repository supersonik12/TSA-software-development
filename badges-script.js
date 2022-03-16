loadTheme();
function loadTheme() {
    font = localStorage['font'];
    document.body.style.fontFamily = font;
    document.getElementById("nav").style.fontFamily = font;
}

function toggleMenu() {
    if (document.getElementById("nav").style.display == "block") {
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("nav").style.display = "block";
    }
}