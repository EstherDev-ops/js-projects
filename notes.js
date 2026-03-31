//let- is a js keyword used to declare a variable which value can change later.
//Block Scope: Is declared using let or const and has curly braces {}. where the variable is only accessible within the block scope.
//variable shadowing- is when a variable is declare inside the block scope using the same name as the outer scope. JS read the closest values to where it runs;

//constants- is a js keyword that create an immutable variable. whose value cannot be reassigned or redeclared. it is also a block scope variable.
/*let number = 10;
if(true){
   number = 20;
}
console.log(number);// 20
 var number;
 number = 10;
 console.log(number);
 var number;
 number = 10;
 console.log(number);
 */

//Hoisting- var gets moved to the top of the scope and initialized with undefined. example:

/*var number; // declaration moves  top TOP
 number = 10; //assingment or initialization stays in place
 console.log(number); //output: 10
 */

 //Data types- Are different types ofvalues, that can be stored and manipulated by programming languages.

 //Numbers- used to represent numeric values, used to store integers and floating points.
//primititve types- Are stored by values in the stack memory, examples: numbers, boolean, strings, null, undefined, symbols, BigInt. are immutable, meaning their value can only br changed by creating a new value and assigning it to the variable that holds the primitive value.

//reference types- Are stored by pointers/address, located in heap memory. are mutables, meaning their values can be change with out creating a new variable, if the point the same memorylocation: arrays, objects, functions.

/*let a = 10;
let b = a;
b = 20;
b=30;

console.log(a);
console.log(b);*/

/*let a = {name: "Esther"};
let b = a;
b.name = "Maina";

console.log(a.name);
console.log(b.name);*/

//Why do JS made objects work by reference instead of copying just like primitive types? This would result to memory wastage, slow peerfomance and also costy. Due to that objects can be huge and copying each everytime you pass it somewhere would result to memory inefficency.

/*let a = 10;
let b = a;
b = 15;

console.log(a);
console.log(b);*/

//In javascript additional operators has two functionality: Arithmetic and concantenation.
//if it is used with strings either side it performs concantenation(joining the strings).This called Type Coercion- where js automatically converts one data type to another. 
//if used with numbers it performs arithmetic expression. 
//NOTE: The rest of the operators performs aritmethic operation, even if used with strings, they will be coerced into numbers, if possible.
//Example:
/*console.log("5" + 3);//53
console.log("5"  - 3);//2
console.log("5" * 3);//15
console.log("5 " / 3);//1.6666666666666667*/

//TYPE COERCION- is the process of converting one data type to another either implicitly or expilcitly. 
//implicit- js converts automatically.
//explicit- we manually converts the types uing built in functions: String(), Number(), Boolean() or even parseInt(), parseFloat for numbers.
 /*let x ="5.7";
console.log(Number(x));
console.log(parseInt(x));
console.log(parseFloat(x));
*/

//Difference between Number() and parseFloat();

/*console.log(Number("5.7abc"));
console.log(parseFloat("5.7abc"));*/

//Number()- it will run but our output will be Nan, which in our case it won't be our prefered output.
//parseFloat- reads values from left to right, if it hits a non-number value it stops, and prints out, the number read.

/*let number = "5.7abc";
console.log(parseFloat(number));
console.log(Number(number))*/

//typeof Operator: Used to show they type of the values.

/*console.log(typeof "Esther");//string
console.log(typeof 42);//number
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object*/

/*let a;
let b = null;
console.log(a)//undefined
console.log(b);//null
*/
//in the code above: undefined will be output in the first line of the code, since we haven't assign any value to the variable, so JavaScript automatically passes(assigns) the undefined value to the variable.
//null will be the output, even though in simple English we know that null is nothing. but here we tells JavaScript, that we are intentionally using null, as we wait for the real data to arrives, but remember that null, is a primitive data type.
//NOTE: typeof null returns "object" which is a known JavaScript bug since 1995.
//null is NOT an object, it is a primitive. Always use === null to check for null explicitly.
//Example: if(value === null) not if(typeof value === "object")

//operator: Are symbols used to perform operations on operands(values).
//Operands- are values that operators does operations on. 
// 5 + 3; (5, 3, these are operands). '+' it is the operators.
//1.Arithmetic Operators- used to perform arithmetic operationss(+, -, *, / %)

//2. Comparision Operators- Used to evaluate a relationship between two values and return boolean(true or false) based on the evaluation.(==, ===, <, >, <=, .+);
//Difference between '==' and '==='
//'==' it checks only values and allows type coercion while '===' checks the values and the type
/* 
console.log(5 == "5");//true
console.log(5 === "5"); false. becasue the types are not the same, one is number and the other a string.
*/
//NOTES: Always use '===' Because it is  strict compared to '=='.
// ==(known as loose equality operator) and ===(strict equlity operator, doesn't allow coercion).

/*console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);*/

//Logical Operators: used to evaluate expression and return based on the truthiness.

//1. AND(&&)- isa value selector based on truthiness and execution flow.
//Always return the first falsy values encountered during left-to- right execution.
//true && false;// false
//true && true; //true
//false && false;//

//2. OR(||)- Used to return the first truthy values of the evaluation, or return last value when no truthy value is found.
//"Hello" || 0; //Hello
//"Hello" || "World"; Hello
//indefine || null; null

//COMBINING BOTH 'AND' & 'OR'

//STEP 1: The Real Pattern I'll be encountering with:
//let results = user && user.name;//this is called 'safe access pattern
//it say if the user exist, then give me user.name(the name of the user).

//How it is Actually Executed:
 //The AND Rule: Always return the first falsy during th left- to- right evaluation, otherwise return the last value. 
 //so in another word, it is like saying A && B

 //CASE 1:
/* let user = null;
 let results = user && user.name;
 console.log(results);
 
 EXPLANATION: user has the value null, which is a falsy value. Thus it will be printed out, then exectuion stop. since it is the first falsy value.
 */

/*
CASE 2: 
let user = {name: "Essie"};
let results = user && user.name;
console.log(results);// Essie.

EXPLANATION: The user is truthy, thus the actual value will be printed pout.
*/
 //STEP 2: WHERE BEGINNERS GET CONFUSED AND STUCK:
// let results = user && user.name && user.name.lenght.
//Meaning that if the user and the user.name exist the give me the length.

// CASE 3:
/*let user = {name:""};
let results= user && user.name && user.length;
console.log(results)

OUTPUT CAN BE: 0 , "", undefined- this is the logic error not the sysntax error

EXPLANATION: user it truthy, user.name=""(falsy), thus length won't be printed out.
*/

/*let user = {name: "John"};
let result = user && user.name && user.age;
console.log(result); */

//REAL-WORLD TRAP:
//let result = user && user.name || "Guest"

/*let user={name: ""};
let result = user && user.name || "Guest";

EXPLANATION: We first evaluate user && user.name, because '&&' has high precedence. user = truthy, chain continues, user.name = "", empty string is falsy value, so the chain stops and returns "". 
Next evaluate ("" || "Guest");
""- falsy value so we move to right, "Guest" truthy value, in OR, it alwyas return first truthy value. thus the output will be "Guest".

*/

/*CONDITIONAL STATEMENTS AND TERNARY OPERATOR:

//Conditiona Statements- Are statements that run a code besed whether something is truthy or  falsy.

1.'if' statement
if(condition){
//run if the condition is true
}
EXAMPLE:
let user = {name: "Esther"}
if(user){
console.log("User Exists");// truthy so it will run.
}
*/

/*let user = "";//user is falsy, since we have empty string.
if(user){
   console.log("User Exists!");//will run if the first statement is truthy.
}else{
   console.log("User doesn't exists!");//else will run if the first statement is falsy. 
}*/

//else if- used when there are multiple conditions.

/*let score = 70;

if(score > 80){
   console.log("A");
}else if(score > 60){
   console.log("B");
}else{
   console.log("C")
}*/

//TERNARY OPERATOR:-used as a short form of writing if...else
//SYNTAX: condition ? valueIfTrue : valueIfFalse

//EXAMPLE: 
/*let isLoggedIn = true;
let page = isLoggedIn ? "Dashboard": "login";
console.log(isLoggedIn)*/
/*let items = [];

if (items) {
  console.log ("Has items");
} else {
  console.log("Empty");
}*/

 /*let score = 75;
 if(score >= 95){
   console.log("A");
 }
 else if(score >=85){
   console.log('B');
 }
 else if(score === 75){
   console.log('C');
 }
else{
   console.log("F");
}*/

/*let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back" : "Please log in";
console.log(message)*/

/* 
LOOPS

Looping- is the repetition of code as long as the condition is true.
 -for loop
 -while loop
 for...of loop

 For loop- is useful when I want to control the initilization, conditon and update of the loop all in one place.
 EXAMPLE: when I want to access the index, like comparing  the current item with the next one in an array. 

 syntax: for(initilization; condition; update){...}

 for(let i =0; i < 5; i++){
   console.log(i);
}// output: 0, 1, 2, 3, 4


CONTROL FLOWS INSIDE LOOPS:

*/
/*for(let i =0; i < 5; i++){
   if(i === 3){
      break;
   }
   console.log(i);//0,1,2,3
}

for(let i = 0; i < 5; i++){
   if(i === 3){
      continue;
   }
   console.log(i);//0,1,2,,4

   BREAK: Exist the entire loop, so no iteration takes place.
   CONTINUE: skips the current iteration and moves to the next.
}*/

//Find the first even number
/*for(let i = 1; i < 10; i++){
   if(i % 2 === 0){
      console.log("First even number: " + i);
      break;
   }
}// runs only when the condition is true.


for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    break;
  }
  console.log("First even number: " + i);// Runs for every iteration that doesn't hit break.
}

//Print only even numbers

for(let i = 0; i < 10; i++){
   if(i % 2 != 0){
      continue;
   }
   console.log(i)
}
*/

/*for(let i = 1; i <= 20; i++ ){
   if(i % 3 === 0 && i % 5 === 0){
      console.log(i);
   }
    
}*/
//Loop  through numbers from 1 to 100. Prin numbers but skip any numbers divisible by 7.
/*for(let i = 1; i <= 100; i++){
   if(i % 7 === 0){
      continue;
   }
   console.log(i)
}

//Loop through through numbers from 1 to 100. Find the first number divisible by 13 and stop.
 for(let i = 1; i <= 100; i++){
   if(i % 13 === 0){
      console.log(i);
      break;
   }


 }

 //STRATEGY TO USE:

 DO I STOP EARLY- USE break
 DO I SKIP ANY ITERATION- USE continue
 DO I PROCESS EVERYTHING- NEITHER.
 
 WHILE LOOP- It is useful when I don't know how many times my loop should run in advance and also the code will run repeteadly as long as the condition in true.

 Example: when am checking something, like an API status over and over until I get the expected result.

 EXAMPLE:
 let i = 0;
 while(i < 5){
    console.log(i);
    i++;
 }

  let isGameOver = false;
 let lives = 3;

 while(isGameOver === false){
   console.log("Game running... lives " + lives);
   lives --;

   if(lives === 0){
      isGameOver = true;
   }
 }
 console.log("Game over");


 for..of- used to iterate over iterable objects such as arrays or string and return each value directly.
 iterable- is any object that can be looped over.

 let fruits=['appl', 'banana', 'mango', 'orange'];

 for(let fruit of fruits){
 console.log(fruit)
 }// For each fruit IN fruits print it.


 For..in: it enumarates an object's propertie and returns keys/indexes
 
let fruits = ['apples', 'mangos','banana','oranges']
//for(let i = 0; i < fruits.length; i++){
   //console.log(fruits[i]);
   //console.log(i);
//}

for(let fruit in fruits){
   console.log(fruit);
}
*/
//NOTR: While loop- used when  my loop depends on a condition that keeps changing and I don't know  the upfronts of my loop in advance.
//For loop- I will use when I want structured control over where my loop starts, where it ends, and how it updates after every iteration.

/*
Accumulator pattern- used to aggregate values pver time, as iteration progresses through a collection of data. 
let prices = [9.99, 24.99, 4.99, 14.99,39.99];
let total = 0;

for(let price of prices){
   total += price;
   console.log(`Added: ${price} - Running total: ${total}`);
}
console.log(total);*/
/*let results = 0.1 + 0.2;
console.log(parseFloat(results.toFixed(2)));
toFixed() method- used to round of the result to a specific number of decimal, it returns a string so we use parseFloat() to convert it back to a number.
*/

/*REAL WORLD PATTERN:

Pattern 1: Find one item in a list-we used break
Pattern 2: Filter- collect items that match the collection criteria, we use continue.
Pattern 3: Transform- change  every item in the list. we netheir use break nor continue, since we want to process everything.

let transactions = [
  { type: "send", amount: 500 },
  { type: "receive", amount: 1000 },
  { type: "send", amount: 200 },
  { type: "receive", amount: 3000 },
  { type: "send", amount: 150 },
];

// accumulator pattern
let total = 0;
// filter pattern
for(let transaction of transactions){
    if(transaction.type !== "send"){
        continue; // skip non-send transactions
    }
    total += transaction.amount; // accumulate sends only
}

console.log("Total sent: " + total);
*/

//INTERVIEW QUESTIONS:
//1. Given an array of numbers, return the sum of positive numbers only.
/*
STE 1: IDENTIFY KEYWORDS USED:
array of numbers-loop through the array
sum-accumulator pattern.
 only psitive number-filter out negative numbers.
 only-continue

 STEP 2: Translate the code structure:
 let total =0;
 for(let number of numbers){
 if(number <= 0){
 continue;
 }
 total += number
 }

 STEP 3: TEST IT WITH REAL DATA:
 let numbers = [10, -5, 20, -3, 15, -8, 5];
let total =0;

for(let number of numbers){
   if(number <= 0){
      continue;
   }
   total += number;
}
console.log(`Sum of the positive numbers: ${total}`)

Questions 2: Given an array of names, return the firrst name that start with letter "J". 

let names=["Esther", "Mary", "Jane", "John", "Grace"];

for(let name of names){
if(name.startWith('J)){
console.log(`Found: ${name});
break
}
}
*/ 

/*let names=["Esther", "Mary",  "Grace"];

for(let name of names){
if(name.startsWith('J')){
console.log(`Found: ${name}`);
break
}
}
*/

//Another version that is used to check  a defensive mechanism, where output will not be available.
/*let names = ["Esther", "Mary", "Grace"];
let found = null;

for (let name of names) {
  if (name.startsWith("J")) {
    found = name;
    break;
  }
}

if (found !== null) {
  console.log(`Found: ${found}`);
} else {
  console.log("No name starting with J found");
}
*/

/* Given an array of students scores, print how many students passed and how many failed.Pass mark is 50.
let scores = [45, 78, 32, 90, 55, 48, 61, 29, 88, 41];
let passed = 0;
let failed = 0;

for(let score of scores){
    if(score >= 50){
        passed++;
    } else {
        failed++;
    }
}

console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
```

**Step 4 — Verify manually:**
```
45 → fail  → failed = 1
78 → pass  → passed = 1
32 → fail  → failed = 2
90 → pass  → passed = 2
55 → pass  → passed = 3
48 → fail  → failed = 3
61 → pass  → passed = 4
29 → fail  → failed = 4
88 → pass  → passed = 5
41 → fail  → failed = 5
```

Output:
```
Passed: 5
Failed: 5
*/


/*let products = [
  { name: "Laptop", price: 85000, inStock: true },
  { name: "Phone", price: 45000, inStock: false },
  { name: "Tablet", price: 32000, inStock: true },
  { name: "Charger", price: 2500, inStock: true },
  { name: "Headphones", price: 8500, inStock: false },
  { name: "Mouse", price: 1500, inStock: true },
];

let totalValue = 0;
for(let product of products){
   if(!product.inStock){
      continue;
       }
       console.log(`${product.name}: KES ${product.price}`);
      totalValue += product.price;
}
console.log(`Total value of in-stock products: ${totalValue}`);

/*
DECOMPOSITION OF THE QUESTION
-Am looping product through array of products. 
 -am checking if the product is in instock print out and calculates their total value.  -if the condition is true, then instock items will be printed out. 
 -If the condition is false, then items out of stock will be skipped or filtered out.  -No, am filtering out the products out of stock*/

/*let celsius = [0, 15, 22, 37, 100];
 let highest = 0;
for(let temperature of celsius){
   let fahrenheit = (temperature * 9/5 ) +32;
   console.log(`${temperature} celcius  is equal to ${fahrenheit}`);
    if(fahrenheit > highest ){
      highest = fahrenheit;
   }
}  
console.log(`Highest Fahrenheit temperature: ${highest}`);
/*Loop through array of temperatures in Celcius.
Convert each temperature from celcius to fahreinheit using this formular F = (C * 9/5) +32.
printing out each fahreinheit temperature after conversion.
/checking the output of each conversion fahreinheit temperature then compare it with the current highest temperature, if the current temeprature is higher than the current highest, update, the highest temperature with the current temperature.
*/

/*let students = [
  { name: "Esther", score: 85 },
  { name: "Jane", score: 42 },
  { name: "John", score: 78 },
  { name: "Mary", score: 91 },
  { name: "Peter", score: 55 },
  { name: "Grace", score: 67 },
];
let totalScore = 0;
let averageScore = 0;
for(let student of students){
   totalScore += student.score;
} 
averageScore = totalScore / students.length;

for(let student of students){
   
  if( student.score > averageScore){
   console.log(`Student Name: ${student.name}`);
  }
   
}*/
/*let transactions = [
    { name: "Esther", amount: 5000 },
    { name: "Jane", amount: 12000 },
    { name: "John", amount: 8500 },
    { name: "Mary", amount: 25000 },
    { name: "Peter", amount: 3200 }
];

let largestAmount = 0;
let largestName = "";

for(let transaction of transactions){
    if(transaction.amount > largestAmount){
        largestAmount = transaction.amount;
        largestName = transaction.name;
    }
}

console.log(`Largest transaction: ${largestName} — KES ${largestAmount}`);
*/
/*let products = [
  { name: "Laptop", price: 85000 },
  { name: "Phone", price: 45000 },
  { name: "Tablet", price: 32000 },
  { name: "Charger", price: 2500 },
  { name: "Mouse", price: 1500 },
];
let cheapestPrice = 0;
let cheapestName ="";

for(let product of products){
   if(cheapestPrice === 0 || product.price < cheapestPrice){
      cheapestPrice = product.price;
    cheapestName = product.name;
      
   }
}
console.log(`Cheapest product: ${cheapestName} - KES ${cheapestPrice}`);
*/
