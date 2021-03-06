// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


// Container
import { AccordionReact, Jscontainer, NewsReact } from '../containers';


// Pages
import { Main, JavaScript, ReactPage } from '../pages';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Main /> }
                path = '/' >

                <Route
                    element = { <JavaScript /> }
                    path = 'js'>
                    <Route
                        element = { <Jscontainer /> }
                        path = 'js-lessons-container'
                    />
                </Route>

                <Route
                    element = { <ReactPage /> }
                    path = 'react'>
                    <Route
                        element = { <NewsReact /> }
                        path = 'news'
                    />
                    <Route
                        element = { <AccordionReact /> }
                        path = 'accordion'
                    />

                </Route>

            </Route>
            <Route
                // element = { <Main /> }
                element = { <Navigate to = '/' /> }
                path = '*'
            />
        </Routes>
    );
};


// remove
//<Route path=":teamId" element={<Team />} />
//<Route index element={<LeagueStandings />} />


// const routes = useRoutes([
//     {
//         path:     '',
//         element:  <Main />,
//         children: [
//             {
//                 path:     'js',
//                 element:  <JavaScript />,
//                 children: [{ path: '', element: <Jscontainer /> }],
//             },
//             {
//                 path:     'react',
//                 element:  <ReactPage />,
//                 children: [
//                     { path: 'news', element: <NewsReact /> },
//                     { path: 'accordion', element: <AccordionReact /> },
//                 ],
//             },
//             // { path: '*', element: <Navigate to = 'register' /> },
//         ],
//     },
// ]);

// return routes;
