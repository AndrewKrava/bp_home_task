// Core
import React, { FC, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Components
import { lessons } from '../../components';
import { JsPlayground, Select } from '../../elements';

// Types
type PropTypes = {

}

// move to global types??
type Task = {
    taskNumber: number;
    code: string;
    taskDescription: string;
}


export const Jscontainer: FC<PropTypes> = () => {
    // const [ lessonTitle, setLessonTitle ] = useState<string | null>(null);   // remove??
    // eslint-disable-next-line max-len
    const [ taskList, setTaskList ] = useState<Task[] | null>(null);
    // const [ taskNumber, setTaskNumber ] = useState<number | null>(null);     //remove
    const [ task, setTask ] = useState<Task | null>(null);

    function lessonChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const lesson = lessons.find((lesson) => lesson.title === event.target.value);

        if (lesson) {
            setTask(null);
            setTaskList(lesson?.tasks);
        }
    }

    function taskChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        if (taskList) {
            const task = taskList?.find((task) => task.taskNumber === Number(event.target.value));
            if (task) {
                setTask(task);
            }
        }
    }

    function setDeafaultValue(val: string | number): string | number {
        // eslint-disable-next-line no-extra-boolean-cast
        return !!val ? val : 'Select your option !!!';
    }


    return (
        <S.Container>
            Container: Jscontainer

            <Select
                cb = { lessonChangeHandler }
                defaultSelected = { !taskList }
                selectIdName = 'choose-lesson'
                selectOptions = { lessons.map((lesson) => lesson.title) }
                selectTitle = 'Choose a lesson:'
            />

            {
                taskList
                    ? (
                        <Select
                            cb = { taskChangeHandler }
                            defaultSelected = { !task }
                            selectIdName = 'choose-task'
                            selectOptions = { taskList.map((task) => task.taskNumber) }
                            selectTitle = 'Choose a task:'
                        />
                    )
                    : null
            }

            {
                task
                    ? <JsPlayground task = { task } />
                    : null
            }


        </S.Container>
    );
};
