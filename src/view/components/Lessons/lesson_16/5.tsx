/**
Задача 6.
 *
Реализуйте класс Student , который наследует от класса User.

Класс User должен обладать следующими свойствами:
    - firstName — имя;
    - lastName — фамилия;
    - getName() — метод, который возвращает имя и фамилию пользователя.

Класс Student должен обладать следующими свойствами:
    - year — год поступления в вуз;
    - getCourse() - метод, который возвращает текущий курс студента (от 1 до 5).

Курс, на котором учится студент вычисляется так: нужно от текущего года отнять год поступления в вуз.
Текущий год получите самостоятельно.

Условия:
    - Реализация решения — это синтаксис современных классов JavaScript;
    - В реализации работы метода getCourse обязательно использовать конструктор Date.
 */

// Решение

class User {
    firstName;
    lastName;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends User {
    year;
    constructor(firstName: string, lastName: string, year: number) {
        super(firstName, lastName);
        this.year = year;
    }

    getCourse() {
        const currYear = new Date().getFullYear();

        return currYear - this.year;
    }
}

const student = new Student('Water', 'White', 2015);

console.log(student.getName()); // Walter White
console.log(student.getCourse()); // 4

// exports.User = User;
// exports.Student = Student;

export const taskNumber = 5;

export const taskDescription = `Задача 6.

Реализуйте класс Student , который наследует от класса User.

Класс User должен обладать следующими свойствами:
   - firstName — имя;
   - lastName — фамилия;
   - getName() — метод, который возвращает имя и фамилию пользователя.

Класс Student должен обладать следующими свойствами:
   - year — год поступления в вуз;
   - getCourse() - метод, который возвращает текущий курс студента (от 1 до 5).

Курс, на котором учится студент вычисляется так: нужно от текущего года отнять год поступления в вуз.
Текущий год получите самостоятельно.

Условия:
   - Реализация решения — это синтаксис современных классов JavaScript;
   - В реализации работы метода getCourse обязательно использовать конструктор Date.

`;

export const code = ` // Решение

class User {
    constructor(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
    }
    getName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends User {
    constructor(firstName, lastName, year) {
       super(firstName, lastName);
       this.year = year;
    }
    getCourse() {
        const currYear = new Date().getFullYear();
        return currYear - this.year;
    }
}

const student = new Student('Water', 'White', 2015);

console.log(student.getName()); // Walter White
console.log(student.getCourse()); // 4

`;
