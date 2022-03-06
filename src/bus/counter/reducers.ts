// Types
import * as types from './types';

export const setCounter: types.SetCounter = (state, action) => {
    // return {
    //     ...state,
    //     counter: action.payload,
    // };
    state.counter = action.payload;
};


export const setFetching: types.SetFetching = (state, action) => {
    return {
        ...state,
        isFetching: action.payload,
    };
};

export const setCounterState: types.SetCounterState = (_, action) => {
    return action.payload;
};
