/**
Задача 1.

Напишите функцию upperCaseFirst(string).
Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.

Условия:
    - Функция принимает один параметр;
    - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new Error('Parameter should be type of Str5ing!');
    }
    if (arguments[ 1 ]) {
        throw new Error('Expected only one parameter!');
    }
    const arr = [ ...str ];
    arr[ 0 ] = arr[ 0 ].toUpperCase();

    return arr.join('');
}
try {
    console.log(upperCaseFirst('pitter')); // Pitter
    console.log(upperCaseFirst('')); // ''
} catch (error) {
    console.log(error.message);
}


// exports.upperCaseFirst = upperCaseFirst;

export const taskNumber = 1;

export const taskDescription = `Задача 1.
 
Напишите функцию upperCaseFirst(string).
Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 
Условия:
    - Функция принимает один параметр;
    - Функция содержит валидацию входного параметра на тип string.

`;

export const code = `function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new Error('Parameter should be type of Str5ing!');
    }
    if (arguments[1]) {
        throw new Error('Expected only one parameter!');
    }
    const arr = [...str];
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

try {
    console.log(upperCaseFirst('pitter')); // Pitter
    console.log(upperCaseFirst('')); // ''
} catch (error) {
    console.log(error.message);
}

`;
