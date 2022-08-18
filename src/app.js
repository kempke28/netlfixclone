import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from "./pages/index";

import * as ROUTES from './constants/routes';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={ROUTES.BROWSE} element={<Browse />} />
                <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
                <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
                <Route exact path={ROUTES.HOME} element={<Home />} />
            </Routes>
        </BrowserRouter>

    );
}

