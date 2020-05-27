import React from "react";
import NotFoundImg from "../images/404-Error-amico.svg"

function NotFound() {
  return (
    <React.Fragment>
      <h1>NotFound 404</h1>
      <img src={NotFoundImg} alt="Not Found"/>
    </React.Fragment>
  );
}

export default NotFound;
