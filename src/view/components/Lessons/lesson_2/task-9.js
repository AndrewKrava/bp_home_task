/*
Задача 9

Отсортируйте массив по убыванию.

Использовать встроенные методы массивов — нельзя.

```javascript
*/
const arr = [ 2, 5, 21, 5, 2, 3, 56 ]; //[ 1, 2, 3, 4, 5, 6 ];
// [6,5,4,3,2,1]

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currEl = arr[ i ];

        for (let k = i + 1; k < arr.length; k++) {
            if (currEl < arr[ k ]) {
                const temp = arr[ k ];
                arr[ i ] = temp;
                arr[ k ] = currEl;
                currEl = arr[ i ];
            }
        }
    }
    console.log(arr);
}

sortArray(arr);
