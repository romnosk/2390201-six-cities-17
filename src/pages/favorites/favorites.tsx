import { Offers } from '../../types/offer';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import Footer from '../../components/footer/footer';

type FavoritesProps = {
  offers: Offers;
}

function Favorites ({offers}: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList
                    offers={offers}
                    shownOffersNumber={5}
                    showFavorites
                  />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList
                    offers={offers}
                    shownOffersNumber={3}
                    showFavorites
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
