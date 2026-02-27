"use strict"

function startProcessing(iterator, seconds) {
    let total = 0;
    let count = 0;

    let intervalId = setInterval(() => {
        let nextValue = iterator.next().value;
        total += nextValue;
        count++;
        console.log(`num: ${nextValue} | total: ${total}`);
    }, 500);
