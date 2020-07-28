import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import VideoRegister from './pages/register/video';
import CategoryRegister from './pages/register/category';
import Error from './pages/error';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



ReactDOM.render(
  <Router>
    <Switch>
      <Route path = '/' component = {Home} exact />
      <Route path = '/register/video' component = {VideoRegister} />
      <Route path = '/register/category' component = {CategoryRegister} />
      <Route component = {Error} /> 

    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
