 

// function myFunction() {
//     var druga = document.documentElement.childNodes[1];
//     druga.classList.add("druga-lista");
//   }

//   druga.classList.add("druga-lista");

//   myFunction()


var druga = document.getElementById("dva");
druga.classList.add("druga-lista");

var lijevi = document.querySelectorAll("li");

function pozadina () {
    for (var i = 0; i < lijevi.length; i++) {
        lijevi[i].classList.add("li-background");
    }
}

pozadina();

var treca = document.querySelectorAll("ul")[2];
var trecaLi = treca.children;

function bojaTreca() {
    for (var i = 0; i < trecaLi.length; i++) {
        trecaLi[i].classList.add("treca-lista");
    }
}

bojaTreca();


// var parent = document.querySelector("div");
// var prvaNova = parent.children[0];
// var drugaNova = parent.children[1];

// var setActive = function() {
//     for (var i = 0; i < drugaNova.length; i++) {
//         if (drugaNova.children[i].classList.contains("active")) {
//             drugaNova.children[i].classList.remove("active");
//         }
//         prvaNova.children[1].classList.add("active");
//     }
// };

// setActive();

var parentEl = document.querySelector("div");
var firstList = parentEl.children[0];
var secondList = parentEl.children[1];
console.log(firstList);
var setActive = function () {
  for (var i = 0; i < secondList.children.length; i++) {
    if (secondList.children[i].classList.contains("active")) {
      secondList.children[i].classList.remove("active");
      break;
    }
    firstList.children[1].classList.add("active");
  }
};

setActive();





var listNav = document.querySelector("ul").children;
var text = function (el) {
    alert(el.textContent);
};


var changeText = function (string) {
    listNav[2].textContent = string;
};




//innerHTML


function createDropdown () {
  var divReplace = document.querySelector('div').innerHTML = "<select name = 'drop' id='drop1'><option value='option 1'>1st option</option><option value='option 2'>2nd option</option><option value='option 3 '>3rd option</option><option value = 'option 4'>4th option</option></select>";    
}

createDropdown()

//DOM manipulation

function createDropdown2 (arr) {
  var selectNode = document.createElement("select");
  var divNode = document.getElementById("wrapper");

  console.log(divNode);
  
  selectNode.setAttribute("id", "drop");

  for(var i = 0; i < arr.length; i++) {
    var optionNode = document.createElement("option");
    optionNode.textContent = arr[i];
    selectNode.appendChild(optionNode);
  }
  
  divNode.appendChild(selectNode);

};

createDropdown2(["5", "6", "7", "8"]);



//Atributes



function createForm(f){
    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].hasAttribute("required") && inputs[i].   value.length === 0){
          inputs[i].classList.add("borderColor");
        } else {
          inputs[i].classList.remove("borderColor")
        }
    }
  return inputs;
}



