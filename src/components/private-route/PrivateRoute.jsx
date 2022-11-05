import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";

import withPrivateRoute from "./hocs/with-private-route";

const PrivateRoute = (props) => {
  const {path, exact, render, authStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  /** Статус авторизации пользователя */
  authStatus: PropTypes.bool.isRequired,
  /** ТОчное совпадение пути */
  exact: PropTypes.bool.isRequired,
  /** Путь */
  path: PropTypes.string.isRequired,
  /** Функция отображающая контент по переданному пути */
  render: PropTypes.func.isRequired,
};

export const PrivateRouteWrapped = withPrivateRoute(PrivateRoute);
export default PrivateRoute;
