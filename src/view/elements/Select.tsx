// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    select {
        margin-left: 10px;;
    }
`;

// Types
type PropTypes = {
    selectOptions: string[] | number[];
    callback: Function;
    selectIdName: string;
    selectTitle: string;
    value?: string | number;
}

// TODO Refactor select option
//Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
export const Select: FC<PropTypes> = (props) => {
    // const [lesson, setLesson] = useState<Task[] | null>(null);
    // const [task, setTask] = useState<Task | null>(null);

    const [ valueState, setValueState ] = useState('Select your option');

    console.log('Render CMP', props.selectTitle);

    const foo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.callback(event);
        setValueState(event.target.value);
    };

    return (
        <Container>
            <label htmlFor = { props.selectIdName }>{props.selectTitle}</label>
            <select
                // defaultValue = 'Select your option'
                id = { props.selectIdName }
                value = { valueState }
                onChange = { (event) => foo(event) }>
                <option
                    disabled
                    value = 'Select your option'>Select your option
                </option>
                {
                    props.selectOptions.map((optionName) => {
                        return (
                            <option
                                key = { optionName  }
                                value = { optionName }>{optionName}
                            </option>
                        );
                    })
                }

            </select>
        </Container>
    );
};
