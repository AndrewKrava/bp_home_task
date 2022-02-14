// Core
import React, { FC } from 'react';
import styled from 'styled-components';


const Container = styled.div`

`;

// Types
type PropTypes = {
    selectOptions: string[] | number[];
    cb: Function;
    selectIdName: string;
    selectTitle: string;
    defaultSelected?: boolean;
}


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
