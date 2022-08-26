import React from 'react';
import { render } from '@testing-library/react';
import { Profiles } from '../../components';

describe('<Profiles />', () => {
    it('renders the <Profiles /> with populated data', () => {
        const { container, getByText, getByTestId } = render(
            <Profiles>
                <Profiles.Title>Whos is watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
                                   data-testid="user-profile">
                        <Profiles.Picture src='/images/dod.png' data-testid='profile-picture' />
                        <Profiles.Name>Bob</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        );

        expect(getByTestId('profile-picture')).toBeTruthy();
        expect(getByText('Whos is watching')).toBeTruthy();
        expect(getByText('Bob')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
