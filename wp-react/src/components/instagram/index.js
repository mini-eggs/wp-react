import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component{
  render(){
    return (
      <span>
        Not yet complete. Go to <Link to="/page/our-process">Our Process page</Link>
      </span>
    );
  }
}