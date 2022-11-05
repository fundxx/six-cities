import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {OfferCardTypes} from "Project/prop-types/offer-card";

const FavoriteCard = ({item, onFavoriteChange}) => {
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${item.id}`}>
          <img className="place-card__image"
            src={item.previewImg}
            width="150"
            height="110"
            alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              {`€${item.price}`}
            </b>
            <span className="place-card__price-text">
              night
            </span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={(_evt) => onFavoriteChange(item.id)}>
            <svg className="place-card__bookmark-icon"
              width="18"
              height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">
              In bookmarks
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `100%`}}/>
            <span className="visually-hidden">
              Rating
            </span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <p className="place-card__type">
          {item.type}
        </p>
      </div>
    </article>
  );
};

FavoriteCard.defaultProps = {
  item: {},
  onFavoriteChange: () => {},
};

FavoriteCard.propTypes = {
  /** Данные кароточки предложения */
  item: OfferCardTypes.isRequired,
  /** Обработчик измменения состояния "Избранное" */
  onFavoriteChange: PropTypes.func.isRequired,
};

export default FavoriteCard;
