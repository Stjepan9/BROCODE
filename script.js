//VARIABLES

// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1.declaration let x;
// 2.assignment x = 100;

/*
let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
*/

/*let firstName = "Stjepan";
let favoriteFood = "Burgers";
let email = "Bro@gmail.com";


console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);
*/

//BOOLEANS

/*let online = false;
let forSale = true;
let isStudent = true;

console.log(`IS bro online: ${online}`);
console.log(`IS this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
*/


/*let fullName ="Stjepan";
let age = 24;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
*/

//ARITHMETIC OPERATORS
/*
            = operands( values, variables, etc..)
            =operators(+,-,*,/)
            example: 11 = x + 5
*/

//let students = 30;

//students = students + 1;
//students = students * 2;
//students = students / 2;
//students= students ** 2;
//students = students % 2;


//augmente assigned operators

//students += 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %=2;


//increment/decrement

//students ++;
//students --;
//console.log(students);

/*
    operator precedence
    1.Parenthesis()
    2. exponents 
    3. multiplication & division & modulo
    4. addition & subtraction
*/

//let result = 1+ 2 * 3 + 4 ** 2;
//console.log(result);


//USER INPUT

/*let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
*/

//const = a variable that cant be changed

/*const PI = 3.14159
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
*/

//COUNTER PROGRAM

/*const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;


increaseBtn.onclick = function(){
    count ++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
*/

//math 
// = built in object that provides a collection of properties and methods

//let x = 3;
//let y = 2;
//let z = 1;

//z = Math.round(x); rounds a number
//z = Math.floor(x); rounds down
//z = Math.ceil(x)   rounds up
//z = Math.trunc(x);  eliminates decimals
// z = Math.pow(x,y); on power of ...
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x); absolute value
// z = Math.sign(x);
//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);
//console.log(min);


// RANDOM NUMBER GENERATOR

/*const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max-min)) + min;
console.log(randomNum);
*/

/*const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}
*/

// IF STATEMENTS

// if a condition is true , execute code
// if not , do something else



/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age=Number(age);


    if (age >=100){
        resultElement.textContent = `You are  TOO OLD to enter this site`
    }
    else if (age == 0){
        resultElement.textContent = `You cant enter you were just born`
    }
    else if (age >= 18){
        resultElement.textContent = `you are old engouh to enter this site`
    }
    else if(age<0){
        resultElement.textContent = `Your age cant be below 0`
    }
    else if (age >=100){
        resultElement.textContent = `You are  TOO OLD to enter this site`
    }
    else{
         resultElement.textContent = `You must be 18+ to enter this site`
    }
}
*/

// CHECKED = property that determines te checked state of an HTML Checkbox or radio button element

/*const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");

const mySubmit = document.getElementById("mySubmit");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

    mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are NOT subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent =`You are paying with VISA`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = ` You are paying with MASTERCARD`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PAYPAL`;
    }
    else{
        paymentResult.textContent = ` YOu must select a payment type`;
    }
    }
    */

 // TERNARY OPERATOR
    //    = a shortcut to if{} and else {} statements
    //     helps to assign a variable based on a condititon
    //     condition? codeIfTrue : codeIfFalse;

    //let age = 21;
    //let message = age >= 18 ? "You are an adult" : "You are an minor" ;
    //console.log(message);

    //let time = 16;
    //let greeting = time < 12 ? "Good morning" : "Good afternoon";
    //console.log(greeting);

    //let purchaseAmount = 125;
    //let discount = purchaseAmount >= 100 ? 10 : 0;
    //console.log(`your total is ${purchaseAmount - purchaseAmount *(discount/100)}`);
    
    // SWITCH

    /*let testScore = 85;
    let letterGrade;

    switch(true){
        case testScore >= 90:
            letterGrade = "A";
            break;
        case testScore >= 80:
            letterGrade = "B";
            break;
    }


    console.log(letterGrade);
    */

//  STRING SLICING = creating a substring from a portion of another string
//                 string.slice(start,end)

//const fullName = "Bro Code";

//let firstName = fullName.slice(0,3);
//let lastName = fullName.slice(4,8);

//let firstChar = fullName.slice(0,1);
//let lastChar = fullName.slice(-4);

//let firstName = fullName.slice(0,fullName.indexOf(" "));
//let lastName = fullName.slice(fullName.indexOf(" ") + 1);

 //console.log(firstName);
 //console.log(lastName);

/*
const email = "Bro1@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);
*/

//    METHOD CHAINING

//    = calling one method after another in one continous line of code

//let username = window.prompt("ENTER YOUR USERNAME ")
// ---------NO METHOD CHAINING---------

// --------- METHOD CHAINIG -----------

//username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

//console.log(username);


// LOGICAL OPERATORS

// AND == &&
// OR == ||
// NOT == !

/*const isSunny = true;

if(!isSunny){
    console.log("it is cloudy");
}
else{
    console.log("it is sunny");
}

*/


// assignment operator =
// comparison operator == ( if values are equal)
// strict equality operator === ( comapre if values and datatype are equal)
// inequality operator !=
// strict inequality operator !==

/*
const PI = "3.14";

if(PI != "3.14"){
    console.log("that is NOT PI");
}
else{
    console.log("That is  PI");
}
    */

//     WHILE LOOp = repeat some code WHILE some condition is true


/*let username = "";

while(username === "" || username == null){
    username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`);
*/






