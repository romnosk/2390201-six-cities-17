import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import Map from '../../components/map/map';
import { Offers } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import { AMSTERDAM_CITY_NAME } from '../../components/const/const';

type MainProps = {
  // rentOffersNumber: number;
  offers: Offers;
}

function Main ({offers}: MainProps): JSX.Element {
  let offersToShow = offers.filter((offer) => offer.city.name === AMSTERDAM_CITY_NAME);
  if (offersToShow.length === 0) {
    offersToShow = offers;
  }
  const firstOffer = offersToShow[0];

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersToShow.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={offersToShow}
                  shownOffersNumber={offersToShow.length}
                  showFavorites={false}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={firstOffer.city}
                offersOnMap={offersToShow}
                selectedOffer={firstOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
