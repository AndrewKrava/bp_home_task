// Core
import React, { FC } from 'react';
import { useRoutes,   BrowserRouter,
    Routes,
    Route, Navigate } from 'react-router-dom';

// Container
import { AccordionReact, Jscontainer, NewsReact } from '../containers';


// Pages
import { Main, JavaScript, ReactPage } from '../pages';

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
                        {path: '', element: <Jscontainer />}
                    ] 
                },
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

    // return routes;
    return (
        <Routes>
            <Route path="" element={<Main />} >
                {/* <Route index element={<Home />} /> */}
                <Route path='js' element={ <JavaScript /> } />

                <Route path="react" element={<ReactPage />}>
                    {/* <Route path=":teamId" element={<Team />} /> */}
                    <Route path="news" element={<NewsReact />} />
                    <Route path="accordion" element={<AccordionReact />} />

                    {/* <Route index element={<LeagueStandings />} /> */}
                </Route>
            </Route>
        </Routes>
    );
};
