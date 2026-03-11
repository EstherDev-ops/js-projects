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
