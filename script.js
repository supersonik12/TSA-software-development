// SET HOME PAGE TEXT BASED ON DATE AND TIME
var d = new Date();

// Sets current date in MM/DD/YYYY format
document.getElementById("date").innerText = "Today's date is " + (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();

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

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleMenu() {
    if (document.getElementById("nav").style.display == "block") {
        document.getElementById("nav").style.display = "none";
    } else {
        document.getElementById("nav").style.display = "block";
    }
}