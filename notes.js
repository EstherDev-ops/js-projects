//let- is a js keyword used to declare a variable whoch value can change later.
//Block Scope: Is declared using let or const and has culry braces {}. where the variable is only accessible within the block scope.
//variable shadowing- is when a variable is decalre inside the block scope using the same name as the outer scope. JS read the closest values to where it runs;

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

//Hoisting- var gets moved to the top of the scopeand initialized with undefined. example:

/*var number; // declaration moves  top TOP
 number = 10; //assingment or initialization stays in place
 console.log(number); //output: 10
 */

 //Data types- Are different types ofvalues, that can be stored and manipulated by programming languages.

 //Numbers- used to represent nummeric values, used to store integers and floating points.
//primititve types- Are stored by values in the stack memory, examples: numbers, boolean, strings, nulll, undefined, symbols, bugInt. are immutable, meaning their value can only br changed by creating a new value and assigning it to the variable that holds the primitive value.

//reference types- Are stored by pointers/adress, located in heap memory. are mutables, meaning their values can be change with out creating a new variable, if the point the same memorylocation: arrays, objects, functions.

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

//Why do JS made objects work by reference instead of copying just like primitive types? This would result to memory watage, slow peerfeomance and also costy. Due to that objects can be huge and copying each evrytime you pass it somewhere would result to memory inefficency.

/*let a = 10;
let b = a;
b = 15;

console.log(a);
console.log(b);*/

//In javascript additional operators has two functionality: Arithmetic and concantenation.
//if it is used with strings either side it performs concantenation(joining the strings).This called Type Coercion- where js automatically converts one data type to another. 
//if used with numbers it performs arithmetic expression. 
//NOTE: The rest of the operators performs aritnmethic operation, even if used with strings, they will be coerced into numbers, if possible.
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

//Number()- it will run but our output will be Nan, which in our case it woun't be our prefered output.
//parseFloat- reads values from left to right, if it hits a non-number value it stops, and prints out, the number read.