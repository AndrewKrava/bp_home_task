/**
Задача 1.

Напишите имплементацию функции Function.prototype.bind().

Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
и возвращать новую, привязанную версию целевой функции.

Функция bind() должна обладать следующими параметрами:
    - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
    - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
    - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.

Генерировать ошибки если:
    - Первый параметр не является типом function;
    - Второй параметр не является типом object;
    - Второй параметр является массивом.

Условия:
    - Использовать встроенную функцию Function.prototype.bind() запрещено.
 */

// Решение

function bind(fn: Function, obj: object, ...rest: string[]) {
    return () => fn.call(obj, ...rest);
}


function getName(this: {name: string}, greeting: string, message: string) {
    return `${greeting} ${message} ${this.name}.`;
}


const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hexllo! I am Oliver.

// exports.bind = bind;

export const taskNumber = 1;

export const taskDescription = `Задача 1.
 
Напишите имплементацию функции Function.prototype.bind().
 
Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
и возвращать новую, привязанную версию целевой функции.
 
Функция bind() должна обладать следующими параметрами:
    - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
    - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
    - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.
 
Генерировать ошибки если:
    - Первый параметр не является типом function;
    - Второй параметр не является типом object;
    - Второй параметр является массивом.
 
Условия:
    - Использовать встроенную функцию Function.prototype.bind() запрещено.

`;

export const code = `function bind(fn, obj, ...rest) {
    if (typeof fn !== 'function') {
        throw new Error('First argument should be a Function.');
    }
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        throw new Error('Second argument should be an Object.');
    }
    return () => fn.call(obj, ...rest);
}


function getName(greeting, message) {
    return \`\${greeting} \${message} \${this.name}.\`;
}


const user = { name: 'Walter', getName };
const oliver = { name: 'Oliver' };

const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
console.log(boundedGetName()); // Hexllo! I am Oliver.

`;
