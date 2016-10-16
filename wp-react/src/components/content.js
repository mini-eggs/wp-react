import React, { Component } from 'react'
import {Link} from 'react-router'

class Content extends Component {
  render() {
    return (
      <div>
        <div>
          Content
        </div>
        <div>
          <Link to="/">Go Home</Link>
        </div>
      </div>
    );
  }
}

export default Content;
