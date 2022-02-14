/**
Задача 2.

Вручную создать имплементацию функции `filter`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.

Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция.
 */

const array = [ 'Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!' ];

// Решение

function filter(array, fn) {
    if (arguments.length !== 2) {
        throw new Error('Wrong length of arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array.');
    }

    if (typeof fn !== 'function') {
        throw new Error('Second argument should be a function.');
    }

    const resultArr = [];
    for (let index = 0; index < array.length; index++) {
        if (fn(array[ index ], index, array)) {
            resultArr.push(array[ index ]);
        }
    }

    return resultArr;
}

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

// exports.filter = filter;


export const taskNumber = 2;

export const taskDescription = `Задача 2.
 
Вручную создать имплементацию функции \`filter\`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.
 
Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция.

`;

export const code = `
const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter(array, fn) {
    if (arguments.length !== 2) {
        throw new Error('Wrong length of arguments.');
    }

    if (!Array.isArray(array) ) {
        throw new Error('First argument should be an Array.');
    }

    if (typeof fn !== 'function') {
        throw new Error('Second argument should be a function.');
    }

    const resultArr = [];
    for (let index = 0; index < array.length; index++) {
        if (fn(array[index], index, array)){
            resultArr.push(array[index]);
        }
    }
    return resultArr;
}

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

`;
