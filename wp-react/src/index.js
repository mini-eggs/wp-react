import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory,IndexRedirect} from 'react-router'

import App from './components/app'
import Page from './components/page'
import Category from './components/category'

fetch('http://wordpress.localhost:81/wp-proxy/index.php?type=base', {
  method: 'get'
}).then((data) => {
  data.json().then((wp) => {
    ReactDOM.render(
      (
        <Router history={browserHistory}>
          <Route path="/" data={wp} component={App}>
            <IndexRedirect to="/page/home" />
            <Route path="/page/:page" component={Page} />
            <Route path="/category/:category" component={Category} />
          </Route>
        </Router>
      ),
      document.getElementById('root')
    );
  });
});
