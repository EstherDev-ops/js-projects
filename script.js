//Day 1: Vatiables & Types

//Esther Maina

const name = "Esther";
//creating new variables, where it can store two numbers. firstNumber and secondNumber.
let firstNumber = 0;
let secondNumber=0;
let result = 0;
let operator = "";
let isOn = true;
//If the user exist then give out user.name.
let user = null;
let results = user && user.name;

let girlName = {name: "Esther"};
let finalResult = girlName && girlName.name;

//if the user and user.name exist then give out user.name.length
let userName= {name: ""};
let finalMessage = userName && user.name && user.name.length;

/*console.log(`Owner: ${name}`);
console.log(`First number: ${firstNumber}`);
console.log(`Second number: ${secondNumber}`);
console.log(`Result: ${result}`);
console.log(`Operator: ${operator}`);
console.log(`Calculator is on: ${isOn}`);
console.log(finalResult);// Esther
console.log(results);//null will be the ouput*/
//console.log(finalMessage);// 0

