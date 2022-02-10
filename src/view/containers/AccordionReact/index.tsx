// Core
import React, { FC, useState } from 'react';
import { AccordionCmp } from '../../components';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

//temp
import data from '../../../bus/test_data/accordion.json';

export const AccordionReact: FC<PropTypes> = () => {
    const [ messages, setMessages ] = useState(data);

    function setSelected(id: number) {
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
            Container: AccordionReact
            {data.map((acc, index) => {
                return (
                    <div key = { index }>
                        <AccordionCmp
                            message={{
                                id: { acc.id },
                                answer: { acc.answer },
                                isSelected: { false },
                                question: { acc.question }
                            }

                            }

                        />
                    </div>
                );
            })}
        </S.Container>
    );
};
