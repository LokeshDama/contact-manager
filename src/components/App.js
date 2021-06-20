import React from "react";
import { Router } from "react-router-dom";

import history from "../history";
import "./App.css";
import Header from "./Header";
import Routes from './Routes';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
