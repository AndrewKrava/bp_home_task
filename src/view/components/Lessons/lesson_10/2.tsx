/**
Задача 2.

Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.

При запуске calculate() последовательно запускает коллбек-функции из аргументов.
Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
То есть возвращаемое значение каждой коллбек-функции из цепочки
становится доступным из параметра следующей коллбек-функции в цепочке.

Первая коллбек-функция не принимает параметров.

После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.

Генерировать ошибки если:
    - Любой из аргументов функции calculate() не является функцией;
    - Любая функция из аргументов не вернула значение.
 */


// Решение

function calculate(...args: Function[]): number {
    const arrFn = [ ...args ];
    let acc: number = 0;
    for (const fn of arrFn) {
        if (acc !== void 0) {
            acc = fn(acc);
        } else {
            acc = fn();
        }
        if (acc === void 0) {
            throw new Error('Every Function should return some value.');
        }
    }

    return acc;
}

const result = calculate(
    () => {
        return 7;
    },
    (prevResult: number) => {
        return prevResult + 4;
    },
    (prevResult: number) => {
        return prevResult * 5;
    },
);

console.log(result); // 55

// exports.calculate = calculate;


export const taskNumber = 2;

export const taskDescription = `Задача 2.
 
Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.

При запуске calculate() последовательно запускает коллбек-функции из аргументов.
Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
То есть возвращаемое значение каждой коллбек-функции из цепочки
становится доступным из параметра следующей коллбек-функции в цепочке.

Первая коллбек-функция не принимает параметров.

После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
 
Генерировать ошибки если:
    - Любой из аргументов функции calculate() не является функцией;
    - Любая функция из аргументов не вернула значение.

`;

export const code = `function calculate() {
    const arrFn = [...arguments];
    let acc;
    for (const fn of arrFn) {
        if (typeof fn !== 'function') {
            throw new Error('Every argument should be a Function.');
        }
        if (acc !== undefined) {
            acc = fn(acc);
        } else {
            acc = fn();
        }
        if (acc === undefined) {
            throw new Error('Every Function should return some value.');
        }
    }
    return acc;
}

const result = calculate(
    () => {
        return 7;
    },
    prevResult => {
        return prevResult + 4;
    },
    prevResult => {
        return prevResult * 5;
    },
);

console.log(result); // 55

`;
