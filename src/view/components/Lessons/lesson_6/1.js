/**
Задача 1.

Вручную создать имплементацию функции `forEach`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.

Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция.
 */

const array = [ 1, 2, 3 ];

// Решение
function forEach(array, fn) {
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
        fn(array[ index ], index, array);
    }
}

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

// exports.forEach = forEach;

export const taskNumber = 1;

export const taskDescription = `Задача 1.
 
Вручную создать имплементацию функции \`forEach\`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.
 
Генерировать ошибки, если:
    - При вызове функции не было передано два аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция.

`;

export const code = `const array = [1, 2, 3];

// Решение
function forEach(array, fn) {
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
        fn(array[index], index, array);
    }
}

const result = forEach(array, function(item, index, arrayRef) {
    console.log(item); // элемент массива
    console.log(index); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

`;
