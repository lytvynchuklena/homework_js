
// ДОП

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
//



let oneNumber = parseInt(prompt('введіть перше число'));
let twoNumber = parseInt(prompt('введіть друге число'));
let threeNumber = parseInt(prompt('введіть третє число'));

if (oneNumber < twoNumber && oneNumber < threeNumber && twoNumber < threeNumber) {
    alert('first: ' + oneNumber + ' second: ' + twoNumber + ' third: ' + threeNumber);
} else if (twoNumber < oneNumber && twoNumber < threeNumber && oneNumber < threeNumber) {
    alert('first: ' + twoNumber + ' second: ' + oneNumber + ' third: ' + threeNumber);
} else if (twoNumber > oneNumber && twoNumber > threeNumber && oneNumber > threeNumber) {
    alert('first: ' + threeNumber + ' second: ' + oneNumber + ' third: ' + twoNumber);
} else if (twoNumber > oneNumber && twoNumber > threeNumber && oneNumber < threeNumber) {
    alert('first: ' + oneNumber + ' second: ' + threeNumber + ' third: ' + twoNumber);
} else if (oneNumber > twoNumber && oneNumber > threeNumber && twoNumber > threeNumber) {
    alert('first: ' + threeNumber + ' second: ' + twoNumber + ' third: ' + oneNumber);
} else if (oneNumber > twoNumber && oneNumber > threeNumber && twoNumber < threeNumber) {
    alert('first: ' + twoNumber + ' second: ' + threeNumber + ' third: ' + oneNumber);
}

