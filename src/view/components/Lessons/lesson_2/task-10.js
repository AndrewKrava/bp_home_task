/**
Задача 10

Отсортируйте массив по возрастанию.

Использовать встроенные методы массивов — нельзя.

```javascript
*/

const arr = [ 3, 4, 65, 2, 5, 78 ]; //[ 6, 5, 4, 3, 2, 1 ];
// [1,2,3,4,5,6]

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currEl = arr[ i ];

        for (let k = i + 1; k < arr.length; k++) {
            if (currEl > arr[ k ]) {
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


export const taskNumber = 10;

export const taskDescription = `Задача 10

Отсортируйте массив по возрастанию.

Использовать встроенные методы массивов — нельзя.

`;

export const code = `const arr = [ 3, 4, 65, 2, 5, 78 ]; //[ 6, 5, 4, 3, 2, 1 ];
// [1,2,3,4,5,6]

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currEl = arr[ i ];

        for (let k = i + 1; k < arr.length; k++) {
            if (currEl > arr[ k ]) {
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

`;
