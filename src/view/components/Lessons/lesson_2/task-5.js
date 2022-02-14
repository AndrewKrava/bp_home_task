/* eslint-disable no-plusplus */
/*
Задача 5

Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.

```js
*/
// for (var i = 0; i < 3; i++) {
//     console.log('номер ' + i + '!');
// }

let i = 0;
while (i < 3) {
    console.log('number ' + i + '!');
    i++;
}


export const taskNumber = 5;

export const taskDescription = `Задача 5

Перепишите код, заменив цикл \`for\` на \`while\`, без изменения поведения цикла.

`;

export const code = `// for (var i = 0; i < 3; i++) {
//     console.log('номер ' + i + '!');
// }

let i = 0;
while (i < 3) {
    console.log('number ' + i + '!');
    i++;
}
`;
