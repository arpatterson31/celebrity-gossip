console.log("dear lord help me...")

//creating user input component 
function validateUserCelebLove() {
    var storedCelebResponse = "yes"

    var yesOrNo;
    do {
        yesOrNo = prompt("Do you love celebrities? yes or no?");
    }while(yesOrNo !== storedCelebResponse);

}

validateUserCelebLove();

function celebrityQuestion(){
    var promptQuestion = "Who is your favorite celebrity?";
    var response = prompt(promptQuestion);
    myMessage(response);

    return response;
}

function myMessage(response){
    var alertMessage = "Well " + response  + " totally loves you!";

    if (response === "") 
        alertMessage = "Never heard of em...";

    alert(alertMessage)
}

var response = celebrityQuestion();

// can't get this to fire.. need to ask during lab
function changeBackgroundColor(response){
    var color;

    if (response === "") {
        color = "lightblue";
        }
    
    document.getElementById("main").style.backgroundColor = color;
    }

    changeBackgroundColor(response);


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

//var numberOfSomething = prompt("How many Somethings would you like?")
//for (var i = 0; i < 10; i++) {
    // body of for loop
//    console.log(i);
//}

