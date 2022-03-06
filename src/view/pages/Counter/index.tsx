// Core
import React, { FC } from 'react';

// Bus
import { useCounter } from '../../../bus/counter';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Counter: FC<PropTypes> = () => {
    const { counterState, increment, decrement } = useCounter();

    return (
        <S.Container>
            <div className = 'page-title'>Page: Counter</div>

            <div className = 'counter-content'>
                <p>Result: {counterState.counter}</p>

                <button onClick = { increment }>Increment</button>
                <button onClick = { decrement }>Decrement</button>

            </div>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Counter />
    </ErrorBoundary>
);
