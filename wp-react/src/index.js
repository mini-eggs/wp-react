import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'

import App from './components/app'
import Home from './components/home'
import Content from './components/content'

const wp = window.WORDPRESS_CONTENT;

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" data={wp} component={App}>
        <IndexRoute component={Home} />
        <Route path="/content" component={Content} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
