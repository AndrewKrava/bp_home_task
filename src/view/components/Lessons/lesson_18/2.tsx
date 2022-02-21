/*
Задача 2

Улучшить класс `DB` из предыдущей задачи.

-   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
-   Генерировать ошибку, если query не валидный
-   Поля `name` и `country` ищут 100% совпадение
-   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
-   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса

```javascript
*/

interface Person {
    name?: string
    age?: number
    country?: string
    salary?: number
}

interface QueryString {
    id?: string
    name?: string
    country?: string
    age?: {min?: number, max?: number}
    salary?: { min?: number, max?: number}
}


class DB {
    private static id = 0;
    private setIds = new Set();
    private usersMap = new Map<string, Person>();

    private setId() {
        DB.id += 1;
    }

    getId() {
        return String(DB.id);
    }

    create(person: Required<Person>) {
        this.setId();
        while (this.setIds.has(this.getId())) {
            this.setId();
        }
        this.setIds.add(this.getId());

        const user = {
            id: String(this.getId()),
            ...person,
        };
        this.usersMap.set(user.id, user);

        return user.id;
    }

    read(id: string) {
        if (!id) {
            throw new Error('Wrong Id.');
        }

        return this.usersMap.get(id) ? this.usersMap.get(id) : null;
    }

    readAll(): Person[] {
        return [ ...this.usersMap.values() ];
    }

    update(id: string, data: Person) {
        if (!this.usersMap.has(id)) {
            throw new Error('This Id doesn\'t exist.');
        }
        const user = this.usersMap.get(id);
        let userKeys: string[] = [];
        if (user !== void 0) {
            userKeys = Object.keys(user);
        }
        if (Object.prototype.toString.call(data) !== '[object Object]'
            || Object.keys(data).some((el) => !userKeys.includes(el))) {
            throw new Error('Second argument not valid.');
        }
        this.usersMap.set(id, { ...user, ...data });
    }

    delete(id: string) {
        if (!this.usersMap.has(id)) {
            throw new Error('This Id doesn\'t exist.');
        }
        this.usersMap.delete(id);
    }

    find(query: QueryString) {
        const userKeys = [ 'id', 'name', 'age', 'country', 'salary' ];
        if (Object.prototype.toString.call(query) !== '[object Object]'
            || Object.keys(query).some((el) => !userKeys.includes(el))) {
            throw new Error('Query not valid.');
        }
        const resultUsers: Person[] = [];
        [ ...this.usersMap.values() ].forEach((el) => {
            if (query.name && query.name === el.name) {
                resultUsers.push(el);
            } else if (query.country && query.country === el.country) {
                resultUsers.push(el);
            } else if (query.age?.min && el.age && query.age.min <= el.age
                && query.age.max && query.age.max >= el.age) {
                resultUsers.push(el);
                console.log('age');
            } else if (query.salary?.min && el.salary && query.salary.min <= el.salary
                && query.salary.max && query.salary.max >= el.salary) {
                resultUsers.push(el);
            } else if (query.age?.min && el.age && query.age.min <= el.age && !query.age.max) {
                resultUsers.push(el);
            } else if (query.age?.max && el.age && query.age.max >= el.age && !query.age.min) {
                resultUsers.push(el);
            } else if (query.salary?.min && el.salary && query.salary.min <= el.salary && !query.salary.max) {
                resultUsers.push(el);
            } else if (query.salary?.max && el.salary && query.salary.max >= el.salary && !query.salary.min) {
                resultUsers.push(el);
            }
        });

        return resultUsers;
    }
}

const query = {
    country: 'ua',
    age:     {
        min: 21,
    },
    salary: {
        min: 400,
        max: 600,
    },
};

const db = new DB();
const person1 = {
    name:    'Pitter', // обязательное поле с типом string
    age:     20, // обязательное поле с типом number
    country: 'uav', // обязательное поле с типом string
    salary:  500, // обязательное поле с типом number
};

db.create(person1);

const customers = db.find(query); // массив пользователей

console.log(customers);


export const taskNumber = 2;

export const taskDescription = `Задача 2

Улучшить класс \`DB\` из предыдущей задачи.

-   Добавить метод \`find\`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
-   Генерировать ошибку, если query не валидный
-   Поля \`name\` и \`country\` ищут 100% совпадение
-   Поля \`age\` и \`salary\` принимают объект в котором должны быть или 2 параметра \`min\` и \`max\` или хотя-бы один из них
-   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса

`;

export const code = `class DB {
    static #id = 0;
    #setIds = new Set();
    #usersMap = new Map();

    _setId() {
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

        this._setId();
        while (this.#setIds.has(this.getId())) {
            this._setId();
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
            throw new Error('Function does not accept any arguments.');
        }
        return [...this.#usersMap.values()];
    }

    update(id, data) {
        if (typeof id !== 'string') {
            throw new Error('Id should be type of String.');
        }
        if (!this.#usersMap.has(id)) {
            throw new Error('This Id does not exist.');
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
            throw new Error('This Id does not exist.');
        }
        this.#usersMap.delete(id);
    }

    find(query) {

        const userKeys = ['id', 'name', 'age', 'country', 'salary'];
        if (Object.prototype.toString.call(query) !== '[object Object]'
            || Object.keys(query).some( el => !userKeys.includes(el))) {

            throw new Error('Query not valid.');
        }
        const resultUsers = [];
        [...this.#usersMap.values()].forEach( el => {
            if (query?.name && query?.name === el.name) {
                resultUsers.push(el);
            } else if (query?.country && query?.country === el.country) {
                resultUsers.push(el);
            } else if (query?.age?.min && query?.age?.min <= el.age 
                && query?.age?.max && query?.age?.max >= el.age) {
                    resultUsers.push(el);
                    console.log('age');
            } else if (query?.salary?.min && query?.salary?.min <= el.salary 
                && query?.salary?.max && query?.salary?.max >= el.salary) {
                    resultUsers.push(el);
            } else if (query?.age?.min <= el.age && !query?.age?.max) {
                resultUsers.push(el);
            } else if (query?.age?.max >= el.age && !query?.age?.min) {
                resultUsers.push(el);
            }  else if (query?.salary?.min <= el.salary && !query?.salary?.max) {
                resultUsers.push(el);
            } else if (query?.salary?.max >= el.salary && !query?.salary?.min) {
                resultUsers.push(el);
            }
        });
        return resultUsers;
    }
}

const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 400,
        max: 600
    }
};

const db = new DB();
const person1 = {
    name: 'Pitter', // обязательное поле с типом string
    age: 20, // обязательное поле с типом number
    country: 'uav', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

db.create(person1);

const customers = db.find(query); // массив пользователей

console.log(customers);

`;
