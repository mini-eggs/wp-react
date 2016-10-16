import React from 'react'
import ReactDOM from 'react-dom'

import Theme from '../../components/shared/theme'
import MockChild from '../mock.children'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Theme>
      {MockChild}
    </Theme>
    , div);
});
