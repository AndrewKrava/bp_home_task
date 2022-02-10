// Core
import React, { FC } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { AccordionReact, NewsReact } from '../containers';


// Pages
import { Main, JavaScript, ReactPage } from '../pages';

<<<<<<< HEAD

=======
>>>>>>> b102aae4ee983cb6459546e3c532e4431aa127c7
export const Public: FC = () => {
    const routes = useRoutes([
        {
            path:     '',
            element:  <Main />,
            children: [
                { 
                    path: 'js', 
                    element: <JavaScript />,
                    children: [
                        {path: ':id', element: }
                    ] 
                },
                {
                    path:     'react',
                    element:  <ReactPage />,
                    children: [
<<<<<<< HEAD
                        { path: 'news', element: <JsCmp /> },
=======
                        { path: 'news', element: <NewsReact /> },
                        { path: 'accordion', element: <AccordionReact /> },
>>>>>>> b102aae4ee983cb6459546e3c532e4431aa127c7
                    ],
                },
                // { path: '*', element: <Navigate to = 'register' /> },
            ],
        },
    ]);

    return routes;
};
