import React from "react";
import {Link} from "react-router-dom";
import {
  useDispatch,
} from "react-redux";

import {
  thunks,
} from "Project/redux/auth";

import FavoriteCard from "./favorite-card/favorites-page-favorite-card";
import useFavoritePage from "./hooks/use-favorite-page";
import Empty from "./favorite-page-empty/favorite-page-empty";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const {email, cities, offersCardsMap, offersIdsMap, handleFavoriteChange} = useFavoritePage();
  const hasCities = Boolean(cities) && Boolean(cities.length);
  const className = hasCities ? `page page--favorites` : `page page--favorites-empty`;

  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select"
            viewBox="0 0 7 4">
            <path fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
          </symbol>
          <symbol id="icon-bookmark"
            viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>
          </symbol>
          <symbol id="icon-star"
            viewBox="0 0 13 12">
            <path fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"/>
          </symbol>
        </svg>
      </div>
      <div className={className}>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link"
                  to="/">
                  <img className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile"
                      to="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">
                        {email}
                      </span>
                    </Link>
                  </li>
                  <li className="header__nav-item user">
                    <button type="button"
                      style={{
                        background: `none`,
                        border: `none`,
                        cursor: `pointer`,
                      }}
                      onClick={() => dispatch(thunks.logout())}>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        style={{width: `20px`}}
                        viewBox="0 0 511.989 511.989">
                        <path d="M110.933 221.782a8.536 8.536 0 00-8.533 8.533v51.2c0 4.71 3.823 8.533 8.533 8.533s8.533-3.823 8.533-8.533v-51.2c.001-4.71-3.822-8.533-8.533-8.533z"/>
                        <path d="M111.855 2.304L31.172 34.586C8.448 43 0 54.418 0 76.715v358.477c0 22.298 8.448 33.715 30.959 42.061l81.058 32.427c4.011 1.519 8.038 2.287 11.981 2.287 17.152 0 29.602-14.336 29.602-34.091V34.049c0-24.269-19.354-40.175-41.745-31.745zm24.678 475.572c0 10.18-5.035 17.024-12.535 17.024-1.869 0-3.883-.401-5.803-1.118L37.103 461.33c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036 3.934-20.164 20.241-26.206l80.725-32.29c2.082-.785 4.087-1.186 5.956-1.186 7.501 0 12.544 6.835 12.544 17.016v443.827zM178.133 51.115h120.533c14.114 0 25.6 11.486 25.6 25.6v128a8.53 8.53 0 008.533 8.533 8.53 8.53 0 008.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.534 8.533 8.534zM332.8 298.582a8.53 8.53 0 00-8.533 8.533v128c0 14.114-11.486 25.6-25.6 25.6H179.2c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533h119.467c23.526 0 42.667-19.14 42.667-42.667v-128a8.532 8.532 0 00-8.534-8.532z"/>
                        <path d="M511.343 252.655a8.53 8.53 0 00-1.852-2.782l-85.325-85.333a8.525 8.525 0 00-12.066 0 8.523 8.523 0 000 12.066l70.767 70.775h-286.6a8.536 8.536 0 00-8.533 8.533 8.536 8.536 0 008.533 8.533h286.601L412.1 335.215a8.523 8.523 0 000 12.066 8.51 8.51 0 006.033 2.5 8.509 8.509 0 006.033-2.5l85.325-85.325a8.53 8.53 0 001.852-2.782 8.54 8.54 0 000-6.519z"/>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {hasCities ? (

          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">
                  Saved listing
                </h1>
                <ul className="favorites__list">
                  {cities.map((it) => {
                    return (
                      <li key={`${it.id}`}
                        className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link"
                              to="#">
                              <span>
                                {it.name}
                              </span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {offersIdsMap[it.id].map((id) => {
                            return (
                              <FavoriteCard key={`${id}`}
                                item={offersCardsMap[id]}
                                onFavoriteChange={handleFavoriteChange}/>
                            );
                          })}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </main>
        ) : (
          <Empty/>
        )}
        <footer className="footer container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo"
              src="img/logo.svg" alt="6 cities logo"
              width="64"
              height="33"/>
          </Link>
        </footer>
      </div>
    </>
  );
};

export default FavoritesPage;
