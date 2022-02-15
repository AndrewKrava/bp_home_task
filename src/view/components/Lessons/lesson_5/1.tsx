/**
Задача 1.

Напишите функцию upperCaseFirst(string).
Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.

Условия:
    - Функция принимает один параметр;
    - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str: string) {
    if (arguments[ 1 ]) {
        throw new Error('Expected only one parameter!');
    }

    if (str.length === 0) {
        return '';
    }

    const result =  str[ 0 ].toUpperCase() + str.slice(1);

    return result;
}
try {
    console.log(upperCaseFirst('pitter')); // Pitter
    console.log(upperCaseFirst('')); // ''
} catch (error) {
    console.log(error);
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
    if (str.length === 0) {
        return '';
    }
    const result =  str[ 0 ].toUpperCase() + str.slice(1);

    return result;
}

try {
    console.log(upperCaseFirst('pitter')); // Pitter
    console.log(upperCaseFirst('')); // ''
} catch (error) {
    console.log(error.message);
}

`;
