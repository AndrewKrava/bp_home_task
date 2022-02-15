/**
Задача 2.

Создайте функцию createFibonacciGenerator(),
которая вернёт ещё одну функцию,
каждый вызов которой будет возвращать число из последовательности Фибоначчи.

Условия:
    - Задачу нужно решить с помощью замыкания.
 */

// Решение

function createFibonacciGenerator() {
    const fibArr = [ 0 ];

    return () => {
        let newNum: number = 0;
        if (fibArr.length - 2 > 0) {
            newNum = fibArr[ fibArr.length - 1 ] + fibArr[ fibArr.length - 2 ];
        } else {
            newNum = 1;
        }
        fibArr.push(newNum);

        return newNum;
    };
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

// exports.createFibonacciGenerator = createFibonacciGenerator;


export const taskNumber = 2;

export const taskDescription = `Задача 2.
 
Создайте функцию createFibonacciGenerator(),
которая вернёт ещё одну функцию,
каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 
Условия:
    - Задачу нужно решить с помощью замыкания.

`;

export const code = `// Решение

function createFibonacciGenerator() {
    const fibArr = [0];
    return () => {
        let newNum;
        if (fibArr.length - 2 > 0) {
            newNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        } else {
            newNum = 1;
        }
        fibArr.push(newNum);
        return newNum;
    }
}

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

`;
