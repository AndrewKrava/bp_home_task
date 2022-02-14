/**
Задача 6.

Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
Если чётное — функция возвращает `true`, если нечётное — `false`.

Условия:
    - Входной параметр должен обладать типом number.

Заметки:
    - Чётные числа могут делится на 2 без остатка.
 */

// Решение

/* не удалять */


function isEven(num) {
    if (typeof num !== 'number') {
        throw new Error('Parameter type is not a Number!');
    }

    return num % 2 === 0;
}

try {
    console.log(isEven(3)); // false
    console.log(isEven(4)); // true
    isEven('Content'); // Error: parameter type is not a Number
} catch (error) {
    console.log(error.message);
}


// exports.isEven = isEven;
/* не удалять */

export const taskNumber = 6;

export const taskDescription = `Задача 6.
 
Сделайте функцию \`isEven()\`, которая параметром принимает целое число и проверяет: чётное оно или нет.
Если чётное — функция возвращает \`true\`, если нечётное — \`false\`.
 
Условия:
    - Входной параметр должен обладать типом number.
 
Заметки:
    - Чётные числа могут делится на 2 без остатка.

`;

export const code = `function isEven(num) {
    if (typeof num !== 'number') {
        throw new Error('Parameter type is not a Number!');
    }

    return num % 2 === 0;
}

try {
    console.log(isEven(3)); // false
    console.log(isEven(4)); // true
    isEven('Content'); // Error: parameter type is not a Number
} catch (error) {
    console.log(error.message);
}

`;
