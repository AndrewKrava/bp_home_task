/*
Задача 1

Создайте класс `Customers` который умеет работать с механизмом `for of`.

Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

**Обратите внимание**:

1. Использование генераторов **запрещено**.
2. Использование посторонних библиотек **запрещено**
3. У класса `Customers` **должен** быть метод `Symbol.iterator`

Пример использования:

```javascript
*/

class Customers {
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

    [ Symbol.iterator ]() {
        let i = 0;
        const sortedList = this.#listObjects.filter((el) => el.verified);

        return {
            next: () => {
                const done = i >= sortedList.length;
                const value = !done ? sortedList[ i ] : undefined;
                i++;

                return {
                    done, value,
                };
            },
        };
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

export const taskNumber = 1;

export const taskDescription = `Задача 1

Создайте класс \`Customers\` который умеет работать с механизмом \`for of\`.

Класс \`Customers\` содержит метод \`add\` который принимает объект в качестве параметра. У этого объекта есть обязательное поле \`name\` 
и необязательное поле \`verified\`.

Класс \`Customers\` при переборе с помощью \`for of\` должен учитывать только объекты у которых был установлен флаг \`verified: true\`.

**Обратите внимание**:

1. Использование генераторов **запрещено**.
2. Использование посторонних библиотек **запрещено**
3. У класса \`Customers\` **должен** быть метод \`Symbol.iterator\`

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

    [Symbol.iterator]() {
        let i = 0;
        const sortedList = this.#listObjects.filter( el => el.verified);
        return {
            next: () => {
                const done = i >= sortedList.length;
                const value = !done ? sortedList[i] : undefined;
                i++;
                return {
                    done, value
                };
            }
        };
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
