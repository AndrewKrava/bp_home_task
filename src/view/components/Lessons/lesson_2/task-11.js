/*
Задача 11

С помощью цикла `for` и оператора `if` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.

Использовать встроенные методы массивов — нельзя.

```javascript
*/
const array = [ 2, 5, 9, 15, 0, 4 ];

function print(arr) {
    for (const el of arr) {
        if (el > 3 && el < 10) {
            console.log(el);
        }
    }
}

print(array);


export const taskNumber = 11;

export const taskDescription = `Задача 11

С помощью цикла \`for\` и оператора \`if\` выведите на экран столбец элементов, которые больше 3-х, но меньше 10.

Использовать встроенные методы массивов — нельзя.

`;

export const code = `const array = [ 2, 5, 9, 15, 0, 4 ];

function print(arr) {
    for (const el of arr) {
        if (el > 3 && el < 10) {
            console.log(el);
        }
    }
}

print(array);

`;
