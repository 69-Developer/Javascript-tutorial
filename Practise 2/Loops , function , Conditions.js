// Function

function console_1_to_1002(){
    for (let i = 0; i < 100; i++) {
        if (i%2==0){
            console.log(`This is a even number and its square is ${i*i}`)
        }
        else{
            console.log(`This is a odd number and its square is ${i*i}`)
        }
    }
}

console_1_to_1002()