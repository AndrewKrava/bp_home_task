/**

 Задача 1

Перепишите код, заменив оператор `if` на тернарный оператор `?`

```js
 */
const a = 2;
const b = 1;

// if (a + b < 4) {
//     result = true;
// } else {
//     result = false;
// }


// eslint-disable-next-line no-unneeded-ternary
const result = a + b < 4 ? true : false;

console.log(result);


export const taskNumber = 1;

export const taskDescription = ` Задача 1

Перепишите код, заменив оператор \`if\` на тернарный оператор \` ?\`

`;

export const code = `const a = 2;
const b = 1;
let result = null;

// if (a + b < 4) {
//     result = true;
// } else {
//     result = false;
// }


result = a + b < 4 ? true : false;

console.log(result);

`;
