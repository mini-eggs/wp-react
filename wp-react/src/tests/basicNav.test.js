import React from 'react'
import ReactDOM from 'react-dom'

import BasicNav from '../components/basicNav'
import Theme from '../components/shared/theme'
import MockData from './mock.data'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Theme>
      <BasicNav data={MockData} />
    </Theme>
    , div);
});
