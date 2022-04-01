console.log("Welcome to string tutorial");

const nam = 'Harry';

const greeting = "Good morning";

console.log(greeting+" "+nam)

// concatination

let html = "Hello my name is this"

n = html.concat("this")

console.log(n)

// get the lenght of element

console.clear()
console.log(html.length)

// To lower or upper case

console.log(html.toLowerCase()) // To lower case

console.log(html.toUpperCase()) // To upper case

// Indexing

console.log(html[0]+html[1]+html[2]+html[3])

console.log(html.indexOf("name")) // If he find then return the index number

console.log(html.indexOf("name")) // if not find then return -1

// get the last index

console.log(html.lastIndexOf('e'))

console.log(html.charAt(6)) // Get the element of that particular index

console.log(html.endsWith(" "))

console.log(html.includes("pokemon"))

console.log(html.substring(0,6))

console.log(html.slice(4)) // Removes the from 0 index to 4 show remaining indexs

console.log(html.split(" "))

console.clear();

// console.log(html.replace('this','Sumit'))

let fruits = ['Orange','Apple','Banana'];
let myHTML = `
    <p> My favourite fruits are ${fruits[0]} , ${fruits[1]} , ${fruits[2]}
    </p>
    `;

document.body.innerHTML = myHTML

console.clear();

