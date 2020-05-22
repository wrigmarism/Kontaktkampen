import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Companies} from './pages/Companies.jsx';
import {Start} from './pages/Start.jsx';

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

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route path="/Start">
            <Start />
          </Route>
          <Route path="/Companies">
            <Companies />
          </Route>
        </Switch>
      </div>
    </Router>
    );}
}