import React, {useContext, useState} from 'react';

import {useHistory} from "react-router-dom";
import {FirebaseContext} from "../context/firebase";
import {HeaderContainer} from "../containers/header";
import {FooterContainer} from "../containers/footer";
import {Form} from "../components"

import * as ROUTES from "../constants/routes"


export default function SignIn() {
    const {firebase} = useContext(FirebaseContext);
    const history =  useHistory();

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === "" || emailAddress === "";

    const handleSignIn = (e) => {
        e.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() =>{
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error data-testid="error">{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input placeholder="Email Address" value={emailAddress}
                                    onChange={({target}) => setEmailAddress(target.value)}/>
                        <Form.Input placeholder="password" type="password" autocomplete="off" value={password}
                                    onChange={({target}) => setPassword(target.value)}/>
                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to netflix?<Form.Link to={ROUTES.SIGN_UP}>Sign up now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>

                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}