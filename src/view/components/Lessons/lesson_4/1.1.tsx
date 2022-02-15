/**
Задача 1.

Создайте объект `person` у которого будет одно свойство `salary`.
При чтении этого свойства должна возвращаться строка с текстом.
Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const moment = require('moment');
const person = {
    get salary() {
        const lastDayOfMon = moment().endOf('month')
            .format('DD');

        return lastDayOfMon - moment().date() > 20 ? 'good salary' : 'bad salary';
    },
};

// Решение

console.log(person.salary); // good salary

// exports.person = person;

export const taskNumber = 1.1;

export const taskDescription = `Задача 1.
 
Создайте объект \`person\` у которого будет одно свойство \`salary\`.
При чтении этого свойства должна возвращаться строка с текстом.
Если до конца месяца осталось больше чем 20 дней — возвращается строка \`good salary\`, а если нет — \`bad salary\`

`;

export const code = `const moment = require('moment');
const person = {
    get salary() {
        const lastDayOfMon = moment().endOf('month')
            .format('DD');

        return lastDayOfMon - moment().date() > 20 ? 'good salary' : 'bad salary';
    },
};

// Решение

console.log(person.salary); // good salary

`;
