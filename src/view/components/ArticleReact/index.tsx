// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    url: string,
    tagCmp: React.ReactNode,
    commentsCounter: React.ReactNode,
    likesCounter: React.ReactNode,
    title: string,
    description: string,
    published: string

}

export const ArticleReact: FC<PropTypes> = (props) => {
    return (
        <S.Container>

            <div className = 'title-cmp'>Component: ArticleReact</div>


            <header>
                <div className = 'poster'>
                    <img
                        alt = ''
                        src = { props.url }
                    />
                </div>
                {props.tagCmp}
            </header>
            <article>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </article>
            <footer>
                <span>{props.published}</span>
                <div className = 'controls'>
                    {props.commentsCounter}
                    {props.likesCounter}
                </div>
            </footer>
        </S.Container>
    );
};
