import L from 'leaflet';
import './index.css';

const IconPerson = L.Icon.extend({
    options: {
      iconUrl: require('./marker.png'),
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(55, 55),
      className: 'leaflet-div-icon'
    }
  });
  
  export default new IconPerson();