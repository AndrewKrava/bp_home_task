/**
Задача 3.

Вручную создать имплементацию функции `every`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.

Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция.
 */

const array = [ 1, 2, 3, 4, 5, 6 ];

// Решение

function every(array, fn) {
    if (arguments.length !== 2) {
        throw new Error('Wrong length of arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array.');
    }

    if (typeof fn !== 'function') {
        throw new Error('Second argument should be a function.');
    }

    for (let index = 0; index < array.length; index++) {
        if (!fn(array[ index ], index, array)) {
            return false;
        }
    }

    return true;
}

const result = every(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

// exports.every = every;


export const taskNumber = 3;

export const taskDescription = `Задача 3.
 
Вручную создать имплементацию функции \`every\`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.
 
Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция.

`;

export const code = `const array = [1, 2, 3, 4, 5, 6];

// Решение

function every(array, fn) {
    if (arguments.length !== 2) {
        throw new Error('Wrong length of arguments.');
    }

    if (!Array.isArray(array) ) {
        throw new Error('First argument should be an Array.');
    }

    if (typeof fn !== 'function') {
        throw new Error('Second argument should be a function.');
    }

    for (let index = 0; index < array.length; index++) {
        if (!fn(array[index], index, array)) {
            return false;
        }
    }
    return true;
}

const result = every(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

`;
