/**
 * @jest-environment jsdom
 */


// import counterReducer, { counterActions } from '../slice';

// Component
import Counter from '../../../view/pages/Counter';

// Core
// import  { render } from '@testing-library/react';
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { act, renderHook } from '@testing-library/react-hooks';
import { configureStore } from '@reduxjs/toolkit';

// Redux
import { useCounter } from '..';
import counterRerdus from '../slice';


describe('test hook useCounter', () => {
    // const { result } = renderHook(() => useCounter());


    test('init state', () => {
        const store = configureStore({
            reducer: { counterRerdus },
        });

        const Wrapper: (FC) = ({ children }) => (
            <ReduxProvider store = { store }>{children}
            </ReduxProvider>
        );

        const { result } = renderHook(() => useCounter(), { wrapper: Wrapper });

        act(() => {
            result.current.increment();
        });


        expect(result.current).toEqual({
            counter:    '0',
            isFetching: false,
        });
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
