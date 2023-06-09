import React from 'react';
import {useMapEvents} from 'react-leaflet/hooks';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import IconPerson from '../marker-icon';


export const MapView = ({markerPos}) => {

    const map = useMapEvents({});

    map.flyTo({lat: markerPos[0], lng: markerPos[1] } ,map.getZoom());

    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPos} icon={IconPerson} />
        </>
    );
};