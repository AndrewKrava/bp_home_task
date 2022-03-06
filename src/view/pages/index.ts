// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Counter = lazy(() => import(/* webpackChunkName: "Counter" */ './Counter'));

