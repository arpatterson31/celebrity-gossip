console.log("dear lord help me...")

//creating user input component 
var promptQuestion = "Who is your favorite celebrity?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;
alertMessage = "Well " + response  + " totally loves you!";

if (response === "") {
    alertMessage = "Never heard of em...";
}

alert(alertMessage);


//creating new variables for the mouseover and out effect for the home button in the nav
var mouseOver
var mouseOut

document.getElementById("home").addEventListener("mouseover", mouseOver);
document.getElementById("home").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("home").style.color = "purple";
}
function mouseOut() {
    document.getElementById("home").style.color = "black";
}




