/**
Задача 2.
 *
Добавьте роботу геттер и сеттер для приватного свойства energy.
Нужно, чтобы внешний код мог узнать заряд батареи робота.
 *
Условия:
- заданную форму конструктора включая его параметры менять нельзя — можно только дополнять.
 *
Генерировать ошибки если:
    - новый заряд батареи устанавливается в значении меньшем, чем 0;
    - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
    - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.
 */

// function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
//     this.getEnergy = getEnergy;
//     this.setEnergy = setEnergy;

//     const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
//     let energy = null;

//     this.setEnergy(initialEnergy);

//     function getEnergy() {
//         // Решение
//         return energy;
//     }
//     function setEnergy(value) {
//         // Решение
//         if (value < 0) {
//             throw new Error('Energy level can\'t be less then 0.');
//         }
//         if (value > MAX_ENERGY_CAPACITY) {
//             throw new Error(`Energy level can\'t be more then ${MAX_ENERGY_CAPACITY}.`);
//         }
//         energy = value;
//     }
// }

class CleanerRobot {
    initialEnergy;

    private readonly MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    private energy: number = 0;

    constructor(initialEnergy: number) {
        this.initialEnergy = initialEnergy;
        this.robotEnergy = initialEnergy;
    }

    get robotEnergy() {
        // Решение
        return this.energy;
    }

    set robotEnergy(value: number) {
        // Решение
        if (value < 0) {
            throw new Error('Energy level can\'t be less then 0.');
        }
        if (value > this.MAX_ENERGY_CAPACITY) {
            throw new Error(`Energy level can\'t be more then ${this.MAX_ENERGY_CAPACITY}.`);
        }
        this.energy = value;
    }
}

const cleanerRobot = new CleanerRobot(22);

/* Текущий заряд батареи: 22 */
console.log(`Текущий заряд батареи: ${cleanerRobot.robotEnergy}`);

cleanerRobot.robotEnergy = 55;

/* Текущий заряд батареи: 55 */
console.log(`Текущий заряд батареи: ${cleanerRobot.robotEnergy}`);

try {
    // eslint-disable-next-line no-new
    new CleanerRobot(-1);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    if (error instanceof Error) {
        console.log(`${error.name}: ${error.message}`);
    }
}

try {
    cleanerRobot.robotEnergy = -22;
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    if (error instanceof Error) {
        console.log(`${error.name}: ${error.message}`);
    }
}

try {
    cleanerRobot.robotEnergy = 101;
} catch (error) {
    /* Error: New energy level can not be more than 100. */
    if (error instanceof Error) {
        console.log(`${error.name}: ${error.message}`);
    }
}

// exports.CleanerRobot = CleanerRobot;

export const taskNumber = 2;


export const taskDescription = `Задача 2.

Добавьте роботу геттер и сеттер для приватного свойства energy.
Нужно, чтобы внешний код мог узнать заряд батареи робота.

Условия:
    - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять.

Генерировать ошибки если:
    - новый заряд батареи устанавливается в значении меньшем, чем 0;
    - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
    - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.

`;

export const code = `function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
    this.getEnergy = getEnergy;
    this.setEnergy = setEnergy;

    const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    let energy = null;

    this.setEnergy(initialEnergy);

    function getEnergy() {
        // Решение
        return energy;
    }
    function setEnergy(value) {
        // Решение
        if (value < 0) {
            throw new Error('Energy level can not be less then 0.');
        }
        if (value > MAX_ENERGY_CAPACITY) {
            throw new Error(\`Energy level can't be more then \${MAX_ENERGY_CAPACITY}.\`);
        }
        energy = value;
    }
}

const cleanerRobot = new CleanerRobot(22);

/* Текущий заряд батареи: 22 */
console.log(\`Текущий заряд батареи: \${cleanerRobot.getEnergy()}\`);

cleanerRobot.setEnergy(55);

/* Текущий заряд батареи: 55 */
console.log(\`Текущий заряд батареи: \${cleanerRobot.getEnergy()}\`);

try {
    new CleanerRobot(-1);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    console.log(\`\${error.name}: \${error.message}\`);
}

try {
    cleanerRobot.setEnergy(-22);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    console.log(\`\${error.name}: \${error.message}\`);
}

try {
    cleanerRobot.setEnergy(101);
} catch (error) {
    /* Error: New energy level can not be more than 100. */
    console.log(\`\${error.name}: \${error.message}\`);
}

`;
