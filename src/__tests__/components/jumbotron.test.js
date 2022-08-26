import React from 'react';
import { render } from '@testing-library/react';
import { Jumbotron } from '../../components';
import jumboData from '../../fixtures/jumbo.json'

describe('<Jumbrotron/>', () => {
    it('renders the <Jumbrotron /> with poulated data' , () => {
        const { container, getByTestId, getByText, getByAltText } = render(
            <Jumbotron.Container>
                {jumboData.map((item) => (
                    <Jumbotron key={item.id} direction={item.direction}>
                        <Jumbotron.Panel>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Panel>
                        <Jumbotron.Panel>
                            <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-image`}/>
                        </Jumbotron.Panel>
                    </Jumbotron>
                ))}
            </Jumbotron.Container>
        );

        expect(getByText('Enjoy on your TV.')).toBeTruthy();
        expect(getByAltText('Tiger King on Netflix')).toBeTruthy();
        expect(getByTestId('1-jumbo-image')).toBeTruthy();
        expect(getByText('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
