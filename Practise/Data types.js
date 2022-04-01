// Primative data types

let Thestring = "Something just like this";

console.log(Thestring);
console.log("Data type is " + typeof (Thestring));

console.clear();

let Blackholeno = 4;
console.log("Black hole no is", Blackholeno);
console.log("Data type is " + typeof (Blackholeno))

console.clear();

let Isdrive = true;
console.log("Are you know driving " + Isdrive);
console.log("Data type is " + typeof (Isdrive));


console.clear();

let Unknown = null;
console.log(Unknown);
console.log("Data type is " + typeof (Unknown));

console.clear();

let Undefinedvalue = undefined;
console.log(Undefinedvalue);
console.log("Data type is " + typeof (Undefinedvalue));

Undefinedvalue = 69;
console.warn("Undefind Value changed to " + Undefinedvalue);

// Reference data types

const Arr = ["String", 4, true, null, undefined];
Arr.push(false)
console.log(Arr)

// Above array code can be possible but

console.clear();

// const Arr2 = [null, null];
// console.log(Arr2);
// Arr2 = [23, 12];
// console.log(Arr2);

// We cannot change the whole array but we can do changes is that array like add or remove element

console.clear();

let marks = {
    Sumit:74.59,
    Samarth:78,
    Atharv:71
};

console.log(marks);
console.log("Mark of sumit is "+marks.Sumit);
console.warn("Data type is "+typeof(marks))

console.clear();

// Function and date

function Tellmedate(){
    const date = new Date;

    console.log(`Date is ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`)
};

Tellmedate();