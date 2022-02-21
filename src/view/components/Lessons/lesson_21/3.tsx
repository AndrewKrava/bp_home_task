/*
Задача 3

Создайте функцию `send` которая будет оберткой для функции `get` которая поддерживает только `callback` технологию.

**Обратите внимание**:

1. Функция `send` должна возвращать промис;
2. Использование `async & await` **запрещено**.
3. Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
4. Использование посторонних библиотек кроме [библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
5. Если сервер ответил статус кодом `200` промис **должен** резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
6. В том случае если сервер ответил статус кодом не `200` промис **должен** реджектится с текстом `We have error, status code: ${statusCode}`

**До рефакторинга**:

```javascript
*/

function send(url: string) {
    return new Promise((resolve, reject) => {
        window.fetch(url)
            .then((res) => {
                if (res.ok) {
                    resolve(res.json());
                } else {
                    reject(new Error(`We have error, status code: ${ res.status }`));
                }
            })
            .catch((error) => {
                reject(new Error(`We have error, ${error}`));
            });
    });
}


const url = 'https://jsonplaceholder.typicode.com/users';
send(url)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


export const taskNumber = 3;

export const taskDescription = `Задача 3

Создайте функцию \`send\` которая будет оберткой для функции \`get\` которая поддерживает только \`callback\` технологию.

**Обратите внимание**:

1. Функция \`send\` должна возвращать промис;
2. Использование \`async & await\` **запрещено**.
3. Нужно использовать библиотеку для отправки запросов [fetch](https://github.com/andris9/fetch)
4. Использование посторонних библиотек кроме [библиотеки fetch](https://github.com/andris9/fetch) **запрещено**.
5. Если сервер ответил статус кодом \`200\` промис **должен** резолвиться с параметром, аргументом для которого 
   будет массив который содержит список объектов-стран.
6. В том случае если сервер ответил статус кодом не \`200\` промис **должен** реджектится с текстом \`We have error, status code: \${statusCode}\`


`;


export const code = `function send(url) {
    return new Promise( (resolve, reject) => {
        window.fetch(url)
            .then(res => {
                if (res.ok) {
                    resolve(res.json());
                } else {
                   reject(\`We have error, status code: \${ res.status }\`);
                }
            })
            .catch((error) => {
                reject(\`We have error, \${error}\`); 
            });
    })        
}            


const url = 'https://jsonplaceholder.typicode.com/users';
send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

`;
