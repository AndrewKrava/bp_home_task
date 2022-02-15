/**
Задача 4

Перепишите код с использованием одной конструкции `switch`:

*/
const value: number = 2;

if (value === 0) {
    console.log(0);
}

if (value === 1) {
    console.log(1);
}

if (value === 2 || value === 3) {
    console.log('2,3');
}


switch (value) {
    case 0: {
        console.log(0);
        break;
    }

    case 1: {
        console.log(1);
        break;
    }

    case 2:
    case 3: {
        console.log('2,3');
        break;
    }

    default:
        console.log('default');
        break;
}


export const taskNumber = 4;

export const taskDescription = `Задача 4

Перепишите код с использованием одной конструкции \`switch\`:

`;

export const code = `const value = 2;

if (value === 0) {
    console.log(0);
}

if (value === 1) {
    console.log(1);
}

if (value === 2 || value === 3) {
    console.log('2,3');
}


switch (value) {
    case 0: {
        console.log(0);
        break;
    }

    case 1: {
        console.log(1);
        break;
    }

    case 2:
    case 3: {
        console.log('2,3');
        break;
    }

    default:
        console.log('default');
        break;
}

`;
