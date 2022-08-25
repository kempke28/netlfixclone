import React from "react";
import faqsData from "../fixtures/faqs.json";
import {Accordion, OptForm} from "../components";

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently asked questions</Accordion.Title>
            <Accordion.Frame>
            {faqsData.map((item) => (

                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                    ))}
            </Accordion.Frame>

            <OptForm>
                <OptForm.Input placeholder="Email address"/>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>Create a membership</OptForm.Text>
            </OptForm>
        </Accordion>
                );
            }