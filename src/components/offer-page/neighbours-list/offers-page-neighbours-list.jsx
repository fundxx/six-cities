import React from "react";
import PropTypes from "prop-types";

import OfferCard from "Project/components/offer-card/OfferCard";

const NeighboursList = (props) => {
  const {items, itemsIds, changeFavoriteStatus} = props;

  return (
    <div className="near-places__list places__list">
      {itemsIds.map((id, index) => {
        const card = items[id];

        return (
          <OfferCard
            key={`${id}#${index}`}
            item={card}
            onFavoriteChange={changeFavoriteStatus}/>
        );
      })}
    </div>
  );
};

NeighboursList.defaultProps = {
  changeFavoriteStatus: () => {},
};

NeighboursList.propTypes = {
  /** Список идентификаторов карточек соседних предложений */
  itemsIds: PropTypes.arrayOf(PropTypes.number),
  /** Map - объект идентифыикаторо карточки на данные карточки предложения */
  items: PropTypes.object,
  /** Обработчик измменения состояния "Избранное" */
  changeFavoriteStatus: PropTypes.func.isRequired,
};

export default NeighboursList;
