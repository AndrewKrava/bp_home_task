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


export const Jscontainer: FC<PropTypes> = () => {
    const [ lesson, setLesson ] = useState<Task[] | null>(null);
    const [ task, setTask ] = useState<Task | null>(null);
    const [ shouldUseDefault, setShouldUseDefault ] = useState(true);

    const lessonChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lesson = lessons.find((lesson) => lesson.title === event.target.value);

        if (lesson) {
            setTask(null);
            setShouldUseDefault(true);
            setLesson(lesson?.tasks);
        }
    };

    const taskChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (lesson) {
            const task = lesson?.find((task) => task.taskNumber === Number(event.target.value));
            if (task) {
                if (shouldUseDefault) {
                    setShouldUseDefault(false);
                }
                setTask(task);
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
                                shouldUseDefault = { shouldUseDefault }
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
