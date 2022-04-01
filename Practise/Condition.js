// // if else syntax

// let age = 24;

// if (age >= 18){
//     // console.log('You can drive');
// }

// else{
//     // console.log("You can't drive");
// };

// // Condition

// /*
// >= - Greater than or equal to
// <= - smaller than or equal to 
// === - Type and value are same
// && (and) - both the condition are true
// || (or) - from n condition one is true
// == - value equal to
// */

// let isdrive = false

// if (isdrive && age>=18){
//     console.log('You can drive');
// }

// else if (isdrive==true || age>=18)
// {
//     console.log('You can get a learning license')
// }
// else{
//     console.log("You can't drive")
// }


// ternary operator

// const x = isdrive ? 'You can drive' : "You can't drive"
// console.log(x)

// Switch case

let Marriage_age = 20;

switch (Marriage_age) {
    case 19:
        console.log('You can marriage')
        break;

    case 20:
        console.log('You can marriage : Switch case 2')
        break;
        
    default:
        console.log("You can't marriage")
        break;
}