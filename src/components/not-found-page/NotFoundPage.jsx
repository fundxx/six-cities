import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h2>
        404 Not Found
      </h2>
      <Link to="/">
        Нажмите, чтобы перейти на главную страницу
      </Link>
    </>
  );
};

export default NotFoundPage;
