const Marks = [32,31,30,30,25];
const Fruits = ["Apple","Mango","Banana","Pineapple","Watermelon"];
const Mix_array = ['Sumit',true,false,89,45,"Emma"];

/*
printing the array
console.log(Marks);
console.log(Fruits);
console.log(Mix_array);
*/

// get element from that array

/*
console.log(Marks[1]);
console.log(Fruits[0]);
console.log(Mix_array[2]);
*/

// get the length of the array

/*
console.log(Marks.length);
console.log(Fruits.length);
console.log(Mix_array.length);
*/

// mutating/changing the element by indexing

/*
console.log(Marks);
Marks[0] = 100;
console.log(Marks);

console.log(Fruits);
Fruits[0]="Peru";
console.log(Fruits);
*/

// creating an array

/*
let arr = new Array(24,78,true,'Sumit','Anna');
console.log(arr);
*/

// methods in the array

// console.log(Marks);

// removes the element from the last index
Marks.pop();

// removes the element from first index
Marks.shift();

// get the index of the element in that array
// console.log(Marks.indexOf(30))

// add the element at the end
Marks.push(25);

// add the element at the start
Marks.unshift(69);

// add two arrays
// concat methods create a temporary array which did not change the parent array
let marks = [78,59,58,12,025,48,69]
let amd = Marks.concat(marks);

// array after the methods
// console.log(amd);

// given elements includes in the array
// console.log(Marks.includes(69))

// reverse the array
Marks.reverse();

// console.log(Marks);

// Objects literals

const Employe = {
    name:'Anna Jarris',
    profession:'Mother & Lab technician',
    age:25,
    DOB:2-12-2007
}

console.log(Employe)

// console specific element from the object
console.log(Employe.name)
console.log(Employe["name"])