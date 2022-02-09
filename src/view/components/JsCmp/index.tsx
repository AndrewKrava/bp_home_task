// Core
import React, { FC } from 'react';
import { Spinner } from '../../elements';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';


// Types
type PropTypes = {
    /* type props here */
}

export const JsCmp: FC<PropTypes> = () => {
    console.log('JS');

    return (
        <S.Container>
            Component: JsCmp

            <div>
                <Spinner />
            </div>
        </S.Container>
    );
};
