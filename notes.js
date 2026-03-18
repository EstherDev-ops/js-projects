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