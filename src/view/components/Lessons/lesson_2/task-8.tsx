/**
Задача 8

Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.

Использовать встроенные методы массивов — нельзя.

```js
*/
const array = [ 1, 2, 3, 4, 5, 6 ];


function sumOfEvenEl(arr: number[]) {
    let sum = 0;
    if (arr.length) {
        for (const el of arr) {
            if (el % 2 === 0 && el > 3) {
                sum += el;
            }
        }
    }

    return sum;
}

console.log(sumOfEvenEl(array));


export const taskNumber = 8;

export const taskDescription = `Задача 8

Напишите код, который посчитает сумму всех парных элементов в массиве. В суммировании участвуют только элементы больше 3.

Использовать встроенные методы массивов — нельзя.

`;

export const code = `const array = [ 1, 2, 3, 4, 5, 6 ];


function sumOfEvenEl(arr) {
    let sum = 0;
    if (arr.length) {
        for (const el of arr) {
            if (el % 2 === 0 && el > 3) {
                sum += el;
            }
        }
    }

    return sum;
}

console.log(sumOfEvenEl(array));

`;
