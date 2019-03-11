import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from './../components/DashboardPage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage  from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';



export const history = createHistory();





const AppRouter = () => (
        // define router configuration inside of JSX
    <Router history={history}>
        <div>
            <Switch>
                {/* routes take a path and a component(what we want to render to screen */}
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;