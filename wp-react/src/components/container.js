import React, { Component } from 'react'
import {Link} from 'react-router'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          Container
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Home;
