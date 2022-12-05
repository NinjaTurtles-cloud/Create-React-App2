import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./pages/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/survey">
        <Survey />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
