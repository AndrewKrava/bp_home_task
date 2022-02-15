/**
Задача 2.

Напишите функцию checkSpam(source, example)
Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.

Условия:
    - Функция принимает два параметра;
    - Функция содержит валидацию входных параметров на тип string.
    - Функция должна быть нечувствительна к регистру:
 */

// Решение
function checkSpam(source: string, example: string) {
    if (arguments[ 2 ]) {
        throw new Error('Expected only two parameters!');
    }

    return source.toLowerCase().includes(example.toLowerCase());
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true

// exports.checkSpam = checkSpam;


export const taskNumber = 2;

export const taskDescription = `Задача 2.
 
Напишите функцию checkSpam(source, example)
Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 
Условия:
    - Функция принимает два параметра;
    - Функция содержит валидацию входных параметров на тип string.
    - Функция должна быть нечувствительна к регистру:

`;

export const code = `function checkSpam(source, example) {
    if (typeof source !== 'string' || typeof example !== 'string') {
        throw new Error('Parameters should be type of Str5ing!');
    }
    if (arguments[2]) {
        throw new Error('Expected only two parameters!');
    }
    return source.toLowerCase().includes(example.toLowerCase());
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true

`;
