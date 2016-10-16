import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'

import App from './components/app'
import Home from './components/home'
import Content from './components/content'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/content" component={Content} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
