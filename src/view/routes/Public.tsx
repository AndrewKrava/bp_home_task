// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { AccordionReact, NewsReact } from '../containers';


// Pages
import { Main, JavaScript, ReactPage } from '../pages';

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
                        { path: 'news', element: <NewsReact /> },
                        { path: 'accordion', element: <AccordionReact /> },
                    ],
                },
                // { path: '*', element: <Navigate to = 'register' /> },
            ],
        },
    ]);

    return routes;
};
