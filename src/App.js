import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//? Components
// import AuthBox from "./Components/AuthBox";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

//? Styles
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition timeout={500} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Redirect from="/" to="/signup" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
