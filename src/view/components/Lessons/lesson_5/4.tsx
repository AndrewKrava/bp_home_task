/**
Задача 4.

Дана стоимость в виде строки: `"$120"`.
Первый символ — валюта, затем – число.
Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
Обратите внимание что нужно возвращать не строку 120 а именно число 120.

Условия:
    - Функция принимает один параметр;
    - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = '$120';

// Решение

function extractCurrencyValue(source: string): number {
    return Number(source.slice(1));
}

console.log(extractCurrencyValue(PRICE)); // 120

// exports.extractCurrencyValue = extractCurrencyValue;


export const taskNumber = 4;

export const taskDescription = `Задача 4.

Дана стоимость в виде строки: \`"$120"\`.
Первый символ — валюта, затем – число.
Создайте функцию \`extractCurrencyValue(source)\`, которая будет из такой строки выделять число-значение, в данном случае 120.
Обратите внимание что нужно возвращать не строку 120 а именно число 120.

Условия:
    - Функция принимает один параметр;
    - Функция содержит валидацию входного параметра на тип string.

`;

export const code = `const PRICE = '$120';

// Решение

function extractCurrencyValue(source) {
    return source.slice(1);
}

console.log(extractCurrencyValue(PRICE)); // 120

`;
