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
