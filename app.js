console.log("dear lord help me...")

//creating user input component 
function validateUserCelebLove() {
    var storedCelebResponse = "yes";
    var yesOrNo;
    do {
        yesOrNo = prompt("Do you love celebrities?");
        yesOrNo = yesOrNo.toLowerCase();
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

celebrityQuestion();


function bradPittRatingQ() {
    var bradPittRating = prompt("On a scale of 1 to 5, how hot is Brad Pitt?");
    for (var i = 0; i < bradPittRating; i++){
        document.write("<img src=\"images/brad_pitt_PNG1.png\">");
                    
    }

}

bradPittRatingQ();

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
// can't get this to fire.. need to ask during lab
// function changeBackgroundColor(response){
 //   var color;

 //   if (response !== "") {
 //       color = "lightblue";
 //       }
    
 //   document.getElementById("main").style.backgroundColor = color;
 //   }

 //   changeBackgroundColor(response);

    // creating greeting for the page 