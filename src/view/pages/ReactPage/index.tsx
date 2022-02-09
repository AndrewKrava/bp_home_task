// Core
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// import { JsCmp } from '../../components/JsCmp';

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
            Page: ReactPage
            <Link to = '/react/some'> Comp</Link>
            <Link to = '/react/two'> Two</Link>

            {/* <JsCmp /> */}
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ReactPage />
    </ErrorBoundary>
);
