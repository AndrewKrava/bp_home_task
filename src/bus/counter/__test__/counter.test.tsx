/**
 * @jest-environment jsdom
 */


// Core
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { act, renderHook } from '@testing-library/react-hooks';
import { configureStore } from '@reduxjs/toolkit';

// Reducer & hook
import { useCounter } from '..';
import counter from '../slice';


const store = configureStore({
    reducer: {
        counter,
    },
});


describe('test hook useCounter', () => {
    const Wrapper: (FC) = ({ children }) => (
        <ReduxProvider store = { store }>{children}
        </ReduxProvider>
    );

    let stateResult: any = null;

    beforeEach(() => {
        stateResult = renderHook(() => useCounter(), { wrapper: Wrapper }).result;
    });

    test('init state', () => {
        expect(stateResult.current.counterState).toEqual({
            counter:    '0',
            isFetching: false,
        });
    });

    test('expect counte state will be 2', () => {
        act(() => {
            stateResult.current.increment();
        });
        act(() => {
            stateResult.current.increment();
        });

        expect(stateResult.current.counterState.counter).toBe('2');
    });
});


/**
 *
 *
 *
 *
 *
 *
 */


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
