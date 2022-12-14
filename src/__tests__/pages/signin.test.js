import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { SignIn } from '../../pages';
import { FirebaseContext } from '../../context/firebase';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

const firebase = {
    auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn(() => Promise.resolve('I am signed in!')),
    })),
};

describe('<SignIn />', () => {
    it('renders the sign in page with a form submission', async () => {
        const { getByTestId, getByPlaceholderText, queryByTestId } = render(
            <Router>
                <FirebaseContext.Provider value={{ firebase }}>
                    <SignIn />
                </FirebaseContext.Provider>
            </Router>
        );

        await act(async () => {
            await fireEvent.change(getByPlaceholderText('Email Address'), { target: { value: 'rob@gmail.com' } });
            await fireEvent.change(getByPlaceholderText('password'), { target: { value: 'password' } });
            fireEvent.click(getByTestId('sign-in'));

            expect(getByPlaceholderText('Email Address').value).toBe('rob@gmail.com');
            expect(getByPlaceholderText('password').value).toBe('password');
            expect(queryByTestId('error')).toBeFalsy();
        });
    });
});