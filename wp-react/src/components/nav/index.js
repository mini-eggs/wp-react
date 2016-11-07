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

export default props => {

  console.log(props)

  let styles={
    mobileStyles:{
    },
    desktopStyles:{
    }
  }
  if(props.onlyShowMobile){
    styles={
      mobileStyles:{
        display:'block'
      },
      desktopStyles:{
        display:'none'
      }
    }
  }

  return (
    <div style={{zIndex:'9',position:'relative'}} >
      <div style={inline.position}>
        <Paper data={{initial:1, range:0}}>
          <div style={inline.background}>
            <div className="show-tablet show-mobile" style={styles.mobileStyles}>
              <BasicAppBar color={props.color} data={props.data} title={props.title} />
            </div>
            <div className="show-desktop" style={styles.desktopStyles}>
              <DesktopNav color={props.color} data={props.data} title={props.title} />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}