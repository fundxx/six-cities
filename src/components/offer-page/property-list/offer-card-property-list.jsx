import React from "react";
import PropTypes from "prop-types";

const PropertyList = ({items}) => {
  return (
    <ul className="property__inside-list">
      {items.map((property, index) => {
        return (
          <li key={`${property}#${index}`}
            className="property__inside-item">
            {property}
          </li>
        );
      })}
    </ul>
  );
};

PropertyList.propTypes = {
  /** Список имущества */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyList;
