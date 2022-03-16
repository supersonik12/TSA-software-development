// SET HOME PAGE TEXT BASED ON DATE AND TIME
var d = new Date();

// Sets current date in MM/DD/YYYY format
var date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
document.getElementById("date").innerText = "Today's date is " + date;

// Greeting based on current time
var greeting = "\n";
if (d.getHours() < 12) {
    greeting = "\nGood morning!";
} else if (d.getHours() < 17) {
    greeting = "\nGood afternoon!";
} else if (d.getHours() < 21) {
    greeting = "\nGood evening!";
} else {
    greeting = "\nGood night!";
}
document.getElementById("greeting").innerText = greeting;

if ('name' in localStorage) {
    //alert("hello " + window.localStorage.getItem('name'))
    var journal = JSON.parse(localStorage['journal']);
    var dates = JSON.parse(localStorage['dates']);
    var moods = JSON.parse(localStorage['moods']);
} else {
    var username = prompt("What is your name?");
    window.localStorage.setItem('name', username);
    var journal = new Array();
    var dates = new Array();
    var moods = new Array();
    localStorage['font'] = "Coming Soon";
    localStorage['color'] = "#6d9eebff";
}
loadTheme();

var mood = "";

function setMood(color, currentMood) {
    document.body.style.backgroundColor = color;
    mood = currentMood;
}

function loadTheme() {
    font = localStorage['font'];
    document.body.style.fontFamily = font;
    document.getElementById("nav").style.fontFamily = font;
    document.getElementById("journalInput").style.fontFamily = font;
    document.getElementById("submit").style.fontFamily = font;
}

function toggleMenu() {
    if (document.getElementById("nav").style.display == "block") {
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("nav").style.display = "block";
    }
}

function saveToStorage() {
    if (mood == "") {
        alert("Please select a mood");
        return;
    }
    var entry = document.getElementById("journalInput").value;
    journal.push(entry);
    dates.push(date);
    moods.push(mood);
    //alert(journal);
    localStorage['journal'] = JSON.stringify(journal);
    localStorage['dates'] = JSON.stringify(dates);
    localStorage['moods'] = JSON.stringify(moods);
    reset();
}

function reset() {
    document.getElementById("journalInput").value = "";
    document.body.style.backgroundColor =  '#6d9eebff';
    mood = "";
}
