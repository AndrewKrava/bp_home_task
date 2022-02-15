/**
Задача 2.

Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
Свойство `salary` можно читать, но нельзя менять.
При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
Если rate не установлен — возвращаем число 0.
 */

interface Person {
    [key: string]: any
}

const person: Person = {};

Object.defineProperties(person, {
    rate: {
        writable:   true,
        enumerable: false,
    },
    salary: {
        get() {
            return this.rate ? this.rate * new Date().getDate() : 0;
        },
    },
});

// Решение

person.rate = 30;


// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
console.log(person.salary);
// exports.person = person;

export const taskNumber = 2;

export const taskDescription = `Задача 2.

Создайте объект \`person\` у которого будет 2 свойства: \`rate\` и \`salary\`.
Свойство \`rate\` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
Свойство \`salary\` можно читать, но нельзя менять.
При чтении свойства \`salary\` возвращает результат умножения поля \`rate\` на текущее число в месяце.
Если rate не установлен — возвращаем число 0.

`;

export const code = `const person = {};

Object.defineProperties(person, {
    rate:{
        writable: true,
        enumerable: false
    },
    salary: {
        get() {
            return this.rate ? this.rate * (new Date().getDate()) : 0;
        }
    }
});

// Решение

person.rate = 30;


// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
console.log(person.salary);

`;
