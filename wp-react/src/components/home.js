import React from 'react'
import {Link} from 'react-router'

export default class extends React.Component {
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
