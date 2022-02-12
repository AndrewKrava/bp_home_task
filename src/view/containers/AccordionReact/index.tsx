// Core
import React, { FC, useState } from 'react';
import { MessageCmp } from '../../components';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    title?: string;
}

//temp
import data from '../../../bus/test_data/accordion.json';

export const AccordionReact: FC<PropTypes> = (props) => {
    const [ messages, setMessages ] = useState(data);

    function setSelectedMsg(id: number) {
        setMessages(
            messages.map((msg) => {
                if (msg.id === id) {
                    msg.isSelected = !msg.isSelected;
                }

                return msg;
            }),
        );
    }

    return (
        <S.Container>
<<<<<<< HEAD
            Container: AccordionReact
            {messages.map((acc, index) => {
                return (
                    <div key = { index }>
                        <AccordionCmp
                            message={
                                {
                                    id: acc.id,
                                    answer: acc.answer,
                                    isSelected: false,
                                    question: acc.question
                                }
                            }
                            setSelected = {setSelected}
=======
            <div className = 'container-title'>
                {props.title}
            </div>
            {data.map((acc, index) => {
                return (
                    <div key = { index }>
                        <MessageCmp
                            message = {
                                {
                                    id:         acc.id,
                                    answer:     acc.answer,
                                    isSelected: acc.isSelected,
                                    question:   acc.question,
                                }
                            }
                            setSelected = { setSelectedMsg }
>>>>>>> fc3da7c000ed29e60bd76eec18e436db2951f0e6

                        />
                    </div>
                );
            })}
        </S.Container>
    );
};

AccordionReact.defaultProps = {
    title: 'Accordion',
};
