import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import {MapView} from './map-view';
import {DEFAULT_MAP_COORDS, DEFAULT_MAP_ZOOM} from '../../constants';

import 'leaflet/dist/leaflet.css';



export const MapCoordsSelector = ({onChange = () => {}, value = [0,0]}) => {
    return (
    <>
        <MapContainer 
            center={DEFAULT_MAP_COORDS}
            zoom={DEFAULT_MAP_ZOOM}
            style={{ height: '400px', width: '100%' }}
        >
            <MapView onChange={onChange} value={value}/>
        </MapContainer>
    </>
    );
}