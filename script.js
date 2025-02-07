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



