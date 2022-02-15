/**
Задача 2.

Создайте функцию `f`, которая возвращает сумму всех параметров.

Условия:
    - Функция принимает любое количество параметров;
    - Функция содержит проверку входных параметров на тип number.
 */

// Решение

/* не удалять */
function f(...args: number[]) {
    // const arr = [ ...arguments: number[] ];
    let sum = 0;
    for (const el of args) {
        sum += el;
    }

    return sum;
}

try {
    console.log(f(1, 2, 3)); // 6
    console.log(f(1, 1, 1, 1, 1, 1, 1, 1)); // 8
    // console.log(f(1, 2, 's', 4)); // Error: all parameters should be a Number type
} catch (error) {
    console.log(error);
}


// exports.f = f;
/* не удалять */

export const taskNumber = 2;

export const taskDescription = `Задача 2.
 
Создайте функцию \`f\`, которая возвращает сумму всех параметров.
 
Условия:
    - Функция принимает любое количество параметров;
    - Функция содержит проверку входных параметров на тип number.

`;

export const code = `function f() {
    const arr = [ ...arguments ];
    let sum = 0;
    for (const el of arr) {
        if (typeof el !== 'number') {
            throw new Error('Parametr should be type of number!');
        }
        sum += el;
    }

    return sum;
}

try {
    console.log(f(1, 2, 3)); // 6
    console.log(f(1, 1, 1, 1, 1, 1, 1, 1)); // 8
    console.log(f(1, 2, 's', 4)); // Error: all parameters should be a Number type
} catch (error) {
    console.log(error.message);
}

`;
