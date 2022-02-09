// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const JavaScript = lazy(() => import(/* webpackChunkName: "Main" */ './JavaScript'));
export const ReactPage = lazy(() => import(/* webpackChunkName: "Main" */ './ReactPage'));

