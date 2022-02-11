// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, JsCmp } from '../../components';

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
            {/* temp add JS cmp */}
            <JsCmp />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <JavaScript />
    </ErrorBoundary>
);
