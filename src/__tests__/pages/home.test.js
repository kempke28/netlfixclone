import React from 'react';
import {render} from "@testing-library/react";
import {Home} from '../../pages'

jest.mock('react-router-dom');

describe('homepage', () => {
    it('renders the Home page', () => {
        const {getByText, getAllByText, getAllByPlaceholderText} = render(
        <Home />
    );

    expect(getByText('Unlimited TV series and programms')).toBeTruthy();
    expect(getByText('Watch anywhere. Cancel anytime')).toBeTruthy();
    expect(getAllByText('Try it now')).toBeTruthy();
    expect(getAllByText('Create a membership')).toBeTruthy();
    expect(getAllByPlaceholderText('Email address')).toBeTruthy;
    });
});

