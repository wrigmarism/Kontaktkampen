import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Companies from "./pages/Companies.jsx";
import { Start } from "./pages/Start.jsx";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Start">Start</Link>
            </li>
            <li>
              <Link to="/Companies">Företag</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route path="/Start">
              <Start />
            </Route>
            <Route path="/Companies">
              <Companies />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
