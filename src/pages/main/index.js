import React from 'react';
import {MainMenu} from '../../components/main-menu';
import {ContentWrapper, LeftSide, RightSide} from './index.styles.js';



export const MainPage = () => {
    return <>
        <MainMenu/>
        <ContentWrapper>
            <LeftSide/>
            <RightSide/>
        </ContentWrapper>
    </>
};