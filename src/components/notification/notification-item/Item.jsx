import React, {useEffect} from "react";
import PropTypes from "prop-types";

const Item = ({item = {}, onRemove}) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onRemove(item.id);
    }, 1500);

    return () => clearInterval(timerId);
  }, [item, onRemove]);
  const className = `notification-item notification-item--${item.type}`;

  return (
    <div className={className}>
      <span className="notification-message">
        {item.message}
      </span>
    </div>
  );
};

Item.defaultProps = {
  onRemove: () => {},
};

Item.propTypes = {
  /** Данные уведомления */
  item: PropTypes.shape({
    /** Идентификатор */
    id: PropTypes.string.isRequired,
    /** Тип сообщения */
    type: PropTypes.oneOf([`error`, `success`, `warning`]).isRequired,
    /** Текст сообщения */
    message: PropTypes.string.isRequired,
  }).isRequired,
  /** Удалить сообщение */
  onRemove: PropTypes.func.isRequired,
};

export default Item;
