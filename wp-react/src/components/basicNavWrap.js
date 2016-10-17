import React from 'react'

import BasicNav from './basicNav'
import BasicAppBar from './basicAppBar'
import HeaderSpacer from './shared/headerSpacer'
import Paper from './shared/paper'

const inline = {
  position: {
    position:'relative'
  },
  background: {
    backgroundColor:'#F6921E'
  }
};

export default (props) => {
  return (
    <nav>
      <div style={inline.position}>
        <Paper data={{initial:1, range:0}}>
          <div style={inline.background}>
            <BasicAppBar  data={props.data} title={props.title} />
            <div className="hide-desktop">
              <BasicNav data={props.data} />
            </div>
          </div>
        </Paper>
      </div>
      <HeaderSpacer />
    </nav>
  );
}