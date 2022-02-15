/*
Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.

-   В качестве структуры данных использовать `Map`.
-   Метод `create`:
-   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
-   -   возвращает `id`
-   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
-   Метод `read`:
-   -   принимает идентификатор пользователь
-   -   если такого пользователя нет возвращать `null`
-   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
-   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
-   Метод `readAll`:
-   -   возвращает массив пользователей
-   -   генерировать ошибку если в метод `readAll` передан параметр
-   Метод `update`:
-   -   обновляет пользователя
-   -   принимает 2 обязательных параметра
-   -   генерирует ошибку если передан несуществующий `id`
-   -   генерирует ошибку если передан `id` с типом не строка
-   -   генерирует ошибку если второй параметр не валидный
-   Метод `delete`:
-   -   удаляет пользователя
-   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`

```javascript
*/


class DB {
    static #id = 0;
    #setIds = new Set();
    #usersMap = new Map();

    #setId() {
        DB.#id += 1;
    }

    getId() {
        return DB.#id;
    }

    create(person) {
        if (Object.prototype.toString.call(person) !== '[object Object]') {
            throw new Error('Argument should be an Object');
        }
        if (!person.name || typeof person.name !== 'string') {
            throw new Error('Name is required field and should be type of String.');
        }
        if (!person.age || typeof person.age !== 'number') {
            throw new Error('Age is required field and should be type of Number.');
        }
        if (!person.country || typeof person.country !== 'string') {
            throw new Error('Country is required field and should be type of String.');
        }
        if (!person.salary || typeof person.salary !== 'number') {
            throw new Error('Salary is required field and should be type of Number.');
        }

        this.#setId();
        while (this.#setIds.has(this.getId())) {
            this.#setId();
        }
        this.#setIds.add(this.getId());

        const user = {
            id: String(this.getId()),
            ...person,
        };
        this.#usersMap.set(user.id, user);

        return user.id;
    }

    read(id) {
        if (!id || typeof id !== 'string') {
            throw new Error('Wrong Id type.');
        }

        return this.#usersMap.get(id) ? this.#usersMap.get(id) : null;
    }

    readAll() {
        if (arguments[ 0 ]) {
            throw new Error('Function doesn\'t accept any arguments.');
        }

        return [ ...this.#usersMap.values() ];
    }

    update(id, data) {
        if (typeof id !== 'string') {
            throw new Error('Id should be type of String.');
        }
        if (!this.#usersMap.has(id)) {
            throw new Error('This Id doesn\'t exist.');
        }
        const user = this.#usersMap.get(id);
        const userKeys = Object.keys(user);
        if (Object.prototype.toString.call(data) !== '[object Object]'
           || Object.keys(data).some((el) => !userKeys.includes(el))) {
            throw new Error('Second argument not valid.');
        }
        this.#usersMap.set(id, { ...user, ...data });
    }

    delete(id) {
        if (!this.#usersMap.has(id)) {
            throw new Error('This Id doesn\'t exist.');
        }
        this.#usersMap.delete(id);
    }
}

const db = new DB();

const person = {
    name:    'Pitter', // обязательное поле с типом string
    age:     21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary:  500, // обязательное поле с типом number
};

const person1 = {
    name:    'Pitter', // обязательное поле с типом string
    age:     21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary:  500, // обязательное поле с типом number
};

db.create(person1);
const id = db.create(person);
const customer = db.read(id);
// console.log(customer);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
console.log(customers);
db.delete(id); // true


export const taskNumber = 1;

export const taskDescription = `Задача 1

Создать класс \`DB\` который будет имплементировать \`CRUD\` модель.

-   В качестве структуры данных использовать \`Map\`.
-   Метод \`create\`:
-   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
-   -   возвращает \`id\`
-   -   при создании пользователя генерирует уникальный \`id\`, который является ключом для объекта пользователя в структуре \`Map\`
-   Метод \`read\`:
-   -   принимает идентификатор пользователь
-   -   если такого пользователя нет возвращать \`null\`
-   -   если есть — возвращать объект пользователя с полем \`id\` внутри объекта.
-   -   если в метод \`read\` передать не строку, или не передать параметр вообще — генерировать ошибку.
-   Метод \`readAll\`:
-   -   возвращает массив пользователей
-   -   генерировать ошибку если в метод \`readAll\` передан параметр
-   Метод \`update\`:
-   -   обновляет пользователя
-   -   принимает 2 обязательных параметра
-   -   генерирует ошибку если передан несуществующий \`id\`
-   -   генерирует ошибку если передан \`id\` с типом не строка
-   -   генерирует ошибку если второй параметр не валидный
-   Метод \`delete\`:
-   -   удаляет пользователя
-   -   Генерировать ошибку если передан в метод \`delete\` несуществующий или невалидный \`id\`

`;

export const code = `class DB {
    static #id = 0;
    #setIds = new Set();
    #usersMap = new Map();

    #setId() {
        DB.#id += 1;
    }
    getId() {
        return DB.#id;
    }

    create(person) {
        if (Object.prototype.toString.call(person) !== '[object Object]') {
            throw new Error('Argument should be an Object');
        }
        if (!person.name || typeof person.name !== 'string') {
            throw new Error('Name is required field and should be type of String.');
        }
        if (!person.age || typeof person.age !== 'number') {
            throw new Error('Age is required field and should be type of Number.');
        }
        if (!person.country || typeof person.country !== 'string') {
            throw new Error('Country is required field and should be type of String.');
        }
        if (!person.salary || typeof person.salary !== 'number') {
            throw new Error('Salary is required field and should be type of Number.');
        }

        this.#setId();
        while (this.#setIds.has(this.getId())) {
            this.#setId();
        }
        this.#setIds.add(this.getId());

        const user = {
            id: String(this.getId()),
            ...person
        };
        this.#usersMap.set(user.id, user);
        return user.id
    }
    
    read(id) {
        if (!id || typeof id !== 'string') {
            throw new Error('Wrong Id type.');
        }
        return this.#usersMap.get(id) ? this.#usersMap.get(id) : null;
    }

    readAll() {
        if (arguments[0]) {
            throw new Error('Function doesn\'t accept any arguments.');
        }
        return [...this.#usersMap.values()];
    }

    update(id, data) {
        if (typeof id !== 'string') {
            throw new Error('Id should be type of String.');
        }
        if (!this.#usersMap.has(id)) {
            throw new Error('This Id doesn\'t exist.');
        }
        const user = this.#usersMap.get(id);
        const userKeys = Object.keys(user);
        if (Object.prototype.toString.call(data) !== '[object Object]'
           || Object.keys(data).some( el => !userKeys.includes(el))) {
               
            throw new Error('Second argument not valid.');
        }
        this.#usersMap.set(id, { ...user, ...data });
    }

    delete(id) {
        if (!this.#usersMap.has(id)) {
            throw new Error('This Id doesn\'t exist.');
        }
        this.#usersMap.delete(id);
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const person1 = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

db.create(person1);
const id = db.create(person);
const customer = db.read(id);
// console.log(customer);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
console.log(customers);
db.delete(id); // true

`;

