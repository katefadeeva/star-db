import React, { Component } from 'react';
import PeoplePage from "../people-page";
import Header from '../header';
import RandomPlanet from '../random-planet';

import './app.css';
import ErrorBoundry from "../error-boundry";

export default class App extends Component {

  state = {
    showRandomPlanet: true
  }

  render() {
    return (
        <ErrorBoundry>
          <div className="wrapper">
            <Header />
            <RandomPlanet />
            <PeoplePage />
          </div>
        </ErrorBoundry>
    );
  };
};