/**
Задача 3.

Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив.
А вторым — количество элементов, которое должно быть в массиве.

Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
    - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, count) {
    if (arguments.length !== 2) {
        throw new Error('Wrong length of arguments.');
    }
    if (
        typeof value !== 'number'
        && typeof value !== 'string'
        && !Array.isArray(value)
        && Object.prototype.toString.call(value) !== '[object Object]'
    ) {
        throw new Error('Wrong type of the first argument.');
    }
    if (typeof count !== 'number') {
        throw new Error('Second argument should be an Number.');
    }

    return new Array(count).fill(value);
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

// exports.createArray = createArray;

export const taskNumber = 3;

export const taskDescription = `Задача 3.
 
Напишите функцию \`createArray\`, которая будет создавать массив с заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив.
А вторым — количество элементов, которое должно быть в массиве.
 
Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
    - В качестве второго аргумента был передан не число.

`;

export const code = `function createArray(value, count) {
    if (arguments.length !== 2) {
        throw new Error('Wrong length of arguments.');
    }
    if (
        typeof value !== 'number' &&
        typeof value !== 'string' &&
        !Array.isArray(value) &&
        Object.prototype.toString.call(value) !== '[object Object]'
    ) {
        throw new Error('Wrong type of the first argument.');
    }
    if (typeof count !== 'number') {
        throw new Error('Second argument should be an Number.');
    }
    return new Array(count).fill(value);
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

`;
