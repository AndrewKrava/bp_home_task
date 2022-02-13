/**
Задача 4

Перепишите код с использованием одной конструкции `switch`:

*/
// const value = 2;

// if (value === 0) {
//     console.log(0);
// }

// if (value === 1) {
//     console.log(1);
// }

// if (value === 2 || value === 3) {
//     console.log('2,3');
// }

// const x = 3;

// if (x < 5) {
//     console.log('less 5');
// }

// if (x < 4) {
//     console.log('less 4');
// }

// switch (true) {
//     case value === 1: {
//         console.log(0);
//         break;
//     }

//     case value === 2: {
//         console.log(2);
//         break;
//     }

//     case value === 3 || value === 4: {
//         console.log('3,4');
//         break;
//     }

//     default:
//         console.log('default');
//         break;
// }

const arr = [ 1, 2, 4 ];

function recursion(arr) {
    if (arr.length === 0) {
        return;
    }

    console.log(arr.shift());

    if (arr.length !== 0) {
        recursion(arr);
    }
}

recursion(arr);
