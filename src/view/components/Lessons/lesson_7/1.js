/**
Задача 1.

Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
и возвращать новый массив.
Этот новый массив должен содержать исключительно длины строк, которые были в
переданном массиве.
Если строк в переданном массиве не было — нужно вернуть пустой массив.

Условия:
    - Обязательно использовать встроенный метод массива filter;
    - Обязательно использовать встроенный метод массива map.

Генерировать ошибки, если:
    - При вызове функции не был передан один аргумент;
    - В качестве первого аргумента был передан не массив.
 */

const _ = require('lodash');

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name:    'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];
const array1 = [];

// Решение

function inspect(arr) {
    if (arguments.length !== 1) {
        throw new Error('Wrong length of arguments.');
    }

    return arr.filter((el) => typeof el === 'string').map((el) => el.length);
}

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

// exports.inspect = inspect;

// function checkStr(el) {
//     return typeof el === 'string';
// }
// const newArr = _.filter(array, checkStr);
// console.log(newArr);


export const taskNumber = 1;

export const taskDescription = `Задача 1.
 
Напишите функцию \`inspect\`, которая будет принимать массив в качестве аргумента,
и возвращать новый массив.
Этот новый массив должен содержать исключительно длины строк, которые были в
переданном массиве.
Если строк в переданном массиве не было — нужно вернуть пустой массив.
 
Условия:
    - Обязательно использовать встроенный метод массива filter;
    - Обязательно использовать встроенный метод массива map.
 
Генерировать ошибки, если:
    - При вызове функции не был передан один аргумент;
    - В качестве первого аргумента был передан не массив.

`;

export const code = `const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];
const array1 = [];

// Решение

function inspect(arr) {
    if (arguments.length !== 1) {
        throw new Error('Wrong length of arguments.');
    }
    return arr.filter((el) => typeof el === 'string').map((el) => el.length);
}

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

`;
