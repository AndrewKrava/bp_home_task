// Core
import React, { FC } from 'react';
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
}

// TODO Refactor select option
//Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
export const Select: FC<PropTypes> = (props) => {
    return (
        <Container>
            <label htmlFor = { props.selectIdName }>{props.selectTitle}</label>
            <select
                defaultValue = 'Select your option'
                id = { props.selectIdName }
                onChange = { (event) => props.callback(event) }>
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
