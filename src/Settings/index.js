import React from "react";
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from "./ConfirmButton";
import Page from '../Shared/Page';
import CoinGrid from "./CoinGrid";

// eslint-disable-next-line react/display-name
export default function(){
    return <Page name="settings"> 
        <WelcomeMessage/> 
        <ConfirmButton/> 
        <CoinGrid/>
    </Page>
}