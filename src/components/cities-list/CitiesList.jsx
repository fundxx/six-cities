import React from "react";
import PropTypes from "prop-types";

import withCitiesList from "./hocs/with-cities-list";

const CitiesList = (props) => {
  const {items, selectedItem, onClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {items.map((it) => {
        const active = it.id === selectedItem.id ? `tabs__item--active` : ``;

        return (
          <li key={it.id}
            className="locations__item">
            <a type="button"
              className={`locations__item-link tabs__item ${active}`}
              onClick={() => onClick(it)}>
              <span>
                {it.name}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

CitiesList.defaultProps = {
  onClick: () => undefined,
};

const CityType = PropTypes.shape({
  /** Имя */
  name: PropTypes.string.isRequired,
  /** Идентификатор */
  id: PropTypes.string.isRequired,
});

CitiesList.propTypes = {
  /** Список городов */
  items: PropTypes.arrayOf(CityType.isRequired),
  /** Данные выбранного города */
  selectedItem: CityType.isRequired,
  /** Обработчик клика по городу */
  onClick: PropTypes.func,
};

export default withCitiesList(CitiesList);
