/**
Задача 1.

Создайте функцию shallowMerge.
Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
Свойства необходимо копировать лишь на один уровень каждого их объектов.

Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.

Условия:
    - Встроенный метод Object.create() использовать запрещено;
    - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
    - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

interface User {
    [key: string]: any
}
interface UserData {
    [key: string]: any
}

function shallowMerge(user: User, userData: UserData) {
    const resultObj = {};
    const userDescriptors = Object.getOwnPropertyDescriptors(user);
    const userDataDescriptors = Object.getOwnPropertyDescriptors(userData);
    Object.defineProperties(resultObj, { ...userDescriptors, ...userDataDescriptors });

    return resultObj;
}

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);


console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }

console.log(Object.getOwnPropertyDescriptor(result, 'firstName')?.writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job')?.configurable); // false


// exports.shallowMerge = shallowMerge;

export const taskNumber = 1;

export const taskDescription = `Задача 1.
 
Создайте функцию shallowMerge.
Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
Свойства необходимо копировать лишь на один уровень каждого их объектов.
 
Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 
Условия:
    - Встроенный метод Object.create() использовать запрещено;
    - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
    - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.

`;

export const code = `function shallowMerge(user, userData) {
    const resultObj = {};
    const userDescriptors = Object.getOwnPropertyDescriptors(user);
    const userDataDescriptors = Object.getOwnPropertyDescriptors(userData);
    Object.defineProperties(resultObj, {...userDescriptors, ...userDataDescriptors});
    return resultObj;
}

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

`;
