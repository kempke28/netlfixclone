import React from 'react';
import {JumbotronContainer} from "../containers/jumbotron";
import {FooterContainer} from "../containers/footer";
import {FaqsContainer} from "../containers/faqs";
import {HeaderContainer} from "../containers/header";
import {OptForm, Feature} from "../components";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited TV series and programms</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel anytime</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address"/>
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break/>
                        <OptForm.Text>Create a membership</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/>
            <FooterContainer/>

        </>

    );
}