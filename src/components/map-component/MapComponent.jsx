import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

import {OfferCardTypes} from "Project/prop-types/offer-card";

import withMapComponent from "./hocs/with-map-component.js";

const MapComponent = (props) => {
  const {items, itemsIds, activeItem} = props;
  const mapRef = useRef(null);
  const [firstId] = itemsIds;

  useEffect(() => {
    const city = items[firstId].city;

    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [mapRef, firstId, items]);

  useEffect(() => {
    if (mapRef.current) {
      itemsIds.forEach((id) => {
        const isActive = activeItem ? id === activeItem.id : false;
        const item = items[id];
        const customIcon = leaflet.icon({
          iconUrl: isActive ? `img/pin-active.svg` : `img/pin.svg`,
          iconSize: [27, 39]
        });

        leaflet.marker({
          lat: item.location.latitude,
          lng: item.location.longitude
        },
        {
          icon: customIcon
        })
        .addTo(mapRef.current)
        .bindPopup(item.title);
      });
    }
  }, [items, itemsIds, activeItem, mapRef]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

MapComponent.propTypes = {
  /** Список идентификаторов карточек предложений */
  itemsIds: PropTypes.arrayOf(PropTypes.number),
  /** Map - объект идентифыикаторо карточки на данные карточки предложения */
  items: PropTypes.object,
  /** Данные выбранной карточки */
  activeItem: OfferCardTypes,
};

export default withMapComponent(MapComponent);
