import { lesson_2 } from './lesson_2';
import { lesson_3 } from './lesson_3';
import { lesson_4 } from './lesson_4';
import { lesson_5 } from './lesson_5';
import { lesson_6 } from './lesson_6';
import { lesson_7 } from './lesson_7';
import { lesson_14 } from './lesson_14';
import { lesson_15 } from './lesson_15';


type Task = {
    taskNumber: number,
    taskDescription: string,
    code: string
}

type Lessons = {
    title: string,
    tasks: Task[]
}

export const lessons: Lessons[] = [
    lesson_2,
    lesson_3,
    lesson_4,
    lesson_5,
    lesson_6
    lesson_7,
    lesson_14,
    lesson_15,
];
