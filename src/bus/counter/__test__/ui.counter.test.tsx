/**
 * @jest-environment jsdom
 */

// Core
import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import  { render } from '@testing-library/react';

import counter from '../slice';

// Component
import Counter from '../../../view/pages/Counter';

const initState = {
    counter:    '100',
    isFetching: false,
};

const store = configureStore({
    reducer: {
        counter,
    },
    preloadedState: { counter: { ...initState }},
});

describe('test Counter component', () => {
    const wrapper: (FC) = ({ children }) => (
        <ReduxProvider store = { store }>
            <Router >
                {children}
            </Router>
        </ReduxProvider>
    );
    test('render', async() => {
        const { findByTestId } = render(<Counter/>, { wrapper });

        const result = await findByTestId('result');
        // expect(result.nodeValue).not.toBeNull();

        expect(result.textContent).toBe('Result: 100');
    });
});
