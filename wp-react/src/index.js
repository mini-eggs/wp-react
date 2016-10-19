import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'

import App from './components/app'
import Page from './components/content/page'
import Category from './components/category'
import Instagram from './components/instagram/'

fetch('http://wordpress.localhost:81/wp-proxy/index.php?type=getJson', {
  method: 'get'
}).then((data) => {
  data.json().then((wp) => {
    ReactDOM.render(
      (
        <Router history={browserHistory}>
          <Route path="/" component={Instagram}/>
          <Route path="page" data={wp} component={App}>
            <Route path=":page" component={Page} />
            <Route path=":category" component={Category} />
          </Route>
        </Router>
      ),
      document.getElementById('root')
    );
  });
});
