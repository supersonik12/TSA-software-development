loadTheme();

if ('name' in localStorage) {

} else { 
    window.location.replace("index.htm");
}

function changeFont() {
    var font = document.getElementById("fontMenu").value;
    localStorage['font'] = font;
    loadTheme();
}

function loadTheme() {
    font = localStorage['font'];
    document.body.style.fontFamily = font;
    document.getElementById("nav").style.fontFamily = font;
    document.getElementById("fontMenu").style.fontFamily = font;
}

function toggleMenu() {
    if (document.getElementById("nav").style.display == "block") {
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("nav").style.display = "block";
    }
}