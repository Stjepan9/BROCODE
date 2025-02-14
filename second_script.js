//           WHILE LOOPS

/*

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in");
    }
    else{
        console.log("Invalid credentials");
    }

}
    */


//           FOR LOOPS

 /*  
     for(let i  = 1; i <= 20; i++){
        if(i == 13){
            break;
        }
        else{
            console.log(i);
        }

    }
*/


//      NUMBER GUESSING GAME

/*
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()  * (maxNum - minNum + 1)) + minNum;


let attempts = 0;
let guess;
let running = true;

while(running == true){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);

    if(isNan(guess)){
        window.alert("Please enter a valid number");
    }
    else if( guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }

    running = false;
}
 */

//     FUNCTION

//   = a section of reusable code.
//    Declare code once and use it whenever you want

/*
function add(x,y){
    return x + y;
}

function substract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide (x,y){
    return x / y;
}

function isEven(number){
    
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function isValidEmail(email){

    if(email.includes("@")){
        return true;

    }
    else{
        return false;
    }
}
console.log(isValidEmail("Bro@fake.com"));

*/

// VARIABLE SCOPE

//    where a variable is recognoized ( local vs global)

/*
function2();

function function1(){
    let x = 1;
    console.log(x)
}

function function2(){
    let x = 2;
    console.log(x)
}
    */


//  TEMPERATURE CONVERSION PROGRAM

/*
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " Fahrenheit"
    }
    else if (toCelsius.checked){
        temp = Number(textBox.value)
        temp = (temp - 32 * 5 / 9)
        result.textContent = temp.toFixed(1) + " Celsius"
        
    }
    else{
        result.textContent = "Select a Unit";
    }

}
    */

//   ARRAY  
//        = a variable like structure that can hold more than 1 value

//let fruits = ["apple", "orange", "banana", "coconut"];

//fruit[3] = "coconut";

//fruit.push("cocunut");

//fruit.pop();
//fruit.unshift("mango");
//fruit.shift();




//console.log(fruit[0]);
//console.log(fruit[1]);
//console.log(fruit[2]);
//console.log(fruit[3]);

//t numOfFruit = fruit.length;
//let index = fruit.indexOf("mango");
//console.log(index);

//fruits.sort().reverse();

/*
for(let fruit of fruits){
    console.log(fruit);
}

*/

//   SPREAD OPERATOR

//  == ... allows an iterable such as an array or spring to be expanded into separate elements
//        (unpacks the elements)

/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum);
*/

//let username = "Bro Code";
//let letters = [...username].join("");

/*
let fruits = ["apple", "orange", "banana"];
let vegetables = ["Carrot", "Celery", "Potatoes"];


let foods  = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

*/

//     REST PARAMETERS  = (...rest) allow a function work with a variable nummber of arguments by bundling them into an array

//  spread = expands an array into separate elements
// rest = bundles separate elements into an array

/*
function openFridge(...foods){
    console.log(...foods);
}

function getFood (...foods){
    return foods;
}



const food1 = "pizaa";
const food2 = "hamburger";
const food3 = "hot dog";
const food4 = "sushi";
const food5 = "ramen";


//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);
*/

/*
function sum(...numbers){
    let result = 0;
    for( let number of numbers ){
        result += number;
    }
    return result;
}



function getAverage(...numbers){
    let result = 0;
    for( let number of numbers ){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(total);

*/

/*
function combineStrings(...string){
    return string.join(" ");
}


const fullName = combineStrings(" Mr.", "spongeBob", "Squarepants", "III");

console.log(fullName);

*/


// DICE ROLLER PROGRAM


/*
function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    
    const values = [];
    const images = [];

    for( let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="/dice_images/${value}.png">`);
    }

    diceResult.textContent = `dice : ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
}

*/

// RANDOM PASSWORD GENERATOR


/*
function generatePassword (lenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symboldChar = "!#$%&/()=?*~";


    let allowedChars = "";
    let password = "";


    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symboldChar : "";

    if(lenght <=0){
        return `(password lenght must be atlease 1)`;
    }

    return ``;

}

const passwordlenght = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordlenght, 
                                includeLowerCase, 
                                includeUpperCase, 
                                includeNumbers, 
                                includeSymbols);

console.log(`Generate password: ${password}`);

*/

// Callbacks

/*  = a function is passed as an argument to another function

used to handle asynchrounous operations:
             1. reading a file
             2. network requests
             3.Interacting with database
            
/7   Hey, when you are done, call this next.

*/

/*
Hello(wait); 

function Hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("wait");
}

function leave(){
    console.log("Leave");
}

function Goodbye(){
    console.log("Goodbye!");
}
    */
/*
sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}


function displayPage(result){
    document.getElementById("myH1").textContent = result;

}

*/

// forEach() = method used to iterate over the elements
//             of an array and apply a specified function(callback) to each element

//            array.forEach(callback)
/*

let numbers = [1, 2, 3, 4, 5];


numbers.forEach(triple);
numbers.forEach(display);

function double(element, index, array){
    array[index] =  element * 2;
}


function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}
    */

// map()   = accepts a callback and applies that function to each element of array, returns a new array

/*
const numbers = [1, 2 ,3 , 4, 5];


const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

*/

    /*
    const students = ["Spongebob", "Patrick", "Squidward"];

    const studentsUpper = students.map(upperCase);
    const studentsLower = students.map(lowerCase);
    console.log(studentsLower);

    function upperCase(element){
    return element.toUpperCase();
    }

    function lowerCase(element){
        return element.toLowerCase();
    }

    */


    /*
    const dates = ["2024-1-10", "2025-2-30", "2026-5-25"];
    const formattedDates = dates.map(formatDates);
    console.log(formattedDates);

    function formatDates(element){
        const parts = element.split("-");
        return `${parts[1]}/${parts[2]}/${parts[0]}}`
    }

    */
   
    // filter() = creates a new array by filtering out elements

    /*
    let numbers = [1, 2, 3, 4, 5, 6, 7];

    evenNumbs = numbers.filter(isEven);
    oddNumbs = numbers.filter(isOdd);
    console.log(oddNumbs);

    function isEven(element){
        return element % 2 === 0;
    }

    function isOdd(element){
        return element % 2 !== 0;
    }

    */

    /*
    const ages = [16, 17, 18, 18, 19, 20, 60];

    const adults = ages.filter(adult);
    const childer = ages.filter(isChild);
    console.log(childer);

    function adult(element){
        return element >= 18;
    }

    function isChild(element){
        return element < 18;
    }

    */

    /*

    function getShortWords(element){
        return element.length <= 6;

    }

    function getLongWords(element){
        return element.length >6;
    }

    */

    // .reduce() = reduce the elements of an array to a single value


    /*
    const prices = [5, 30, 10, 25, 15, 20];

    const total = prices.reduce(sum);

    console.log(`$${total.toFixed(2)}`);

    function sum(accumulator, element){
        return accumulator + element;
    }
        */

    /*
    const grades = [ 75, 50, 90, 80, 65, 95];

    const maximum = grades.reduce(getMax);
    const minimun = grades.reduce(getMinx);

    console.log(minimun);

    console.log(maximum);

    function getMax(accumulator, element){
        return Math.max(accumulator, element);
    }

    function getMinx(accumulator,element){
        return Math.min(accumulator, element);
    }
        */

    //function declaration = define a reusable block of code that performs a specific task


    //function expression = a way to define functions as values or variables

    /*
    const numbers = [1, 2, 3, 4, 5, 6];
    const squares = numbers.map(function (element){
        return Math.pow(element, 2);
    });

    const cubes = numbers.map(function(element){
        return Math.pow(element, 3);
    });

    const evenNumbs = numbers.filter(function(element){
        return element % 2 === 0;
    })

    const total = numbers.reduce(function(accumulator, element){
        return accumulator + element;
    })


    console.log(total);
*/  

    // function expressions = a way to define functions as values or variables

        // 1. Callbacks or asynchrounous operations
        // 2. Higher order functions
        // 3. Closures
        // 4. Event listeners


    // arrow functions = a consise way to write a function expresion
    //                   good for simple function that you use only once
    //                   (parameters) => some code

   // setTimeout(() => console.log("Hello") ,3000);

   /*
   const numbers = [1, 2, 3, 4, 5, 6];

   const squares = numbers.map((element) => Math.pow(element, 2));
   const cubes = numbers.map((element) => Math.pow(element, 3));
    const evenNumbs = numbers.filter((element) => element % 2 === 0 );
    const  total = numbers.reduce((accumulator, element) => accumulator + element);
        


   console.log(total);

   */

   // OBJECT = a collection of related properties and/or methods
   //           can represent rel world objects( people, products...)
   //           
   //           object = {key:value,function()}


  /*
   const person1 = {
        firstName: "Spongebob",
        lastName: "Squarepants",
        age: 30,
        isEmployed: true,
        sayHello: function(){console.log("Hi i am Spongebob")},
        eat: function(){console.log("I am eating a crabby patty")},
   }

   const person2 = {
        firstName: "Patrick",
        lastName: "Star", 
        age: 42,
        isEmployed: false,
        sayHello: () => console.log("Hi i am Patrick Star"),
        eat: function(){console.log("I am eating roast beef and chicken")},
   }
   



   console.log(person1.firstName);
   console.log(person1.lastName);
   console.log(person1.age);
   console.log(person1.isEmployed);

   console.log(person2.firstName);
   console.log(person2.lastName);
   console.log(person2.age);
   console.log(person2.isEmployed);

   person1.sayHello();
   person2.sayHello();


   person1.eat();
   person2.eat();

+/



 




