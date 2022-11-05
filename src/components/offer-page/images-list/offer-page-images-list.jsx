import React from "react";
import PropTypes from "prop-types";

const ImagesList = ({items}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {items.map((src, index) => {
          return (
            <div key={`${src}#${index}`}
              className="property__image-wrapper">
              <img className="property__image" src={src} alt="Photo studio"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ImagesList.propTypes = {
  /** Список ссылок на картинки */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImagesList;
