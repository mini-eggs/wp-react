import React, { Component } from 'react'
import {Link} from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          Home
        </div>
        <div>
          <Link to="/content">Go Content</Link>
        </div>
      </div>
    );
  }
}

export default Home;
