import React from "react";
import {Switch, Route} from "react-router-dom";

import MainPage from "Project/components/main-page/MainPage";
import {SignInPageWrapped} from "Project/components/sign-in-page/SignInPage";
import FavoritesPage from "Project/components/favorites-page/FavoritePage";
import {OfferPageWrapped} from "Project/components/offer-page/OfferPage";
import NotFoundPage from "Project/components/not-found-page/NotFoundPage";
import {PrivateRouteWrapped} from "Project/components/private-route/PrivateRoute";
import Notification from "Project/components/notification/Notification";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage/>
        </Route>
        <Route path="/login" exact>
          <SignInPageWrapped/>
        </Route>
        <PrivateRouteWrapped exact
          path="/favorites"
          render={() => {
            return (
              <FavoritesPage/>
            );
          }}/>
        <Route path="/offer/:id" exact>
          <OfferPageWrapped/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
      <Notification/>
    </>
  );
};

export default App;
