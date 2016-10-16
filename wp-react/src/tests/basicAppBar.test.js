import React from 'react'
import ReactDOM from 'react-dom'

import BasicAppBar from '../components/basicAppBar'
import Theme from '../components/shared/theme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Theme>
        <BasicAppBar title="Test Title" />
      </Theme>
    , div);
});
