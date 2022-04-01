let Mob = "7821044262";

console.log(Mob,typeof(Mob));

let newmob = Number(Mob);

console.log(newmob,typeof(newmob));

console.clear();

let Numstring = "649Num";

console.warn(Number(Numstring));

/*
When you try to convert a string with both number and alphabat you will get an error like these
NaN - Not a number
this means this string cannot be convert in Number 
*/

console.clear();

let Iscooking = false;

console.log(typeof(Iscooking));
console.log(Number(Iscooking));

Iscooking = true;
console.log(typeof(Number(Iscooking)));
console.log(Number(Iscooking));

// Coercion

let num1 = "45";
let num2 = 45;

console.log(num1*num2)

/*
When try to add two numbers in which 1 is string and another is number then both string concatinate
*/