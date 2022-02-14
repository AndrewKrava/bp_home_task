/**
Задача 5.

Вручную создать имплементацию функции `reduce`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.

Генерировать ошибки, если:
    - При вызове функции не было передано три аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция;
    - В качестве третьего аргумента было передан не число.
 */

const array = [ 1, 2, 3, 4, 5 ];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(array, fn, acc) {
    if (arguments.length !== 3) {
        throw new Error('Wrong length of arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array.');
    }

    if (typeof fn !== 'function') {
        throw new Error('Second argument should be a function.');
    }

    if (typeof acc !== 'number') {
        throw new Error('Third argument should be a number.');
    }
    let result = acc;
    for (let index = 0; index < array.length; index++) {
        result = fn(result, array[ index ], index, array);
    }

    return result;
}

const result = reduce(
    array,
    function (accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

// exports.reduce = reduce;


export const taskNumber = 5;

export const taskDescription = `Задача 5.
 
Вручную создать имплементацию функции \`reduce\`.
Логика работы ручной имплементации должна быть такой-же,
как и у встроенного метода.
 
Генерировать ошибки, если:
    - При вызове функции не было передано три аргумента;
    - В качестве первого аргумента был передан не массив;
    - В качестве второго аргумента была передана не функция;
    - В качестве третьего аргумента было передан не число.

`;

export const code = `const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
function reduce(array, fn, acc) {
    if (arguments.length !== 3) {
        throw new Error('Wrong length of arguments.');
    }

    if (!Array.isArray(array)) {
        throw new Error('First argument should be an Array.');
    }

    if (typeof fn !== 'function') {
        throw new Error('Second argument should be a function.');
    }

    if (typeof acc !== 'number') {
        throw new Error('Third argument should be a number.');
    }
    let result = acc;
    for (let index = 0; index < array.length; index++) {
        result = fn(result, array[index], index, array);
    }
    return result;
}

const result = reduce(
    array,
    function (accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив

        return accumulator + item;
    },
    INITIAL_ACCUMULATOR
);

console.log(result); // 21

`;
