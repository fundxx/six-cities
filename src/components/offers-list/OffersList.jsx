import React, {useCallback} from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

import OfferCard from "Project/components/offer-card/OfferCard";

import withOffersList from "./hoc/with-offers-list";

const OffersList = (props) => {
  const {auth, items = {}, itemsIds, changeFavoriteStatus, onMouseEnter, onMouseLeave} = props;
  const history = useHistory();
  const handleFavoriteChange = useCallback((id) => {
    if (auth) {
      changeFavoriteStatus(id);
    } else {
      history.push(`/login`);
    }
  });

  return (
    <div className="cities__places-list places__list tabs__content">
      {itemsIds.map((id) => {
        const card = items[id] || {};

        return (
          <OfferCard
            key={`${id}`}
            item={card}
            onFavoriteChange={handleFavoriteChange}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}/>
        );
      })}
    </div>
  );
};

OffersList.defaultProps = {
  changeFavoriteStatus: () => {},
};

OffersList.propTypes = {
  /** Статус авторизации пользователя */
  auth: PropTypes.bool.isRequired,
  /** Список идентификаторов карточек предложений */
  itemsIds: PropTypes.arrayOf(PropTypes.number),
  /** Map - объект идентифыикаторо карточки на данные карточки предложения */
  items: PropTypes.object,
  /** Обработчик измменения состояния "Избранное" */
  changeFavoriteStatus: PropTypes.func.isRequired,
  /** Обработчик мыши при наведении на элемент */
  onMouseEnter: PropTypes.func.isRequired,
  /** Обработчик мыши при уходе с элемента */
  onMouseLeave: PropTypes.func.isRequired,
};

export default withOffersList(OffersList);
