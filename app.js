console.log("dear lord help me...")

//creating user input component 


function celebrityQuestion(){
    var promptQuestion = "Who is your favorite celebrity?";
    var response = prompt(promptQuestion);
    myMessage(response);
}

function myMessage(response){
    var alertMessage = "Well " + response  + " totally loves you!";

    if (response === "") 
        alertMessage = "Never heard of em...";

    alert(alertMessage)
}

celebrityQuestion();

// can't get this to fire.. need to ask during lab
function changeBackgroundColor(){

    if (response === " ") {
        color = "lightblue";
        }
    
    document.getElementById("main").style.backgroundColor = color;

    changeBackgroundColor();

 }


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

// creating greeting for the page 
var myDate = new Date ();
var hrNow = myDate.getHours();
var greeting; 

function timeGreetingMessage(greeting) {
    if (hrNow < 12) {
        greeting = "Good morning, here's the tea!";
    }   else if (hrNow >= 12 && hrNow <= 17) {
        greeting = "Hey girl, hey!"
    }   else if (hrNow >= 17 && hrNow <= 24) {
        greeting = "Girl, go to sleep!"
    }

    document.getElementById("web-greeting").innerHTML = greeting
}

timeGreetingMessage(greeting); 