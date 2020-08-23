import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import MainPage from './main_page';
import UsersPage from './Users';
import NotFound from './404';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/*All our Routes goes here!*/}
      <Route exact path="/" component={MainPage} />
      <Route exact path="/Users" component={UsersPage} />
      <Route exact path="/404" component={NotFound} />
      {/* <Redirect path="*" to="/404" />  */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
