import React from "react";
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from "./pages/index";
import { IsUserRedirect, ProtectedRoute} from "./helpers/routers";
import {useAuthListener} from "./hooks"

import * as ROUTES from './constants/routes';

export default function App() {
    const {user} = useAuthListener();

    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} >
                    <SignIn />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} >
                    <SignUp />
                </IsUserRedirect>
                <ProtectedRoute user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
                    <Home/>
                </ProtectedRoute>
                <ProtectedRoute user={user} loggedInPath={ROUTES.BROWSE} >
                    <Browse/>
                </ProtectedRoute>
            </Switch>
        </Router>
    );
}

