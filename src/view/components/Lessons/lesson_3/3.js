/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

/* не удалять */

function f(a, b, c) {
    if (typeof a !== 'number'
        || typeof b !== 'number'
        || typeof c !== 'number'
    ) {
        throw new Error('Parametr should be type of number!');
    }
    return (a - b) / c;
}

try {
    console.log(f(9, 3, 2));; // 3
    console.log(f('s', 9, 3)); // Error: all parameters type should be a Number
} catch (error) {
    console.log(error.message);
}


// exports.f = f;
/* не удалять */