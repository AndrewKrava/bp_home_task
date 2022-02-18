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
    cb: Function;
    selectIdName: string;
    selectTitle: string;
    defaultSelected?: boolean;
}

// TODO Refactor select option
//Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
export const Select: FC<PropTypes> = (props) => {
    return (
        <Container>
            <label htmlFor = { props.selectIdName }>{props.selectTitle}</label>
            <select
                id = { props.selectIdName }
                onChange = { (event) =>  props.cb(event) }>
                <option
                    disabled = { props.defaultSelected }
                    selected = { !props.defaultSelected }
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
