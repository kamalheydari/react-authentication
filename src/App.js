import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";
import AuthBox from "./Components/AuthBox";

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition timeout={500} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route path="/login" component={AuthBox} />
          <Route path="/signup" component={AuthBox} />
          <Redirect from="/" to="/signup" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
