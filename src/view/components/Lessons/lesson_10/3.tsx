/**
Задача 3.

Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.

После отлова ошибки перейдите к выполнению следующего коллбека.

Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
- свойство `value` содержит результат вычисления всех функций из цепочки;
- свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
    - index — индекс коллбека, на котором ошибка была возбуждена;
    - name — имя ошибки;
    - message — сообщение ошибки.

Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.

Поэтому, для продолжения цепочки выполнения
необходимо брать результат последней успешно выполненной функции-коллбека.

Генерировать ошибки если:
    - Любой из аргументов не является функцией.
 */

// Решение

interface IError {
    index?: number
    name?: string
    message?: string
}

interface IResult {
    value?: number
    errors: IError[]
}


function calculateAdvanced(...args: Function[]): IResult {
    const arrFn = [ ...args ];
    const result: IResult = { errors: []};

    for (let i = 0; i < arrFn.length; i++) {
        let temp = result.value;
        try {
            if (typeof arrFn[ i ] !== 'function') {
                throw new Error('Every argument should be a Function.');
            }
            if (result.value !== void 0) {
                result.value = arrFn[ i ](result.value);
            } else {
                result.value = arrFn[ i ]();
            }
            if (result.value === void 0) {
                result.value = temp;
                throw new Error(`callback at index ${i} did not return any value.`);
            }
        } catch (error) {
            const errorObj: IError = {};
            errorObj.index = i;
            if (error instanceof Error) {
                errorObj.name = error.name;
                errorObj.message = error.message;
            }

            result.errors.push(errorObj);
        }
    }

    return result;
}

const result = calculateAdvanced(
    () => {},
    () => {
        return 7;
    },
    () => {},
    (prevResult: number) => {
        return prevResult + 4;
    },
    () => {
        throw new RangeError('Range is too big.');
    },
    (prevResult: number) => {
        return prevResult + 1;
    },
    () => {
        throw new ReferenceError('ID is not defined.');
    },
    (prevResult: number) => {
        return prevResult * 5;
    },
);

console.log(result);

// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }


// exports.calculateAdvanced = calculateAdvanced;


export const taskNumber = 3;

export const taskDescription = `Задача 3.
 
Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 
После отлова ошибки перейдите к выполнению следующего коллбека.
 
Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: \`value\` и \`errors\`:
- свойство \`value\` содержит результат вычисления всех функций из цепочки;
- свойство \`errors\` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
    - index — индекс коллбека, на котором ошибка была возбуждена;
    - name — имя ошибки;
    - message — сообщение ошибки.
 
Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 
Поэтому, для продолжения цепочки выполнения
необходимо брать результат последней успешно выполненной функции-коллбека.
 
Генерировать ошибки если:
    - Любой из аргументов не является функцией.

`;

export const code = `function calculateAdvanced() {
    const arrFn = [...arguments];
    const result = { errors: [] };

    for (let i = 0; i < arrFn.length; i++) {
        let temp = result.value;
        try {
            if (typeof arrFn[i] !== "function") {
                throw new Error("Every argument should be a Function.");
            }
            if (result.value !== undefined) {
                result.value = arrFn[i](result.value);
            } else {
                result.value = arrFn[i]();
            }
            if (result.value === undefined) {
                result.value = temp;
                throw new Error(\`callback at index \${i} did not return any value.\`);
            }
        } catch (error) {
            const errorObj = {};
            errorObj.index = i;
            errorObj.name = error.name;
            errorObj.message = error.message;
            result.errors.push(errorObj);
        }
    }
    return result;
}

const result = calculateAdvanced(
    () => {},
    () => {
        return 7;
    },
    () => {},
    (prevResult) => {
        return prevResult + 4;
    },
    () => {
        throw new RangeError("Range is too big.");
    },
    (prevResult) => {
        return prevResult + 1;
    },
    () => {
        throw new ReferenceError("ID is not defined.");
    },
    (prevResult) => {
        return prevResult * 5;
    }
);

console.log(result);

// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }

`;
