import { Offers } from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import PlaceCardFavorites from '../place-card-favorites/place-card-favorites';
// import { useState } from 'react';

type OffersListProps = {
  offers: Offers;
  shownOffersNumber: number;
  showFavorites: boolean;
}

function OffersList ({offers, shownOffersNumber, showFavorites}: OffersListProps): JSX.Element {
  const shownOffers = offers.slice(0,shownOffersNumber);
  // const [activeCardId, setActiveCardId] = useState(0);
  return (
    <>
      {shownOffers.map((offer) =>
        (<div key={offer.id}>
          {showFavorites
            ? <PlaceCardFavorites offer={offer}/>
            : <PlaceCard offer={offer}/>}
        </div>)
      )}
    </>
  );
}

export default OffersList;
