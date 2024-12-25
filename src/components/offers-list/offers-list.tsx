import { Offers } from '../../types/offer';
import { CardType } from '../const/const';
import PlaceCard from '../../components/place-card/place-card';
import { Fragment } from 'react';
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
      {shownOffers.map((offer) => (
        <Fragment key={offer.id}>
          {showFavorites ? (
            <PlaceCard cardType={CardType.FAVORITES} offer={offer}/>
          ) : (
            <PlaceCard cardType={CardType.CITIES} offer={offer}/>
          )}
        </Fragment>
      ))}
    </>
  );
}

export default OffersList;
