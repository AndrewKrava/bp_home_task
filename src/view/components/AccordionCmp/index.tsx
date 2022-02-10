// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    message : {
        question: string,
        answer: string,
        isSelected: boolean,
        id: number
    };
    setSelected: Function;


}

function setMessageClass(isSelected: boolean) {
    if (isSelected) {
        return 'accordion-item selected';
    }

    return 'accordion-item';
}

export const AccordionCmp: FC<PropTypes> = (props) => {
    // const accClass =
    return (
        <S.Container>
            <div className = { setMessageClass(props.message.isSelected) }>
                <div className = 'accordion-question'>
                    <span onClick = { () => props.setSelected(props.message.id) }>{props.message.question}</span>
                </div>
                <p className = 'accordion-answer'>{props.message.answer}</p>
            </div>
        </S.Container>
    );
};
