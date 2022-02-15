/**
Задача 3

Перепишите код, заменив оператор `switch` на оператор `if..else`:

*/
const value: string = 'c';

// switch (value) {
//     case 'a':
//         console.log('a');
//         break;

//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//         console.log('others');
//         break;

//     default:
//         console.log('unknown');
// }

if (value === 'a') {
    console.log('a');
} else if (value === 'b' || value === 'c' || value === 'd' || value === 'e') {
    console.log('other');
} else {
    console.log('unknown');
}


export const taskNumber = 3;

export const taskDescription = `Задача 3

Перепишите код, заменив оператор \`switch\` на оператор \`if..else\`:

`;

export const code = `const value = 'c';


// switch (value) {
//     case 'a':
//         console.log('a');
//         break;

//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//         console.log('others');
//         break;

//     default:
//         console.log('unknown');
// }

if (value === 'a') {
    console.log('a');
} else if (value === 'b' || value === 'c' || value === 'd' || value === 'e') {
    console.log('other');
} else {
    console.log('unknown');
}

`;
