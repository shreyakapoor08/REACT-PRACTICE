/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';

import GlobalStyle from '../../global-styles';
import TestContainer from "../TestContainer/Loadable";
import DisplayListApi from '../DisplayListApi/Loadable';
import PokemonApp from '../PokemonApp/Loadable';
import ReduxPokemonApp from '../ReduxPokemonApp/Loadable';
import PokemonsList from '../PokemonsList/Loadable';
import MyPokemonApp from '../MyPokemonApp/Loadable';
import ColumnChart from '../ColumnChart/Loadable';





export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/TestContainer" component={TestContainer} />
        <Route exact path="/DisplayListApi" component={DisplayListApi} />
        <Route exact path="/features" component={FeaturePage} />
        <Route exact path="/PokemonApp" component={PokemonApp} />
        <Route exact path="/ReduxPokemonApp" component={ReduxPokemonApp} />
        <Route exact path="/PokemonList" component={PokemonsList} />
        <Route exact path="/MyPokemonApp" component={MyPokemonApp} />
        <Route exact path="/ColumnChart" component={ColumnChart} />
       
        
      </Switch>
      <GlobalStyle />
      </div>
  );
}
