import React, {useState} from "react";
import PropTypes from "prop-types";

import withSortComponent from "./hocs/with-sort-component";

const SortComponent = ({items, selectedItem, onChange}) => {
  const [hovered, setHovered] = useState(false);
  const className = hovered ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom places__options`;

  return (
    <form className="places__sorting"
      action="#"
      method="get"
      onMouseEnter={() => setHovered(true)}>
      <span className="places__sorting-caption">
        Sort by
      </span>
      <span className="places__sorting-type"
        tabIndex="0">
        {selectedItem.label}
        <svg className="places__sorting-arrow"
          width="7"
          height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={className}
        onMouseLeave={() => setHovered(false)}>
        {items.map((it) => {
          const active = it.value === selectedItem.value ? `places__option--active` : ``;

          return (
            <li key={it.value}
              className={`places__option ${active}`}
              tabIndex="0"
              onClick={() => onChange(it)}>
              {it.label}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

const LabelValueType = PropTypes.shape({
  /** Подпись */
  label: PropTypes.string.isRequired,
  /** Значение */
  value: PropTypes.string.isRequired,
});

SortComponent.propTypes = {
  /** Список сортировки */
  items: PropTypes.arrayOf(LabelValueType),
  /** Данные выбранной сортировки */
  selectedItem: LabelValueType,
  /** Изменить сортировку */
  onChange: PropTypes.func,
};

export default withSortComponent(SortComponent);
