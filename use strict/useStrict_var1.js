'use strict'

let num;
let result = 1;
function factorial_count(num){
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial_count(10));

