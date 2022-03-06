// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Counter = string
export type CounterState = {
    counter: Counter
    isFetching: boolean
}

// Contracts
type BaseContact<T> = CaseReducer<CounterState, PayloadAction<T>>

export type SetCounter = BaseContact<Counter>
export type SetFetching = BaseContact<boolean>
export type SetCounterState = BaseContact<CounterState>
