/*
Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.

Пример использования:

```javascript
*/

interface ICustomer {
    name: string
    verified?: boolean
}

class Customers {
    private listObjects: ICustomer[] = [];

    add(obj: ICustomer) {
        this.listObjects.push(obj);
    }

    *[ Symbol.iterator ] () {
        const sortedList = this.listObjects.filter((el) => el.verified);
        for (const el of sortedList) {
            yield el;
        }
    }
}

const customers = new Customers();
customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }


export const taskNumber = 2;

export const taskDescription = `Задача 2

Улучшите класс \`Customers\` добавив функцию генератор.

**Обратите внимание**:

1. Класс \`Customers\` после этого должен работать **идентично** предыдущей задаче.

Пример использования:

`;

export const code = `class Customers {

    #listObjects = [];

    add(obj) {
        if (Object.prototype.toString.call(obj) !== '[object Object]') {
            throw new Error('Argument should be an Object.');
        }
        if (!obj.name) {
            throw new Error('Argument should have Name field.');
        }

        this.#listObjects.push(obj);
    }

    [Symbol.iterator] = function*() {
        const sortedList = this.#listObjects.filter(el => el.verified);
        for (const el of sortedList) {
            yield el;
        }
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }

`;
