// General loop

// For loop
// While loop
// Do while

// for (let i=0; i<100; i++)
// {
// console.log(i);
// };

// While loop

// let j = 0;

// while (j < 100) {
//   console.log(j);
//   j++;

//   if (j > 50) {
//     break;
//   }
// }

let x = 0;

const square_numbers = [];

for (let i; i < 0; i++) {
  if (i > 50) {
    break;
  } else {
      square_numbers.push(x+1*x+1)
      continue
  }
}
console.log(square_numbers)