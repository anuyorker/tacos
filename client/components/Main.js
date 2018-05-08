import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import TacoListContainer from '../containers/TacoListContainer';
import TacoContainer from '../containers/TacoContainer';

const Home = () => (
  <h2>Wow this is so cool!</h2>
);

const Main = () => (
  <div>
    <p>
      <Link to='/'>Home</Link>
    </p>
    <p>
      <Link to='/tacos'>The tacos!</Link>
    </p>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/tacos' component={TacoListContainer} />
      <Route exact path='/tacos/:id' component={TacoContainer} />
    </Switch>
  </div>
);

export default Main;
