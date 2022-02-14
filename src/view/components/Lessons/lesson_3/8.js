/**
Задача 7.

Дан массив с числами `[1, 2, 3]`.
Создайте функцию `f`, которая принимает массив в качестве параметра,
а затем последовательно выводит на экран его элементы.

Условия:
    - Входной параметр должен быть не пустым массивом;
    - Обязательно использовать рекурсию;
    - Использовать цикл запрещено.
 *
Заметки:
    - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

/* не удалять */

function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array!');
    }
    if (arr.length === 0) {
        throw new Error('parameter can\'t be an empty!');
    }

    console.log(arr[ 0 ]);
    const newArr = arr.filter((_, index) => index !== 0);
    if (newArr.length !== 0) {
        f(newArr);
    }
    //  else {
    //     return;
    // }
}

f([ 1, 2, 3 ]);
// 1
// 2
// 3
try {
    // f(1, 2, 3); // Error: parameter type should be an array
    // f('Content'); // Error: parameter type should be an array
    f([]); // Error: parameter can't be an empty
} catch (error) {
    console.log(error.message);
}

// exports.f = f;
/* не удалять */

export const taskNumber = 8;

export const taskDescription = `Задача 7.
 
Дан массив с числами \`[1, 2, 3]\`.
Создайте функцию \`f\`, которая принимает массив в качестве параметра,
а затем последовательно выводит на экран его элементы.
 
Условия:
    - Входной параметр должен быть не пустым массивом;
    - Обязательно использовать рекурсию;
    - Использовать цикл запрещено.
 
Заметки:
    - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

`;

export const code = `function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array!');
    }
    if (arr.length === 0) {
        throw new Error('parameter can\'t be an empty!');
    }

    console.log(arr[ 0 ]);
    const newArr = arr.filter((_, index) => index !== 0);
    if (newArr.length !== 0) {
        f(newArr);
    }
    //  else {
    //     return;
    // }
}

f([ 1, 2, 3 ]);
// 1
// 2
// 3
try {
    // f(1, 2, 3); // Error: parameter type should be an array
    // f('Content'); // Error: parameter type should be an array
    f([]); // Error: parameter can't be an empty
} catch (error) {
    console.log(error.message);
}

`;
