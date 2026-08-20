// alert("Welcome to our website!");

// JS DISPLAY POSSIBILITIES
// ---------------------------------

// This is the way to display a message in the in console of the browser
console.log("Welcome to our website!");

// This is the way to display a message in the browser window usig alert

// alert("Welcome to Iswipe");

// This is the way to display a message in the browser window using document.write
document.write("This is Iswipe Website");
document.write('<h2 style="color:red;">Welcome to Cohort 3B</h2>');

// JavaScript Data Types
// -----------------------------------------

// string = "This is a string";
// number = 100;
// boolean = true;
// floating point number = 10.4

// JS VARIABLE DECLARATION
// -------------------------------------------
var firstName = "Peter";
var lastName = "Uche";
var email = "kanuchisom@gmail.com";
var age = 20;

document.write(email);
// alert(age);
// alert(firstName);

// Variable Scope in JS
// ------------------------------

// Global scope variable

var fname = "Chioma";
console.log(fname);

// Local scope  variable

function myFunction() {
  var myAge = 33;
  console.log(myAge);
}

myFunction();

// JavaScript Operators
// ---------------------------

// 1. Arithmetic Operators

var age1 = 30;
var age2 = 23;
var age3 = 11;

// var myResult = age1 + age3;

// document.write(myResult);
// console.log(myResult);

console.log(age1 + age3);

// 2. Subtraction

var subResult = age2 - age1;
console.log(subResult);

// 3.Multiplication

var multResult = age1 * 2;
console.log(multResult);

// 4.Division

var divResult = age3 / age2;
console.log(divResult);

// 5.Modulus

var mod1 = 5;
var mod2 = 2;

console.log(mod1 % mod2);

// 6.Increment
var num1 = 22;
num1++;
console.log(num1);

// 7.decrement
var num2 = 51;
num2--;
console.log(num2);

// Comparison Operators
// ---------------------

var graceAge = 20;
var emekaAge = 32;
var peterAge = 20;
var sonAge = 31.3;
var kosiAge = "20";
var amakaAge = "23";

//1. equal
var firstResult = graceAge == emekaAge;
console.log(firstResult);
console.log(graceAge == kosiAge);

console.log(typeof firstResult);
console.log(typeof kosiAge);

// 2.Identical
console.log(graceAge === peterAge);
console.log(graceAge === kosiAge);

// 3. Not equal !=

console.log(sonAge != peterAge);
console.log(graceAge != kosiAge);

// 4 Not identical (!==)

console.log(sonAge !== peterAge);
console.log(graceAge !== kosiAge);

// 5. Greater than
var myNum1 = 66;
var myNum2 = 12;
var myNum3 = 33;
var myNum4 = 33;
var myNum5 = "12";

console.log(myNum1 > myNum2);
console.log(myNum1 > myNum5);

// 6. Less than

console.log(myNum3 < myNum2);

// 7.  Greater than or equal to

console.log(myNum3 >= myNum2);
console.log(myNum3 >= myNum4);
console.log(myNum2 >= myNum1);

// 8.  Less than or equal to

console.log(myNum3 <= myNum2);
console.log(myNum3 <= myNum4);
console.log(myNum2 <= myNum1);

// Logical Operators
// ----------------------

// 1. Logical   and (&&)
// For && to be true, both condition must be true

// T && T = T
// T && F = F
// F && T = F
// F && F = F
var num1 = 20;
var num2 = 33;
var num3 = 20;
var num4 = "33";
var num5 = 12;

var result1 = num3 === num4;
var result2 = num1 == num3;
var result3 = num2 < num3;
var result4 = num5 <= num4;

console.log(result1 && result2);

console.log(result1 && result3);

//  Logical or (||)
// -------------
// for || to be true, one of the condition must be true

// T || T = T
// T || F = T
// F || T = T
// F || F = F

console.log(result1 || result4);
console.log(result1 || result3);

//  Logical not (!)

console.log(!result1 || !result4);
console.log(!result1 || !result3);

// Assignment Operators
// -----------------------------

// Simple Assignment(=)
var num1 = 20;
console.log(num1);

//  Add and assignment(+=)

var a = 20;
var b = 15;

a += b;

console.log(a);

// example

var accountBal = 0;
var firstDeposit = 200;
var acctName = "Sunday";

accountBal += firstDeposit;

console.log(
  `Hello ${acctName} we received your first deposit of ${firstDeposit} your account balance is #${accountBal}`,
);

var secondDepo = 300;

accountBal += secondDepo;
console.log(accountBal);

// Subtract and assignment  (-=)
var firstWithdrawal = 100;

accountBal -= firstWithdrawal;

console.log(
  `hello ${acctName} you just made a withdrawal of ${firstWithdrawal} and your account balance is ${accountBal} `,
);

//  Multiply and assignment (*=)
var double = 2;

accountBal *= double;

console.log(accountBal);

// Divide and assignment (/=)
var div = 2;
accountBal /= div;

console.log(accountBal);

// Modulus and assignment (%=)

var modu = 3;

accountBal %= modu;

console.log(accountBal);

// Conditional Operators (?)
// --------------
var emyAge = 25;
var kosiAge = 50;

emyAge >= kosiAge
  ? console.log("Emy is the senior")
  : console.log("Kosi is the snr");

// var iswipeUsername = "Kosi";
// var typedusername = prompt("Please enter your username");

// iswipeUsername === typedusername
//   ? alert(`Valid ✅.Welcome to Iswipe, your userame is ${iswipeUsername} !!!`)
//   : alert(
//       `Sorry ! 😢 the username ${typedusername} you typed is incorrect and not in our system.`,
//     );

// CONDITIONAL STATEMENT
// .......................................
// syntax
// if(condition to be met){
//   block of code
// }elseif(condition to be met){
//   block of code
// }else{
//   block of code
// }

var a = 20;
var b = 23;
var c = 100;
var d = 13;

// if condition
if (a >= c) {
  console.log("Correct");
} else {
  console.log("Sorry the answer wrong");
}
// else if
if (a == c) {
  console.log("A is winning");
} else if (c <= d) {
  console.log("C is winning");
} else if (b != d) {
  console.log("B is winning");
} else {
  console.log("Nobody won!!");
}

// example with tfare
// var typedtfare = prompt("How much do you have");
// var tfareprice = 500;

// if (typedtfare == tfareprice && typedtfare < 500) {
//   console.log(`The amount ${typedtfare} is not up to the tfare`);
// } else if (typedtfare < tfareprice || tfareprice > 600) {
//   console.log(
//     `The amount ${typedtfare} is less than tfare price of ${tfareprice}`,
//   );
// } else if (typedtfare >= tfareprice && typedtfare == 500) {
//   console.log(`Congrats! you have the required tfare price of ${tfareprice}`);
// } else {
//   console.log("No condition met");
// }

// switch conditional statement

// syntax

// switch(expression){
//   case n:
//   block of code
//   break;
//   case n:
//   block of code
//   break;
//   default
//   block of code ;
// }

var myAge = 50;

switch (myAge) {
  case 10:
    console.log("You are not up to age");
    break;
  case 50:
    console.log("You can enter, you are an adult");
    break;
  default:
    console.log("No condition met");
}

// JavaScript Functions 20th july 2026

// A function is a group of reusable code which can be called anywhere in your
// program.

// how to create a function

// USING FUNCTION KEYWORD

// Anytime you create a function, you MUST call back the function before it will be activated

function myFirstFunction() {
  var b = 20;
  var a = 2;
  var result = b * a;
  console.log(result);
}
myFirstFunction();

function clockIn() {
  var greetmorning = "Good Morning";
  var greetafternoon = "Good afternoon";
  var greetnight = "Good Evening";
  var username = prompt("What is your username?");
  var typedTime = prompt("What time did you come in?");

  if (typedTime <= 11 && greetmorning == "Good Morning") {
    console.log(
      `Good Morning ${username} !! You are welcome to ISwipe. Your Clock in time is ${typedTime}! `,
    );
  } else if (
    typedTime >= 12 &&
    typedTime < 16 &&
    greetafternoon == "Good afternoon"
  ) {
    console.log(
      `Good afternoon ${username} !! You are welcome to ISwipe. Your Clock in time is ${typedTime}! `,
    );
  } else if (
    typedTime >= 16 &&
    typedTime <= 24 &&
    greetnight == "Good Evening"
  ) {
    console.log(
      `Good Evening ${username} !! You are welcome to ISwipe. Your Clock in time is ${typedTime}! `,
    );
  } else {
    console.log(
      `Hello ${username} !! Please you typed ${typedTime} which is a wrong time format! `,
    );
  }
}

// clockIn();

// function with parameters

function welcomeFunction(username, password) {
  console.log(
    `Hello ${username}, welcome to our website, your password is ${password}`,
  );
}

// var myUsername = prompt("What is your username?");

// welcomeFunction(myUsername, "1234");

// RETURN FUNCTION 23rd july 2026

function averageCal(num1, num2, num3) {
  var resultcal = num1 + num2 + num3 / 3;
  return resultcal;
}

var callAverageCal = averageCal(20, 10, 10);

console.log(callAverageCal);

// Arrow function
// syntax
// const workeruser = () => {
//   block of code
// }

const welcomeUser = (username2, password2) => {
  var welcomemessage = `Hello ${username2} Your password is ${password2}`;
  return welcomemessage;
};

// var workeruser = "Iswipe";
// var workeruser = prompt("What is your username?");
// var workerpass = "12345";
// var workerpass = prompt("What is your password?");

// console.log(welcomeUser(workeruser, workerpass));

// CLASSWORK

// Build a function that takes in 3 subject scores and returns the average score and the grade of the student. The grading system is as follows:
// Average Score Grade
// 70 - > 100  A
// 60 - 69 B
// 50 - 59 C
// 40 - 49 D
// 0 - 39 F
// Use consitional statement to also check if the student passed or failed. A student is considered to have passed if they score 40 and above, and failed if they score below 40.

function averageScore(engscore, mathscore, civicscore) {
  var subAverage = engscore + mathscore + civicscore / 3;
  return subAverage;
}

var englishScore = 30;
var mathsScore = 10;
var civScore = 30;
var studentName = "Iswipe";

// call the function and add it inside a variable
var calResult = averageScore(englishScore, mathsScore, civScore);

// console the variable that you added the function inside
console.log(calResult);

// part 2
if (calResult >= 70) {
  console.log(
    `Congratulation ${studentName} you scored ${calResult} and your grade is A`,
  );
} else if (calResult >= 60 && calResult <= 69) {
  console.log(
    `Congratulation ${studentName} you scored ${calResult} and your grade is B`,
  );
} else if (calResult >= 50 && calResult <= 59) {
  console.log(
    `Congratulation ${studentName} you scored ${calResult} and your grade is c`,
  );
} else if (calResult >= 40 && calResult <= 49) {
  console.log(
    `Congratulation ${studentName} you scored ${calResult} and your grade is D`,
  );
} else if (calResult < 40 && calResult >= 0) {
  console.log(
    `Congratulation ${studentName} you scored ${calResult} and your grade is F`,
  );
} else {
  console.log(
    `Sorry ${studentName} you scored ${calResult} and your grade is invalid`,
  );
}

// variable Redeclaration and reassignment

// When using VAR to declare a variable, you can redeclare and re-assign the value of that variable,,,,,,, But when using LET to delclare a variable, you can re-assign but you can't re-declare....... while when using CONST, you can't re-declare or re-assign.

var num1 = 200;
console.log(num1);

// redeclaration

var num1 = 10;

console.log(num1);

var num1 = 15;

// reassign

var num2 = 16;
num2 = 20;

console.log(num2);

// let redeclaration
let name = "Peter";
// let name = "John";  (XXXXXXX this will give us error because with let you can't redeclare)

// let reassign
name = "John";
console.log(name);

// const redeclaration

// const age = 20;
// const age = 25;(XXXXXXX this will give us error because with const you can't redeclare)

// const reassignment

const myage = 15;
// myage = 20;
// console.log(myage); (XXXXXXX this will give us error because with const you can't reassigna)

// ways to name your variable 24th july 2026
// 1. camel
let myFatherSurname = "Kanusblog";
myFatherSurname = "Nwafor";

// 2. Pascal case
var MyCarList = "Camry, Volvo, Benz";

// 3 snake case
let my_full_name = "Nwankwo Peter";

// JavaScript Arrays
// An array is a special variable, which can hold more than one value at a time. In array we use index number to access any item/value in the array.

// In array the first value is stored at index 0, the second value is stored at index 1, and so on.

// How to create an arrays ,,,,,,, there are two ways to create an array,,,,

// 1. Using array literal

var foodItems = ["Rice", "Beans", "Yam", "Spag", "Onions"];
console.log(foodItems);
// console.log(typeof foodItems);

// accessing a data inside an Array. We use the index number of that data
console.log(foodItems[2]);

// array can also accomdate different data types

var allDataTypes = ["Iswipe", 20, "Peace", 20.4, true, false];
console.log(allDataTypes);
console.log(allDataTypes[1]);

var resultArray = allDataTypes[1];
// console.log(resultArray);

if (resultArray >= 10) {
  console.log("Welcome to the class");
} else {
  console.log("You are not qualified");
}
var resultArray2 = allDataTypes[4];
// console.log(resultArray);

if (resultArray2 == false) {
  console.log("This is true");
} else {
  console.log("You are not qualified");
}

// buildig  a small program using array lenght

if (allDataTypes.length > 4) {
  console.log("Congratulation, you made it");
} else {
  console.log("Sorry, you didn't make it");
}

// reassigning value in an array

var carArray = ["benz", "Toyato", 20, true, "Volvo"];

carArray[2] = "Lambo";
console.log(carArray);

// 2. DECLARING AN ARRAY USING ARRAY CONSTRUCTOR
var nameArray = new Array("Peace", "Nwafor", "Stephen", 20, true);

nameArray[2] = "Peter";
console.log(nameArray);
console.log(nameArray.length);

// ARRAY METHODS

// 1. push method
// This is used to add an element at the end of an array

var arrayMethod = ["Great", 20, "Buike", true, false];

arrayMethod.push("Kanusblog");

console.log(arrayMethod);

// 2. pop method
// pop is used to remove an element at the end of an array
arrayMethod.pop();
console.log(arrayMethod);

// 3. unshift method
// this is used to add an element at the beginning of the array
arrayMethod.unshift(false);
console.log(arrayMethod);

// 4. shift method
// this is used to remove the first element from an array
arrayMethod.shift();
console.log(arrayMethod);

// 5. indexOf method
// this is is used to get the index number of an element in an array

var indexofresult = arrayMethod.indexOf("Buike");
console.log(indexofresult);

if (arrayMethod.indexOf(false) >= 5) {
  console.log("This is good");
} else {
  console.log("This is bad");
}

// JAVASCRIPT LOOP

// Loops can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value

// 1. for loop
// syntax
// for(initialization; condition; increment/decrement){
// code block
// }

for (var i = 0; i < 5; i++) {
  console.log(`This is ${i}`);
}

for (var a = 1; a <= 12; a++) {
  var threemult = 3 * a;
  console.log(`3 X ${a} = ${threemult}`);
}

var loopArray = ["Peter", "John", "Jane", "Ngozi", "Chisom", "Peace", "James"];

for (var i = 0; i <= loopArray.length; i++) {
  console.log(`This is ${i} loop`);
}

// 2. WHILE LOOP
// syntax

// while(condition){
// code block
// increment/decrement
// }

let stuAge = 2;
while (stuAge <= 10) {
  console.log(`My age is ${stuAge}`);
  stuAge++;
}

// decrement

let carAge = 20;

while (carAge >= 5) {
  console.log(`Car age is = ${carAge}`);
  carAge--;
}

// building a pay day system using while loop

var startwork = 1;
var payDay = 27;
var payAmount = 5000;

while (startwork <= 31) {
  if (startwork < payDay) {
    console.log(`Today is ${startwork}, you are due for payment`);
  } else if (startwork == payDay) {
    console.log(
      `Congratulations!! we have paid your ${payAmount} salary into your account`,
    );
  } else {
    console.log(
      `Sorry we have paid your salary on ${payDay}. Wait for next month`,
    );
  }
  startwork++;
}

// 3. DO WHILE LOOP
// syntax
// do{
// code block
// increment/decrement
// }while(condition)

var bday = 30;
var startbday = 1;
var bdboi = "Buike";

do {
  if (startbday == bday) {
    console.log(
      `Congratulation ${bdboi} today is ${bday} which is your birthday`,
    );
  } else {
    console.log("Not your birthday");
  }

  startbday++;
} while (startbday <= 31);

// JAVASCRIPT OBJECT
// javascript objects are used to store multiple values in a single variable. An object can hold many values under a single name(variable), and you can access the values by referring to the key name.

// how to create an object
// 1. using object literal

const personalDetails = {
  name: "Kanusblog",
  age: 12,
  color: "dark",
  female: false,
  height: 10.3,
};

console.log(personalDetails);

// acccessing a particular value using key name

console.log(personalDetails.age);
var getAge = personalDetails.age;
console.log(personalDetails.female);

if (getAge > 20) {
  console.log("True");
} else {
  console.log("False");
}

// assigning another value to a key name

personalDetails.age = 15;
personalDetails.name = "Joy";
personalDetails.female = true;
console.log(personalDetails);

// adding new key and value pair to an object

personalDetails.country = "Nigeria";
console.log(personalDetails);

// deleting a key and value pair from an object

delete personalDetails.country;

console.log(personalDetails);

console.log(typeof personalDetails);
