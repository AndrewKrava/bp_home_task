/**
Задача 3.

Создайте функцию truncate(string, maxLength).
Функция проверяет длину строки string.
Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
Результатом функции должна быть (при необходимости) усечённая строка.

Условия:
    - Функция принимает два параметра;
    - Функция содержит валидацию входных параметров;
    - Первый параметр должен обладать типом string;
    - Второй параметр должен обладать типом number.
 */


// Решение

function truncate(string: string, maxLength: number) {
    if (string.length > maxLength) {
        const newStr = string.slice(0, maxLength - 3);

        return newStr + '...';
    }

    return string + Array(maxLength - string.length).fill('.')
        .join('');
}
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'
console.log(truncate('Вот, что', 21));

// exports.truncate = truncate;


export const taskNumber = 3;

export const taskDescription = `Задача 3.
 
Создайте функцию truncate(string, maxLength).
Функция проверяет длину строки string.
Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
Результатом функции должна быть (при необходимости) усечённая строка.
 
Условия:
    - Функция принимает два параметра;
    - Функция содержит валидацию входных параметров;
    - Первый параметр должен обладать типом string;
    - Второй параметр должен обладать типом number.

`;

export const code = `function truncate(string, maxLength) {
    if (string.length > maxLength) {
        const newStr = string.slice(0, maxLength - 3);
        return newStr + '...';
    } else {
        return string + Array(maxLength - string.length).fill('.').join('');
    }
}
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21)); // 'Вот, что мне хотел...'
console.log(truncate('Вот, что', 21));

`;
