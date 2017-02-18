import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

//redux libraries
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reducers from './reducers';
//const createStoreWithMiddleware = applyMiddleware()(createStore);

import App from './components/app';
import Default404 from './components/Default404';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="404" component={Default404} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>
  , document.querySelector('.app'));
