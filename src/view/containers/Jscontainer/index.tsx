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
    // eslint-disable-next-line max-len
    const [ taskList, setTaskList ] = useState<Task[] | null>(null);
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

    return (
        <S.Container>
            <div className = 'container-title'>
                Container: Jscontainer
            </div>

            <div className = 'select-options'>

                <Select
                    cb = { lessonChangeHandler }
                    defaultSelected = { !!taskList }
                    selectIdName = 'choose-lesson'
                    selectOptions = { lessons.map((lesson) => lesson.title) }
                    selectTitle = 'Choose a lesson:'
                />

                {
                    taskList
                        ? (
                            <Select
                                cb = { taskChangeHandler }
                                defaultSelected = { !!task }
                                selectIdName = 'choose-task'
                                selectOptions = { taskList.map((task) => task.taskNumber) }
                                selectTitle = 'Choose a task:'
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
