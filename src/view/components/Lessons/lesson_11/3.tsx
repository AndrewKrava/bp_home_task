/**
Задача 3.

Улучшите функцию createFibonacciGenerator() из предыдущего примера.

Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
    - print — возвращает число из последовательности Фибоначчи;
    - reset — обнуляет последовательность и ничего не возвращает.
 *
Условия:
    - Задачу нужно решить с помощью замыкания.
 */

// Решение

function createFibonacciGenerator() {
    const fibArr = [ 0 ];

    return {
        print: () => {
            let newNum: number = 0;
            if (fibArr.length - 2 > 0) {
                newNum = fibArr[ fibArr.length - 1 ] + fibArr[ fibArr.length - 2 ];
            } else {
                newNum = 1;
            }
            fibArr.push(newNum);

            return newNum;
        },
        reset: () => {
            fibArr.length = 1;
        },
    };
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

// exports.createFibonacciGenerator = createFibonacciGenerator;


export const taskNumber = 3;

export const taskDescription = `Задача 3.
 
Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 
Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
    - print — возвращает число из последовательности Фибоначчи;
    - reset — обнуляет последовательность и ничего не возвращает.
 *
Условия:
    - Задачу нужно решить с помощью замыкания.

`;

export const code = `// Решение

function createFibonacciGenerator() {
    const fibArr = [0];
    return {
        print: () => {
            let newNum;
            if (fibArr.length - 2 > 0) {
                newNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
            } else {
                newNum = 1;
            }
            fibArr.push(newNum);
            return newNum;
        },
        reset: () => {
            fibArr.length = 1;
        }
    };
}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

`;
