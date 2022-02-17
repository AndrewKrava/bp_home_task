/*
Задача 4

Создайте класс `Countries` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

У класса `Countries` должен быть один метод `send` который должен возвращать промис.

А принимает метод `send` один параметр который должен быть по типу `number` и который потом будет использоваться как значение для `GET` query-параметра `size`.

**Обратите внимание**:

1. Метод `send` должен возвращать промис.
2. Использование `async & await` внутри класса **запрещено**.
3. Использование посторонних библиотек кроме библиотеки `fetch` **запрещено**
4. Если сервер ответил статус кодом `200` промис **должен** возвращать массив который содержит список объектов-стран.
5. В том случае если сервер ответил статус кодом не `200` промис **должен** генерировать ошибку с текстом `We have error, status code: ${statusCode}`
6. Генерировать ошибку если `url` по типу не строка.
7. Генерировать ошибку если методу `send` передать по типу не число.

**В результате такой код должен работать**:

```javascript
*/

class Countries {
    endpoint;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    send(size: number) {
        const url = this.endpoint + '?_page=0&_limit=' + size;

        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => {
                    if (res.ok) {
                        resolve(res.json());
                    } else {
                        resolve(new Error(`We have error, status code: ${res.status}`));
                    }
                })
                .catch((error) => {
                    reject(new Error(`We have error, ${error}`));
                });
        });
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';
const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // массив стран
    } catch (error) {
        console.log(error);
    }
})();


export const taskNumber = 4;

export const taskDescription = `Задача 4

Создайте класс \`Countries\` который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

У класса \`Countries\` должен быть один метод \`send\` который должен возвращать промис.

А принимает метод \`send\` один параметр который должен быть по типу \`number\` и который потом будет использоваться 
как значение для \`GET\` query-параметра \`size\`.

**Обратите внимание**:

1. Метод \`send\` должен возвращать промис.
2. Использование \`async & await\` внутри класса **запрещено**.
3. Использование посторонних библиотек кроме библиотеки \`fetch\` **запрещено**
4. Если сервер ответил статус кодом \`200\` промис **должен** возвращать массив который содержит список объектов-стран.
5. В том случае если сервер ответил статус кодом не \`200\` промис **должен** генерировать ошибку с текстом \`We have error, status code: \${statusCode}\`
6. Генерировать ошибку если \`url\` по типу не строка.
7. Генерировать ошибку если методу \`send\` передать по типу не число.

`;

export const code = `class Countries {
    constructor(endpoint) {
        if (typeof endpoint !== 'string') {
            throw new Error('Endpoint should be a String.');
        }
        this.endpoint = endpoint;
    }
    send(size) {
        if (typeof size !== 'number') {
            throw new Error('Argument should be a Number.');
        }
        const url = this.endpoint + '?_page=0&_limit=' + size;
        return new Promise( (resolve, reject) => {
            window.fetch(url)
                .then((res) => {
                    if (res.ok) {
                        resolve(res.json());
                    } else {
                        resolve(\`We have error, status code: \${ res.status }\`);
                    }
                })
                .catch((error) => {
                    reject(\`We have error, \${ error }\`);
                });
        });
    }
}


const url = 'https://jsonplaceholder.typicode.com/posts';

const countries = new Countries(url);
countries.send(5)
    .then((res) => console.log('res: ', res))
    .catch((error) => console.log('err', error));
`;
