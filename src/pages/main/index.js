import React from 'react';
import {MainMenu} from '../../components/main-menu';
import {ContentWrapper, LeftSide, RightSide} from './index.styles.js';
import {ThingsCardList} from '../../components/things-card-list';
import {MapCoordsViewer} from '../../components/map-coords-viewer';


export const MainPage = () => {
    return <>
        <MainMenu/>
        <ContentWrapper>
            <LeftSide>
                <MapCoordsViewer/>
            </LeftSide>
            <RightSide>
                <ThingsCardList/>
            </RightSide>
        </ContentWrapper>
    </>
};