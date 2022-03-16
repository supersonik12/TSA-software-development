if ('journal' in localStorage) {
    //alert("hello " + window.localStorage.getItem('name'))
    var journal = JSON.parse(localStorage['journal']);
    var dates = JSON.parse(localStorage['dates']);
    var moods = JSON.parse(localStorage['moods']);
} else { 
    window.location.replace("index.htm");
}
loadTheme();

for (var index = journal.length-1; index >= 0; index--) {
    var entry = document.createElement("newEntry");
    entry.innerText = dates[index] + "\n" + journal[index] + "\nMood: " + moods[index] + "\n\n";
    document.body.appendChild(entry);
}

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