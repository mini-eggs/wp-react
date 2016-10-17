import React from 'react'

import BasicNav from './basicNav'
import BasicAppBar from './basicAppBar'
import HeaderSpacer from './shared/headerSpacer'

const inline = {
  background: {
    backgroundColor:'#F6921E'
  }
};

export default (props) => {
  return (
    <div>
      <div style={inline.background}>
        <BasicAppBar  data={props.data} title={props.title} />
        <div className="hide-desktop">
          <BasicNav data={props.data} />
        </div>
      </div>
      <HeaderSpacer />
    </div>
  );
}