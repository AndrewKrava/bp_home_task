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
    shouldUseDefault?: boolean;
}


export const Select: FC<PropTypes> = (props) => {
    const [ valueState, setValueState ] = useState('Select your option');

    const foo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.callback(event);
        setValueState(event.target.value);
    };

    if (props.shouldUseDefault && valueState !== 'Select your option') {
        setValueState('Select your option');
    }

    return (
        <Container>
            <label htmlFor = { props.selectIdName }>{props.selectTitle}</label>
            <select
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
