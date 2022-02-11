import React, { FC } from 'react';
import styled from 'styled-components';

interface Content {
    text1: string;
    mySize: number;
}

const CounterSpan = styled.span`

    font-family: Helvetica;
    /* font-size: 14px; */
    font-size: ${({ mySize = 10 }: Content) => mySize}px;
    color: rgba(0, 0, 0, 0.6);


    &:before {
    /* content: '👋'; */
        content: ${(props) => props.text1};
        display: inline;
        /* font-size: 1em; */
        font-size: ${({ mySize = 10 }: Content) => mySize}px;
        opacity: 0.6;
    }
`;

interface TagProps {
    count: number;
    content: string;
    size: number;
}

export const CounterForPostReact: FC<TagProps> = (props) => {
    return (
        <CounterSpan
            mySize = { props.size }
            text1 = { props.content }>{props.count}
        </CounterSpan>
    );
};
