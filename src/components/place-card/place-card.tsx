import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute, CARD_TYPE_CITIES } from '../../components/const/const';

type PlaceCardProps = {
  cardType: string;
  offer: Offer;
}

function PlaceCard ({cardType, offer}: PlaceCardProps): JSX.Element {
  return (
    <article className={`${cardType}__card place-card`}>
      {offer.isPremium
        ? <div className="place-card__mark"><span>Premium</span></div>
        : <div className='visually-hidden'></div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER_BASE}${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardType === CARD_TYPE_CITIES ? '260' : '150'}
            height={cardType === CARD_TYPE_CITIES ? '200' : '110'}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardType === CARD_TYPE_CITIES ? '' : 'favorites__card-info '}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${cardType === CARD_TYPE_CITIES ? '' : 'place-card__bookmark-button--active '}place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {cardType === CARD_TYPE_CITIES ? 'To bookmarks' : 'In bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER_BASE}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
