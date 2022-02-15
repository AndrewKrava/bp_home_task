/**
Задача 1.

Создайте объект `person` у которого будет одно свойство `salary`.
При чтении этого свойства должна возвращаться строка с текстом.
Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {
    get salary() {
        const dateNow = new Date();
        const lastDayOfTheMonth = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0);

        return Number(lastDayOfTheMonth) - dateNow.getDate() > 20
            ? 'good salary'
            : 'bad salary';
    },
};

// Решение

console.log(person.salary); // good salary

// exports.person = person;


export const taskNumber = 1;

export const taskDescription = `Задача 1.
 
Создайте объект \`person\` у которого будет одно свойство \`salary\`.
При чтении этого свойства должна возвращаться строка с текстом.
Если до конца месяца осталось больше чем 20 дней — возвращается строка \`good salary\`, а если нет — \`bad salary\`

`;

export const code = `const person = {
    get salary() {
        const dateNow = new Date();
        const lastDayOfTheMonth = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0);
        return lastDayOfTheMonth - dateNow.getDate() > 20
                    ? 'good salary'
                    : 'bad salary'
    }
};

// Решение

console.log(person.salary); // good salary

`;
