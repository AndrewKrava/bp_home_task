/*
Задача 12

Найдите сумму положительных элементов массива.

Использовать встроенные методы массивов — нельзя.

```javascript
*/

const array = [ 2, -1, -3, 15, 0, 4 ];

function sum(arr) {
    let sum = 0;
    if (arr.length) {
        for (const el of arr) {
            if (el > 0) {
                sum += el;
            }
        }
    }
    console.log('result: ' + sum);
}

sum(array);
