import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
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
