// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { Main } from '../pages';
import Counter from '../pages/Counter';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Main /> }
                path = '/' >

            </Route>
            <Route
                element = { <Counter/> }
                path = '/counter'>
            </Route>
            <Route
                // element = { <Main /> }
                element = { <Navigate to = '/' /> }
                path = '*'
            />
        </Routes>
    );
};
