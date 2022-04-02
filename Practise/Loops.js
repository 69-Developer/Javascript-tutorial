// For loop

// Syntax

// for (let i=0; i<100; i++){
//     console.log(i);
// }

// For loop in array

// 1. For each

// let arr = [1,186,186,186,1861,1,861,86168,1,616,1681,681,6168]

// arr.forEach(
//     (element)=>{
//         console.log(element)
//     }
// )

// 2. For loop for array

// for (let n=0; n<arr.length; n++){
//     console.log(arr[n])
// }

// While loop

let i = 10000

// while (i<1000){
//     console.log(i)
//     i++
// }

// If the given condition is false then the loop does not execute

// Do while

do {
    console.log(i+1)
} while (i<1000);

// Code under the do while will execute one time rather the condition is true or false in while

//  Loops in object

const Obj = {
    name:"Nirved Sandip Sawant",
    Class:'2',
    Section:'B',
    Roll_no:36,
    School_name:"KAPOL"
}

console.log(`Name is ${Obj.name} Studying in ${Obj.School_name} Class ${Obj.Class} ${Obj.Section} Roll no is ${Obj.Roll_no}`)