import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import {MapView} from './map-view';
import {DEFAULT_MAP_COORDS, DEFAULT_MAP_ZOOM} from '../../constants';
import {useThingsContext} from '../../context/things-context/useThingsContext';

import 'leaflet/dist/leaflet.css';



export const MapCoordsViewer = () => {
    const {chosenCard} = useThingsContext();
    const coords = chosenCard?.coords || DEFAULT_MAP_COORDS;

    console.log(coords)

    return (
        <MapContainer 
            center={coords}
            zoom={DEFAULT_MAP_ZOOM}
            style={{ height: '100%', width: '100%', zIndex: 0 }}
        >
            <MapView markerPos={coords}/>
        </MapContainer>
    );
}