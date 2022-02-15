/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/**
Задача 2

Перепишите `if..else` с использованием нескольких операторов `?`.

Для читаемости — оформляйте код в несколько строк.

```js
*/

// if (login == 'Pitter') {
//     message = 'Hi';
// } else if (login == 'Owner') {
//     message = 'Hello';
// } else if (login == '') {
//     message = 'unknown';
// } else {
//     message = '';
// }

const login: string = 'Owner';

const message = login === 'Pitter'
    ? 'Hi'
    : login == 'Owner'
        ? 'Hello'
        : login == ''
            ? 'unkown'
            : '';

console.log(message);


export const taskNumber = 2;

export const taskDescription = `Задача 2

Перепишите \`if..else\` с использованием нескольких операторов \` ?\`.

Для читаемости — оформляйте код в несколько строк.

`;

export const code = `var message;

// if (login == 'Pitter') {
//     message = 'Hi';
// } else if (login == 'Owner') {
//     message = 'Hello';
// } else if (login == '') {
//     message = 'unknown';
// } else {
//     message = '';
// }

const login = 'Owner';

message = login == 'Pitter'
    ? 'Hi'
    : login == 'Owner'
        ? 'Hello'
        : login == ''
            ? 'unkown'
            : '';

console.log(message);

`;
