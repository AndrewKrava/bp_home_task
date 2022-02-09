// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { JsCmp } from '../components/JsCmp';


// Pages
import { Main, JavaScript, ReactPage } from '../pages';

const Cmp = () => {
    return (
        <div>
            Hello
        </div>
    );
};

export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:     '',
            element:  <Main />,
            children: [
                { path: 'js', element: <JavaScript /> },
                {
                    path:     'react',
                    element:  <ReactPage />,
                    children: [
                        { path: 'some', element: <JsCmp /> },
                        { path: 'two', element: <Cmp /> },
                    ],
                },
                // { path: '*', element: <Navigate to = 'register' /> },
            ],
        },
    ]);

    return routes;
};
