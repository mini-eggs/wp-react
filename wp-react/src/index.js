import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'

import Container from './components/container'
import Home from './components/home'
import Content from './components/content'
import './index.css'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={Home} />
        <Route path="/content" component={Content} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
