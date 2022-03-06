/**
 * @jest-environment jsdom
 */


// Component
import Counter from '../../../view/pages/Counter';

// Core
// import  { render } from '@testing-library/react';
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { act, renderHook } from '@testing-library/react-hooks';
import { configureStore } from '@reduxjs/toolkit';

// Reducer & hook
import { useCounter } from '..';
import counter from '../slice';


// import store
import { store as reduxStore } from '../../../init';

export const store = configureStore({
    reducer: {
        counter,
    },
});


describe('test hook useCounter', () => {
    const Wrapper: (FC) = ({ children }) => (
        <ReduxProvider store = { reduxStore }>{children}
        </ReduxProvider>
    );
    test('init state', () => {
        const { result } = renderHook(() => useCounter(), { wrapper: Wrapper });

        expect(result.current.counterState).toEqual({
            counter:    '0',
            isFetching: false,
        });

        act(() => {
            result.current.increment();
        });

        expect(result.current.counterState.counter).toBe('1');

        // const {} = render();
    });
});


// describe('testing ui component', () => {
//     const {} = render(<Counter />,
//         {
//             in
//         });
// });

/**
 *
 *
 *
 *
 *
 *
 */

// const initState = {
//     counter:    '0',
//     isFetching: false,
// };


// for test ui
// import { render } from '@testing-library/react';

// describe('test reducer and action', () => {
//     test('counter state should be 5', () => {
//         expect(counterReducer(initState, counterActions.setCounter('5'))).toEqual({
//             counter:    '5',
//             isFetching: false,
//         });
//     });

//     test('isFetching state should be true', () => {
//         expect(counterReducer(initState, counterActions.setFetching(true))).toEqual({
//             counter:    '0',
//             isFetching: true,
//         });
//     });

//     test('set counter 10 and isFetchind true', () => {
//         expect(counterReducer(initState, counterActions.setCounterState({
//             counter:    '10',
//             isFetching: true,
//         }))).toEqual({
//             counter:    '10',
//             isFetching: true,
//         });
//     });
// });
