// Core
import React, { FC } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container, Nav, Breadcrumbs, Crumb } from './styles';

// Icons
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Main: FC = () => {
    const { pathname } = useLocation();

    return (
        <Container className = 'main-app'>
            <Nav>
                <Link to = '/js'>JavaScript</Link>
                <Link to = '/react'>React</Link>
            </Nav>
            <Breadcrumbs>
                <Crumb to = '/'>
                    <FontAwesomeIcon
                        icon = { faHome }
                        size = '2x'
                    />
                </Crumb>
                {pathname.split('/').map((crumb, i) => {
                    const path = pathname.split('/').slice(0, i + 1)
                        .join('/');

                    return (
                        crumb && (
                            <Crumb
                                key = { path }
                                to = { path }>
                                {crumb.toUpperCase()}
                            </Crumb>
                        )
                    );
                })}
            </Breadcrumbs>
            <Outlet />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
