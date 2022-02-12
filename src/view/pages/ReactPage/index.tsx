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

const ReactPage: FC<PropTypes> = () => {
    return (
        <S.Container>
            <div className = 'page-title'>Page: ReactPage
                <Link to = '/react/news'>News</Link>
                <Link to = '/react/accordion'> Accordion</Link>
            </div>
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ReactPage />
    </ErrorBoundary>
);
