/*
Задача 6

Написать код который посчитает сумму всех элементов в массиве.

Использовать встроенные методы массивов — нельзя.

```js
*/
const array = [ 1, 2, 3, 4 ];


function foo(arr) {
    let sum = 0;
    if (arr.length) {
        for (const el of arr) {
            sum += el;
        }
    }

    return sum;
}

console.log(foo(array));


export const taskNumber = 6;

export const taskDescription = `Задача 6

Написать код который посчитает сумму всех элементов в массиве.

Использовать встроенные методы массивов — нельзя.

`;

export const code = `const array = [ 1, 2, 3, 4 ];

function foo(arr) {
    let sum = 0;
    if (arr.length) {
        for (const el of arr) {
            sum += el;
        }
    }

    return sum;
}

console.log(foo(array));

`;
