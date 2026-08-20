// alert("Welcome here");

// Accessing Specific Nodes

// 1.Finding an Element by ID
document.getElementById("ptag");
console.log(document.getElementById("ptag"));

// storing inside a variable
var anchorTag = document.getElementById("anchorTag");
console.log(anchorTag);

// 2.Finding an Element by TagName
// this is when you want to find a group of elements

var mylists = document.getElementsByTagName("li");
console.log(mylists);

var mylist2 = mylists[0];
console.log(mylist2);

// 3. Finding an Element by ClassName
var myFirstdiv = document.getElementsByClassName("myFirstdiv");
console.log(myFirstdiv);

// Navigating the DOM Tree

// Finding a Parent
var reg = document.getElementById("reg");

var regResult = reg.parentNode;

console.log(regResult);

var secParent = document.getElementById("secParent");
var secResult = secParent.parentNode;
console.log(secResult);

// Finding Children
var getChild = document.getElementById("getChild");
var getChildResult = getChild.children;
console.log(getChildResult);
var getFirstChildResult = getChild.firstElementChild;
var getLastChildResult = getChild.lastElementChild;

console.log(getFirstChildResult);
console.log(getLastChildResult);

// Finding Siblings
var nextsib = getFirstChildResult.nextElementSibling;
console.log(nextsib);

var previousSib = getLastChildResult.previousElementSibling;
console.log(previousSib);

// Interacting with Attributes

// Getting an Attribute
var imgattri = document.getElementById("imgattri");
var getattriresult = imgattri.getAttribute("src");
var getattrialtresult = imgattri.getAttribute("alt");

console.log(getattriresult);
console.log(getattrialtresult);

// Setting an Attribute

var setImg = document.getElementById("setImg");
console.log(setImg);

var imgResult = setImg.setAttribute("src", "../img/chef-3.webp");
// console.log(setImg);

var widthResult = setImg.setAttribute("width", "30%");

// Changing Styles,,,,, 3rd august 2026

var styleTag = document.getElementById("styleTag");
styleTag.style.color = "white";
styleTag.style.backgroundColor = "green";
styleTag.style.padding = "10px";
styleTag.style.fontFamily = "poppins";

// Creating and manipulating nodes

// Creating new nodes
// first lets create our p tag element

var newPtagElement = document.createElement("p");
console.log(newPtagElement);

// newPtagElement.innerHTML = "This is a new paragraph created using javascript";

// secondly,you create a text node

var newPtagText = document.createTextNode(
  "This is my first paragraph text node created using javascript",
);

newPtagElement.appendChild(newPtagText);

// now we need to append this new p tag to the body of our html document
document.body.appendChild(newPtagElement);

// creating unordered list using javascript
var ulElement = document.createElement("ul");
var liElement1 = document.createElement("li");
var liElement2 = document.createElement("li");

// create text nodes for the li elements
var liText1 = document.createTextNode("This is my first list item");
var liText2 = document.createTextNode("This is my second list item");

// lets append the text nodes to the li elements
liElement1.appendChild(liText1);
liElement2.appendChild(liText2);

// append the two li elements to the ul element

ulElement.appendChild(liElement1);
ulElement.appendChild(liElement2);

console.log(ulElement);

// append it to the body of our html document

ulElement.style.listStyleType = "none";
ulElement.style.display = "flex";
ulElement.style.gap = "20px";
ulElement.style.backgroundColor = "lightgray";
ulElement.style.padding = "20px";
document.body.appendChild(ulElement);

// Removing a HTML Element

var mySonAge = 20;

if (mySonAge >= 18) {
  document.body.removeChild(styleTag);
} else {
  document.body.removeChild(getChild);
}

// Replacing a HTML Element
var replaceElement = document.getElementById("replaceElement");
var newElement = document.createElement("h1");
var newElementText = document.createTextNode(
  "This is a new heading element that has replaced the paragraph element",
);
newElement.appendChild(newElementText);

// console.log(newElement);

document.body.replaceChild(newElement, replaceElement);

// replacing text only

var replaceText = document.getElementById("replaceText");
var newtext = document.createTextNode(
  "This is a new text node that has replaced the paragraph text node",
);
replaceText.replaceChild(newtext, replaceText.firstChild);

// JS EVENTS

// click
// keyup
// keydown
// mouseenter
// mouseleave
// dblclick

// 1. click event

var clickBtn = document.getElementById("clickBtn");
var clickeffect = document.getElementById("clickeffect");

clickBtn.addEventListener("click", function () {
  clickeffect.style.backgroundColor = "green";
  clickeffect.style.color = "white";
  clickeffect.style.padding = "10px";
  clickeffect.style.borderRadius = "10px";
});

// dblclick Event

var dblclickBtn = document.getElementById("dblclickBtn");

dblclickBtn.addEventListener("dblclick", function () {
  dblclickBtn.style.backgroundColor = "red";
  dblclickBtn.style.color = "white";
  dblclickBtn.style.padding = "5px 20px";
  dblclickBtn.style.borderRadius = "10px";
  dblclickBtn.style.border = "none";
  dblclickBtn.style.cursor = "pointer";
});

// mouseenter event

var mouseEnter = document.getElementById("mouseEnter");

function mouseEnterEvent() {
  mouseEnter.style.backgroundColor = "lightblue";
  mouseEnter.style.padding = "10px";
  mouseEnter.style.borderRadius = "10px";
  mouseEnter.style.margin = "10px";

  mouseEnter.addEventListener("mouseenter", function () {
    var userAge = prompt("Please enter your age");
    if (userAge >= 18) {
      // mouseEnter.innerHTML = "You are eligible to vote";
      alert("You are eligible to vote");
    } else {
      // mouseEnter.innerHTML = "You are not eligible to vote";
      alert("You are not eligible to vote");
    }
  });
}
// mouseEnterEvent();

// MOUSE LEAVE EVENT

var mouseLeaveBtn = document.getElementById("mouseLeaveBtn");

mouseLeaveBtn.addEventListener("mouseleave", function () {
  mouseLeaveBtn.style.backgroundColor = "orange";
  mouseLeaveBtn.style.color = "white";
  mouseLeaveBtn.style.padding = "10px";
  mouseLeaveBtn.style.borderRadius = "10px";
  mouseLeaveBtn.style.border = "none";

  for (var i = 1; i <= 12; i++) {
    console.log(`2 X ${i} = ${2 * i}`);
  }
});

// KEYDOWN EVENT

var keyDownInput = document.getElementById("keyDownInput");

keyDownInput.addEventListener("keydown", function (e) {
  // console.log(e.key);
  // console.log(e.keyCode);

  if (e.key === "Enter") {
    alert("You have pressed the Enter key");
  } else if (e.key === "Backspace") {
    alert("You have pressed the Backspace key");
  } else if (e.key === "Tab") {
    alert("You have pressed the Tab key");
  } else if (e.key === "f") {
    alert("You have pressed the F key");
  } else {
    alert("You have pressed a different key");
  }
});

// Keyup Event

var keyUpInput = document.getElementById("keyUpInput");

keyUpInput.addEventListener("keyup", function (e) {
  // console.log(e.key);
  // console.log(e.keyCode);

  if (e.key === "Enter") {
    alert("You have pressed the Enter key");
  } else if (e.key === "k") {
    alert("You have pressed the K key");
  } else if (e.key === "w") {
    alert("You have pressed the W key");
  } else if (e.key === "e") {
    alert("You have pressed the E key");
  } else {
    alert("You have pressed a different key");
  }
});

// Removing an event listener 10/8/2026

var divfunction = document.getElementById("divfunction");

function changestyle() {
  divfunction.style.backgroundColor = "lightgreen";
  divfunction.style.padding = "10px";
  divfunction.style.borderRadius = "10px";
  divfunction.style.color = "white";
  divfunction.style.fontFamily = "poppins";
  divfunction.style.fontSize = "20px";
  divfunction.style.textAlign = "center";
}
function mouseenterfun() {
  divfunction.style.backgroundColor = "orange";
}
function mouseleavefun() {
  divfunction.style.backgroundColor = "purple";
}

divfunction.addEventListener("click", changestyle);
divfunction.addEventListener("mouseenter", mouseenterfun);

divfunction.addEventListener("mouseleave", mouseleavefun);

divfunction.addEventListener("mouseleave", function removeEvent() {
  divfunction.removeEventListener("click", changestyle);
  // divfunction.removeEventListener("mouseenter", mouseenterfun);
  divfunction.removeEventListener("mouseleave", removeEvent);
});

// how to add/remove classlist
var classListAdd = document.getElementById("classListAdd");

classListAdd.addEventListener("click", function () {
  classListAdd.classList.add("myNewClass");
  classListAdd.classList.add("secondnewclass");
});

classListAdd.addEventListener("dblclick", function () {
  classListAdd.classList.remove("myNewClass");
  classListAdd.classList.remove("secondnewclass");
});

// applying toggle functionality on the toggle section
var togglebtn = document.getElementById("togglebtn");

togglebtn.addEventListener("click", function () {
  togglebtn.classList.toggle("toggleClass");
});

// building a basic countdwon timer


// validating a form with javascript

// How to create a simple calculator using javascript
