import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Login, Home } from "./templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path={"(/)?"}>
        <Home />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
