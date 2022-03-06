// Core
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useSelector } from '../../tools/hooks';

// Reducer
import { counterActions } from './slice';

// Actions
// import * as sagaActions from './saga/sagaActions';

export const useCounter = () => {
    const dispatch = useDispatch();
    const counterState = useSelector((state) => state.counter); // Add counter to ./src/init/redux/index.ts


    // const counter = counterState.counter;

    const increment = () => {
        dispatch(counterActions.setCounter(String(Number(counterState.counter) + 1)));
    };

    const decrement = () => {
        dispatch(counterActions.setCounter(String(Number(counterState.counter) - 1)));
    };


    return {
        counterState,
        increment,
        decrement,
    };
};
