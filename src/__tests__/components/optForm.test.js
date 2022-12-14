import React from "react";
import {render} from "@testing-library/react";
import {OptForm} from "../../components"

describe('<OptForm />', () => {
    it('renders the optForm component with populated data', () => {
        const {container, getByText, getByPlaceholderText} = render(
            <OptForm>
                <OptForm.Input placeholder="Email address"/>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>Create a membership</OptForm.Text>
            </OptForm>
        );

        expect(getByText('Try it now')).toBeTruthy();
        expect(getByText('Create a membership')).toBeTruthy();
        expect(getByPlaceholderText('Email address')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});