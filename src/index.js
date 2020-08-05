import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import VideoRegister from './pages/register/video';
import CategoryRegister from './pages/register/category';
import Login from './pages/user/login/index';
import registerUser from './pages/user/register';
import Error from './pages/error';
import PlayerPage from './pages/player';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




ReactDOM.render(
  <Router>
    <Switch>
      <Route path = '/' component = {Home} exact />
      <Route path = '/register/video' component = {VideoRegister} />
      <Route path = '/register/category' component = {CategoryRegister} />
      {/*<Route path = '/player' component = {PlayerPage({title, url})} />*/}
      <Route exact path='/player/:video_id/:title' component = {PlayerPage}/>
      <Route path = '/user/login' component = {Login} />
      <Route path = '/user/register' component = {registerUser} />
      <Route component = {Error} /> 

    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
