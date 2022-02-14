// Core
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}


// const


const JavaScript: FC<PropTypes> = () => {
    return (
        <S.Container>

            <div className = 'page-title'>
                Page: JavaScript <Link to = '/js/js-lessons-container'>Lessons</Link>
            </div>

            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <JavaScript />
    </ErrorBoundary>
);
