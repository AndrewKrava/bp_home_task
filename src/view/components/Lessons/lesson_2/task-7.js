/*
Задача 7

Напишите код, который посчитает сумму всех парных элементов в массиве.

Использовать встроенные методы массивов — нельзя.

```js
*/
const array = [ 1, 2, 3, 4 ];

function sumOfEvenEl(arr) {
    let sum = 0;
    if (arr.length) {
        for (const el of arr) {
            if (el % 2 === 0) {
                sum += el;
            }
        }
    }

    return sum;
}

console.log(sumOfEvenEl(array));
