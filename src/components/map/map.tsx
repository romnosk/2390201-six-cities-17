import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { City, Offer, Offers } from '../../types/offer';
import useMap from '../use-map/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../const/const';

type MapProps = {
  city: City;
  offersOnMap: Offers;
  selectedOffer: Offer | undefined;
};

function Map ({city, offersOnMap, selectedOffer}:MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offersOnMap.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (selectedOffer !== undefined && offer.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offersOnMap, selectedOffer]);

  return (
    <section
      className="cities__map map"
      style={{height: '800px'}}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
