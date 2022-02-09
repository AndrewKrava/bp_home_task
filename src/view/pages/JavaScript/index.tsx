// Core
import React, { FC } from 'react';

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

const JavaScript: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: JavaScript
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <JavaScript />
    </ErrorBoundary>
);
