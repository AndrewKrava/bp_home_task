/**
Задача 1.

Создайте функцию `f`, которая возвращает куб числа.

Условия:
 - Функция принимает один параметр;
 - Функция содержит проверку входного параметра на тип number.
 */

// Решение

/* не удалять */
function f(num) {
    if (typeof num !== 'number') {
        throw new Error('Parametr should be type of number!');
    }

    return num ** 3;
}

try {
    console.log(f(2)); // 8
    console.log(f('Content')); // Error: parameter is not a number type
} catch (e) {
    console.log('Error: ', e.message);
}

export const taskNumber = 1;

export const taskDescription = `
Задача 1.

Создайте функцию "f", которая возвращает куб числа.

Условия:
    - Функция принимает один параметр;
    - Функция содержит проверку входного параметра на тип number.
`;

export const code = `
function f(num) {
    if (typeof num !== 'number') {
        throw new Error('Parametr should be type of number!');
    }

    return num ** 3;
}

try {
    console.log(f(2)); // 8
    console.log(f('Content')); // Error: parameter is not a number type
} catch (e) {
    console.log('Error: ', e.message);
}

`;
/* не удалять */

