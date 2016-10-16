import React from 'react'
import ReactDOM from 'react-dom'

import App from '../components/app'
import MockData from './mock.data'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App route={{data:MockData}} />, div);
});
