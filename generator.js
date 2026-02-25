"use strict"

//random numbers generator

function* randomNumberGenerator() {
    while (true) {
        let num = Math.floor(Math.random() * 100) + 1;
        yield num;
    }
}
