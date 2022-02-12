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

function setMessageClass(isSelected: boolean): string {
    if (isSelected) {
        return 'accordion-item selected';
    }

    return 'accordion-item';
}

export const MessageCmp: FC<PropTypes> = (props) => {
    return (
        <S.Container>
            <div className = { setMessageClass(props.message.isSelected) }>
                <div
                    className = 'accordion-question'
                    onClick = { () => props.setSelected(props.message.id) }>
                    <span >{props.message.question}</span>
                </div>
                <p className = 'accordion-answer'>{props.message.answer}</p>
            </div>
        </S.Container>
    );
};
