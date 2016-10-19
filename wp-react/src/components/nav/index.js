import React from 'react'

import BasicAppBar from './basicAppBar'
import DesktopNav from './dekstopNav'
import Paper from '../shared/paper'
import './main.css'

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
    <div style={{zIndex:'9',position:'relative'}} >
      <div style={inline.position}>
        <Paper data={{initial:1, range:0}}>
          <div style={inline.background}>
            <div className="show-tablet show-mobile">
              <BasicAppBar  data={props.data} title={props.title} />
            </div>
            <div className="show-desktop">
              <DesktopNav data={props.data} title={props.title} />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}