import React from 'react'
import ReactDOM from 'react-dom'

import Helmet from '../../components/shared/helmet'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Helmet title="Helmet Test" />, div);
});
