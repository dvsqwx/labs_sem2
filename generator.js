"use strict"

//random numbers generator

function* randomNumberGenerator() {
    while (true) {
        let num = Math.floor(Math.random() * 100) + 1;
        yield num;
    }
}

const myIter = randomNumberGenerator();
let count = 0;

for (let num of myIter) {
    console.log(num);
    count++;

    if (count === 3) {
        break;
    }
}
