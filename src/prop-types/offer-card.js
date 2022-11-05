import PropTypes from "prop-types";

export const LocationType = PropTypes.shape({
  /** Широта */
  latitude: PropTypes.number.isRequired,
  /** Долгота */
  longitude: PropTypes.number.isRequired,
  /** Приближение */
  zoom: PropTypes.number.isRequired,
});

export const CityTypes = PropTypes.shape({
  /** Имя */
  name: PropTypes.string.isRequired,
  /** Данные геопозиции */
  location: LocationType.isRequired,
});

export const HostType = PropTypes.shape({
  /** Аватарка */
  avatarUrl: PropTypes.string.isRequired,
  /** Уникальный идентификатор */
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool,
  /** Имя */
  name: PropTypes.string.isRequired,
});

export const OfferCardTypes = PropTypes.shape({
  /** Количество ванных комнат */
  bedrooms: PropTypes.number.isRequired,
  /** Данные города */
  city: CityTypes.isRequired,
  /** Описание */
  description: PropTypes.string.isRequired,
  /** Что включается в себя предложение */
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Данныее хозяина */
  host: HostType.isRequired,
  /** Уникальный идентификатор */
  id: PropTypes.number.isRequired,
  /** Пути фоттографий предложения */
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Есть ли в закладках */
  isFavorite: PropTypes.bool,
  /** Является ли примеальным */
  isPremium: PropTypes.bool,
  /** Данные геопозиции */
  location: LocationType.isRequired,
  /** Максималльно число взрослых */
  maxAdults: PropTypes.number.isRequired,
  /** Путь картинки на превью */
  previewImg: PropTypes.string.isRequired,
  /** Цена */
  price: PropTypes.number.isRequired,
  /** Рейтинг */
  rating: PropTypes.number.isRequired,
  /** Заголовок */
  title: PropTypes.string.isRequired,
  /** Тип */
  type: PropTypes.string.isRequired,
});

export const ReviewersType = PropTypes.shape({
  /** Комментарий */
  comment: PropTypes.string.isRequired,
  /** Дата публикации */
  date: PropTypes.string.isRequired,
  /** Идентификатор карточки предложения для которой был создан комментарий */
  id: PropTypes.number.isRequired,
  /** Оценка комментария */
  rating: PropTypes.number.isRequired,
  /** Данные пользователя */
  user: HostType.isRequired,
});
