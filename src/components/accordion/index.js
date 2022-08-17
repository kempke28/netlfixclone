import React, {useState} from 'react';
import import { Container, Row, Column, Link, Title, Text, Break } from

export default function Accordion({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>

            </Inner>
        </Container>
    )
};

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {


    return <Item {...restProps}>{children}</Item>
}

Accordion.Frame = function AccordionFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}