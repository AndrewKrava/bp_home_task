// Core
import React, { FC, useState } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {

}


import { lessons } from '../../components';
import { JsPlayground } from '../../elements';

function getLessons() {
    return lessons.map((lesson) => {
        return (
            <option
                key = { lesson.title }
                value = { lesson.title }>{lesson.title}
            </option>
        );
    });
}

export const Jscontainer: FC<PropTypes> = () => {
    const [ lessonTitle, setLessonTitle ] = useState<string>();
    const [ tasksState, setTasksState ] = useState<{code: string, taskDescription: string }[]>();
    const [ taskNumber, setTaskNumber ] = useState<number>();

    function getTasks() {
        if (!tasksState) {
            return null;
        }

        return (
            <div>
                <label htmlFor = 'tasks'>Choose a task:</label>
                <select
                    id = 'tasks'
                    onChange = { (event) => setTaskNumber(Number(event.target.value) - 1) }>
                    <option
                        disabled
                        selected
                        value = ''>Select your option
                    </option>
                    {
                        tasksState.map((_, index) => {
                            return (
                                <option
                                    key = { index + 1 }
                                    value = { index + 1 }>{index + 1}
                                </option>
                            );
                        })
                    }

                </select>
            </div>
        );
    }

    function lessonChangeHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        const lesson = lessons.find((lesson) => lesson.title === event.target.value);

        if (lesson) {
            setTasksState(lesson.tasks);
            setTaskNumber(void 0);
            if (lesson) {
                setLessonTitle(lesson.title);
            }
        }
    }


    return (
        <S.Container>
            Container: Jscontainer

            <label htmlFor = 'lessons'>Choose a lesson:</label>
            <select
                id = 'lessons'
                onChange = { (event) => lessonChangeHandler(event)
                }>
                <option
                    disabled
                    selected
                    value = ''>Select your option
                </option>
                {
                    getLessons()
                }

            </select>

            {
                lessonTitle ? getTasks() : null
            }

            {
                tasksState
                    ? (
                        <div>
                            <div className = 'task-description'>
                                { taskNumber !== void 0 ?  tasksState[ taskNumber ].taskDescription : null}
                            </div>

                            <div>
                                {
                                    taskNumber !== void 0
                                        ?  <JsPlayground code = { tasksState[ taskNumber ].code }/> : null
                                }
                            </div>
                        </div>
                    )

                    : null
            }


        </S.Container>
    );
};
