import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory} from 'react-router'

import App from './components/app'
import Page from './components/content/page'
import Instagram from './components/instagram/'
import Category from './components/content/category'

fetch('http://ssg.localhost/wp-proxy/?type=getJson', {
  method: 'get'
}).then((data) => {
  data.json().then((wp) => {
    ReactDOM.render(
      (
        <Router history={browserHistory}>
          <Route path="/" component={Instagram} />
          <Route path="page" data={wp} component={App}>
            <Route path=":page" component={Page} />
          </Route>
          <Route path="category" data={wp} component={App}>
            <Route path=":category" component={Category} />
          </Route>
        </Router>
      ),
      document.getElementById('root')
    );
  });
});
