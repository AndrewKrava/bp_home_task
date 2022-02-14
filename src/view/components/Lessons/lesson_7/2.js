/**
Задача 2.

Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
и возвращать число.
Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
Число, которое возвращает функция должно быть суммой всех элементов
на всех уровнях всех вложенных массивов.

Если при проходе всех уровней не было найдено ни одного числа,
то функция должна возвращать число 0.

Условия:
    - Обязательно использовать встроенный метод массива reduce.

Генерировать ошибки, если:
    - При вызове функции не был передан один аргумент;
    - В качестве первого аргумента был передан не массив;
    - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function collect(arr) {
    if (arguments.length !== 1) {
        throw new Error('Wrong length of arguments.');
    }
    if (!Array.isArray(arr)) {
        throw new Error('First argument should be an Array.');
    }

    const newArr = arr.flat(Infinity);

    return newArr.reduce((acc, el) => {
        if (typeof el !== 'number' && !Array.isArray(el)) {
            throw new Error('Element of the Array should be an number or another Array.');
        }

        return acc += el;
    }, 0);
}

const array1 = [
    [
        [ 1, 2 ],
        [ 1, 2 ],
    ],
    [
        [ 2, 1 ],
        [ 1, 2 ],
    ],
];
console.log(collect(array1)); // 12

const array2 = [[[[[ 1, 2 ]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[ 1, 2 ]]], 2 ], 1 ];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3 ]]]];
console.log(collect(array5)); // 3

// exports.collect = collect;

export const taskNumber = 2;

export const taskDescription = `Задача 2.
 
Напишите функцию \`collect\`, которая будет принимать массив в качестве аргумента,
и возвращать число.
Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
Число, которое возвращает функция должно быть суммой всех элементов
на всех уровнях всех вложенных массивов.
 
Если при проходе всех уровней не было найдено ни одного числа,
то функция должна возвращать число 0.
 
Условия:
    - Обязательно использовать встроенный метод массива reduce.
 
Генерировать ошибки, если:
    - При вызове функции не был передан один аргумент;
    - В качестве первого аргумента был передан не массив;
    - Если на каком-то уровне было найдено не число и не массив.

`;

export const code = `function collect(arr) {
    if (arguments.length !== 1) {
        throw new Error('Wrong length of arguments.');
    }
    if (!Array.isArray(arr)) {
        throw new Error('First argument should be an Array.');
    }

    const newArr = arr.flat(Infinity);

    return newArr.reduce((acc, el) => {
        if (typeof el !== 'number' && !Array.isArray(el)) {
            throw new Error('Element of the Array should be an number or another Array.');
        }
        return (acc += el);
    }, 0);
}

const array1 = [
    [
        [1, 2],
        [1, 2],
    ],
    [
        [2, 1],
        [1, 2],
    ],
];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

`;
