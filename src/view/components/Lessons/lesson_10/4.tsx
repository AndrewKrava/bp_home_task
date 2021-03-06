/**
Задача 4.

Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.

При запуске compose() последовательно запускает коллбек-функции из аргументов.

Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.

Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
То есть возвращаемое значение каждой коллбек-функции из цепочки
становится доступным из параметра следующей коллбек-функции в цепочке.

Функция compose() возвращает ещё одну функцию с одним параметром.
Значение, переданное этой функции в качестве аргумента должно стать
параметром первой коллбек-функции в цепочке выполнения функции compose().

Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.

Генерировать ошибки если:
    - Любой из аргументов не является функцией;
    - Любая функция из аргументов не вернула значение.
 *
Заметка:
Если функции, которая является возвращаемым значением compose()
не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение

type ComposeNoArgs = () => Function;
type Compose = (...args: Function[]) => Function;

const compose: (Compose | ComposeNoArgs) = (...args: Function[]) => {
    const arrFn = [ ...args ];

    return (arg: string) => {
        let acc = arg;
        for (let i = arrFn.length - 1; i >= 0; i--) {
            acc = arrFn[ i ](acc);
            if (acc === void 0) {
                throw new Error('Every Function should return some value.');
            }
        }

        return acc;
    };
};

const result1 = compose(
    (prevResult: string) => prevResult + 'o',
    (prevResult: string) => prevResult + 'l',
    (prevResult: string) => prevResult + 'l',
    (prevResult: string) => prevResult + 'e',
)('h');
const result2 = compose(
    (prevResult: string) => prevResult + 'o',
    (prevResult: string) => prevResult + 'l',
    (prevResult: string) => prevResult + 'l',
    (prevResult: string) => prevResult + 'e',
    () => 'h',
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'

// exports.compose = compose;


export const taskNumber = 4;

export const taskDescription = `Задача 4.
 
Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 
При запуске compose() последовательно запускает коллбек-функции из аргументов.

Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 
Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
То есть возвращаемое значение каждой коллбек-функции из цепочки
становится доступным из параметра следующей коллбек-функции в цепочке.
 
Функция compose() возвращает ещё одну функцию с одним параметром.
Значение, переданное этой функции в качестве аргумента должно стать
параметром первой коллбек-функции в цепочке выполнения функции compose().
 
Итого, подпись функции compose: \`compose(f, g)(x) = f(g(x))\`.
 
Генерировать ошибки если:
    - Любой из аргументов не является функцией;
    - Любая функция из аргументов не вернула значение.
 
Заметка:
Если функции, которая является возвращаемым значением compose()
не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.

`;

export const code = `// Решение

function compose() {
    const arrFn = [...arguments];

    return (arg) => {
        let acc = arg;
        for (let i = arrFn.length -1; i >= 0; i--) {
            if (typeof arrFn[i] !== 'function') {
                throw new Error('Every argument should be a Function.');
            }
            acc = arrFn[i](acc);
            if (acc === undefined) {
                throw new Error('Every Function should return some value.');
            }
        }
        return acc;
    };
}

const result1 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
)('h');
const result2 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
    () => 'h',
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'

`;
