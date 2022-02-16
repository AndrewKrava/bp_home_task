/*
Задача 2

Создайте функцию `getCustomers` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу `id` и только для объектов у которых установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `getCustomers` должна возвращать промис;
2. Использование `async & await` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве `countries` отсутствует необходимый `id` промис **должен** реджектится с текстом `We don't have information about country for this customer: ${customer.name}`;
5. Склеивание происходит **только** для объектов с флагом `verified: true`.

**Пример использования**:

```javascript
*/

interface ICustomer {
    id: string
    name: string
    verified?: boolean
}
interface ICountries {
    id: string
    country: string
}


function getCustomers(customers: ICustomer[], countries: ICountries[]) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < customers.length; i++) {
            if (customers[ i ].verified) {
                const objToMerge = countries.filter((el) => el.id === customers[ i ].id);
                if (objToMerge.length === 0) {
                    reject(new Error(`We don't have information about country for this customer: ${customers[ i ].name}`));
                }
                customers[ i ] = { ...customers[ i ], ...objToMerge[ 0 ] };
            }
        }
        resolve(customers);
    });
}

const customers = [
    {
        id:       'A1',
        name:     'Oliver',
        verified: true,
    },
    {
        id:   'A2',
        name: 'alex',
    },
];

const countries = [
    {
        id:      'A1',
        country: 'usa',
    },
    {
        id:      'A2',
        country: 'poland',
    },
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch((error) => {
        if (error instanceof Error) {
            console.log('Error: ', error.message);
        }
    });


export const taskNumber = 2;

export const taskDescription = `Задача 2

Создайте функцию \`getCustomers\` которая умеет объединять 2 массива с объектами.

Операция объединения происходит по ключу \`id\` и только для объектов у которых установлен флаг \`verified: true\`.

**Обратите внимание**:

1. Функция \`getCustomers\` должна возвращать промис;
2. Использование \`async & await\` **запрещено**;
3. Использование посторонних библиотек **запрещено**;
4. В том случае если в массиве \`countries\` отсутствует необходимый \`id\` промис **должен** реджектится с текстом 
 \`We don't have information about country for this customer: \${customer.name}\`;
5. Склеивание происходит **только** для объектов с флагом \`verified: true\`.

`;

export const code = `function getCustomers(customers, countries) {
    return new Promise( (resolve, reject) => {

        for (let i = 0; i < customers.length; i++) {
            if (customers[i].verified) {
                const objToMerge = countries.filter( el => el.id === customers[i].id);
                if (objToMerge.length === 0) {
                    reject(\`We don't have information about country for this customer: \${customers[i].name}\`);
                }
                customers[i] = {...customers[i], ...objToMerge[0]};
            }
        }
        resolve(customers);
    });
}

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))

`;
