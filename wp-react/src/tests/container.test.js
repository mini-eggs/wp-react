import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../components/container'
import Theme from '../components/shared/theme'
import MockData from './mock.data'
import MockChild from './mock.children'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Theme>
      <Container data={MockData} default={{children:MockChild}} />
    </Theme>
    , div);
});
