// Core
import React, { FC, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Components
import { JsPlayground, Select } from '../../elements';
import { lessons } from '../../components';


// Types
type PropTypes = {

}

// move to global types??
type Task = {
    taskNumber: number;
    code: string;
    taskDescription: string;
}

// TODO Refactor select option
//Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
export const Jscontainer: FC<PropTypes> = () => {
    const [ lesson, setLesson ] = useState<Task[] | null>(null);
    const [ task, setTask ] = useState<Task | null>(null);

    // const [ taskNumber, setTaskNumber ] = useState('Select please');

    const lessonChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lesson = lessons.find((lesson) => lesson.title === event.target.value);

        if (lesson) {
            setTask(null);
            // setTaskNumber('Select please');
            setLesson(lesson?.tasks);
        }
    };

    const taskChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (lesson) {
            const task = lesson?.find((task) => task.taskNumber === Number(event.target.value));
            if (task) {
                setTask(task);
                // setTaskNumber(taskNumber);
            }
        }
    };

    return (
        <S.Container>
            <div className = 'container-title'>
                Container: Jscontainer
            </div>

            <div className = 'select-options'>

                <Select
                    callback = { lessonChangeHandler }
                    selectIdName = 'choose-lesson'
                    selectOptions = { lessons.map((lesson) => lesson.title) }
                    selectTitle = 'Choose a lesson:'
                />

                {
                    lesson
                        ? (
                            <Select
                                callback = { taskChangeHandler }
                                selectIdName = 'choose-task'
                                selectOptions = { lesson.map((task) => task.taskNumber) }
                                selectTitle = 'Choose a task:'
                                // value = { taskNumber }
                            />
                        )
                        : null
                }
            </div>

            <div className = 'playgound-section'>
                {
                    task
                        ? <JsPlayground task = { task } />
                        : null
                }
            </div>


        </S.Container>
    );
};
