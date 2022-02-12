import React, { FC } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    .tag {
        background-color: orange;
        color: white;
        border: none;
        border-radius: 3px;
        padding: 6px 15px;
        font-family: Helvetica;
        font-size: 14px;
        font-weight: 400;

    }    
`;

interface TagProps {
    source: string[];
}

function showSource(sourceArr: string[]): React.ReactNode[] {
    return sourceArr.map((tagName) => {
        const key = uuidv4();
        console.log('key ', key);

        return (
            <div
                className = 'tag'
                key = { key }>
                {tagName}
            </div>
        );
    });
}

export const TagReact: FC<TagProps> = (props) => {
    return (
        <Container className = 'tags'>
            {showSource(props.source)}
        </Container>
    );
};
