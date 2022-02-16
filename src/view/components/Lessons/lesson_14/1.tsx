/**
Задача 1.

Дан базовый класс робота-уборщика.

Добавьте роботу функционал употребления энергии:
 - при начале уборки уровень энергии должен уменьшиться;
 - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.

Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
В если уборка остановлена раньше времени завершения,
onReady сработать не должен, а также нужно вывести другое сообщение.

Условия:
 - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 - использовать функцию clearTimeout;
 - идентификатор таймера нужно хранить в приватной переменной конструктора.
 */


// const CleanerRobot: CleanerRobotConstructor = function(
//     this: ICleanerRobot,
//     initialEnergy: number = 0 /* Изначальный заряд батареи робота */,
//     cleaningSquare: number /* Площадь для уборки в метрах. */,
// ) {
//     let energy = initialEnergy;
//     let timerId = 0;
//     const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
//     const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
//     const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
//     const onReady = () => console.log(`Уборка завершена. Осталось заряда батареи: ${energy}.`);

//     this.clean = () => {
//         const cleaningTime = getCleaningTime();

//         console.log(
//             `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
//         );

//         energy -= cleaningTime * ENERGY_CONSUMPTION;

//         /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
//         timerId = setTimeout(onReady, cleaningTime * 1000);
//     };

//     // Решение
//     this.stop = () => {
//         console.log(`Уборка завершена досрочно. Осталось заряда батареи: ${energy}`);
//         clearTimeout(timerId);
//     };
// };


// exports.CleanerRobot = CleanerRobot;

class CleanerRobot {
    initialEnergy;
    cleaningSquare;
    private energy: number;
    private timerId: number | ReturnType<typeof setTimeout> = 0;
    private readonly ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
    private readonly CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */

    constructor(initialEnergy: number, cleaningSquare: number) {
        this.initialEnergy = initialEnergy;
        this.cleaningSquare = cleaningSquare;
        this.energy = initialEnergy;
    }


    getCleaningTime = () => this.cleaningSquare / this.CLEANING_SPEED;
    onReady = () => console.log(`Уборка завершена. Осталось заряда батареи: ${this.energy}.`);

    clean() {
        const cleaningTime = this.getCleaningTime();

        console.log(
            `Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`,
        );

        this.energy -= cleaningTime * this.ENERGY_CONSUMPTION;

        /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
        this.timerId = setTimeout(this.onReady, cleaningTime * 1000);
    }

    // Решение
    stop = () => {
        console.log(`Уборка завершена досрочно. Осталось заряда батареи: ${this.energy}`);
        if (typeof this.timerId === 'number') {
            clearTimeout(this.timerId);
        }
    };
}


const cleanerRobot = new CleanerRobot(50, 45);
cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

/* Спустя 4.5 секунды: Уборка завершена. Осталось заряда батареи: 45.5. */

setTimeout(() => {
    cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
}, 1000);

export const taskNumber = 1;

export const taskDescription = `Задача 1.

Дан базовый класс робота-уборщика.

Добавьте роботу функционал употребления энергии:
 - при начале уборки уровень энергии должен уменьшиться;
 - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.

Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
В если уборка остановлена раньше времени завершения,
onReady сработать не должен, а также нужно вывести другое сообщение.

Условия:
 - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 - использовать функцию clearTimeout;
 - идентификатор таймера нужно хранить в приватной переменной конструктора.`;


export const code = `function CleanerRobot(
    initialEnergy = 0 /* Изначальный заряд батареи робота */,
    cleaningSquare /* Площадь для уборки в метрах. */,
) {
    let energy = initialEnergy;
    let timerId = 0;
    const ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
    const CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */
    const getCleaningTime = () => cleaningSquare / CLEANING_SPEED;
    const onReady = () =>
        console.log(\`Уборка завершена. Осталось заряда батареи: \${energy}.\`);

    this.clean = () => {
        const cleaningTime = getCleaningTime();

        console.log(
            \`Начинаю процесс уборки. Время уборки: \$\{cleaningTime} часов.\`,
        );

        energy -= cleaningTime * ENERGY_CONSUMPTION;

        /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
        timerId = setTimeout(onReady, cleaningTime * 1000);
    };

    // Решение
    this.stop = () => {
        console.log(\`Уборка завершена досрочно. Осталось заряда батареи: \${energy}\`);
        clearTimeout(timerId);
    }
}

const cleanerRobot = new CleanerRobot(50, 45);
cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

/* Спустя 4.5 секунды: Уборка завершена. Осталось заряда батареи: 45.5. */

setTimeout(() => {
    cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
}, 1000);`;
