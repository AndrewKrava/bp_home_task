import React, { FC } from 'react';
import styled from 'styled-components';

interface Likes {
    isLiked: boolean
}

const LikesCounterSpan = styled.span`

    font-family: Helvetica;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);

    &:before {
        content: '♥';
        display: inline;
        font-size: 1.3em;
        opacity: 0.6;
        color: ${({ isLiked = false }: Likes) => isLiked ? 'blue' : ''}
    }
    &:hover {
        cursor: pointer;
    }
`;

interface NewsLikes {
    counts: number;
    id: number;
    isLiked: boolean;
}

interface TagProps {
    likes: NewsLikes;
    click: Function;
}

export const LikesCounterReact: FC<TagProps> = (props) => {
    return (
        <LikesCounterSpan
            isLiked = { props.likes.isLiked }
            onClick = { () => props.click(props.likes.id) }>{props.likes.counts}
        </LikesCounterSpan>
    );
};
