if ('name' in localStorage) {
    //alert("hello " + window.localStorage.getItem('name'))
    var journal = JSON.parse(localStorage['journal']);
    var dates = JSON.parse(localStorage['dates']);
    var moods = JSON.parse(localStorage['moods']);
} else { 
    window.location.replace("index.htm");
}

for (var index = 0; index < journal.length; index++) {
    var entry = document.createElement("newEntry");
    entry.innerText = dates[index] + "\n" + journal[index] + "\nMood: " + moods[index] + "\n\n";
    document.body.appendChild(entry);
}

function toggleMenu() {
    if (document.getElementById("nav").style.display == "block") {
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("nav").style.display = "block";
    }
}