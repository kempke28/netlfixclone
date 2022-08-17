import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Panel>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Panel>
          <Jumbotron.Panel>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Panel>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
