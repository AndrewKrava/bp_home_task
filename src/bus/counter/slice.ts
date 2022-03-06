// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = {
    counter:    '0',
    isFetching: false,
};

export const counterSlice = createSlice<types.CounterState, typeof reducers>({
    name: 'counter',
    initialState,
    reducers,
});

export const sliceName = counterSlice.name;
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
