import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorBoundry from "../error-boundry";

import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetsPage from "../pages/planets-page";
import StarshipsPage from "../pages/starships-page";
import {BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  }

  render() {
    return (
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
              <div className="wrapper stardb-app">
                <Header />
                <RandomPlanet />
                <Switch>
                  <Route path="/"
                         render={() => <h2>Welcome to StarDB</h2>}
                         exact
                  />
                  <Route path="/people/:id?" component={PeoplePage} />
                  <Route path="/planets" component={PlanetsPage} />
                  <Route path="/starships" component={StarshipsPage} />
                  <Route render={() => <h2> Page not found </h2>}/>
                </Switch>
              </div>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
    );
  };
};