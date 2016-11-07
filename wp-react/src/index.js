import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory} from 'react-router'
import './styles/animate.css'
import App from './components/app'  
import Page from './components/content/page'
import Instagram from './components/instagram/'
import Category from './components/content/category'
import Post from './components/content/post'

const routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" data={props} component={Instagram} />
      <Route path="page" data={props} component={App}>
        <Route path=":page" component={Page} />
      </Route>
      <Route path="category" data={props} component={App}>
        <Route path=":category" component={Category} />
        <Route path=":category/:post" component={Post} />
      </Route>
    </Router>
  )
}

let rootNode = document.getElementById('root')

fetch('http://evanjones.xyz/ssg/wp-proxy/?type=getJson', {method: 'get'})
  .then( props => {
    props.json()
      .then( props => {
        ReactDOM.render(routes(props), rootNode);
      });
  });
