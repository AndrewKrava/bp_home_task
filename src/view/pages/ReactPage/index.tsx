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
<<<<<<< HEAD
            Page: ReactPage
            <Link to = '/react/some'> Comp</Link>

=======
            <div className = 'page-title'>Page: ReactPage
                <Link to = '/react/news'>News</Link>
                <Link to = '/react/accordion'> Accordion</Link>
            </div>
>>>>>>> b102aae4ee983cb6459546e3c532e4431aa127c7
            <Outlet />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ReactPage />
    </ErrorBoundary>
);
