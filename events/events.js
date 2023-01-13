// var clickDiv = document.getElementById("div1");
// var clickButton = clickDiv.getElementById("button");
// var color = clickElement.style.backgroundColor;

// function clickk () {
//     if (color === clickButton) {
//         clickElement.style.backgroundColor = unclick;
//     } else {
//         clickElement.style.backgroundColor = click;
//     };
// }

// clickk();

// var button = document.getElementById("button");
// button.addEventListener("click");

var divoviNode = document.querySelectorAll("div");
var div11 = divoviNode[0];
var div22 = divoviNode[1];

var buttons = document.querySelectorAll("button");
var button1 = buttons[0];
var button2 = buttons[1];


// button.onclick = function() {

//     divNode.style.backgroundColor = "darkblue";

// };

function clickMe () {
    div11.classList.toggle("nova-klasa");
};


button1.addEventListener("click", clickMe);

function clickMeAgain () {
    div11.classList.toggle("nova-klasa");
}

button2.addEventListener("click", clickMeAgain);





var textBox = document.getElementById("send-message");

var inputNode = document.querySelector("input");

var message = inputNode.textContent;

var button = document.querySelector("button");
























