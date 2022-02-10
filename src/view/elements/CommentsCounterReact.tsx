import React, { FC } from 'react';
import styled from 'styled-components';


const CommentsCounterSpan = styled.span`

    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &:before {
        content: '👋';
        display: inline;
        font-size: 11px;
        opacity: 0.6;
    }

`;

interface TagProps {
    counts: number
}

export const CommentsCounterReact: FC<TagProps> = (props) => {
    return (
        <CommentsCounterSpan >{props.counts}</CommentsCounterSpan>
    );
};
