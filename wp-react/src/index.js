import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory,IndexRedirect} from 'react-router'

import App from './components/app'
import Content from './components/content'
import Page from './components/page'

const wp = window.WORDPRESS_CONTENT;

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" data={wp} component={App}>
        <IndexRedirect to="/page/hello-from-see-spark-go" />
        <Route path="/content" component={Content} />
        <Route path="/page/:page" component={Page} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
