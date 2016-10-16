import React from 'react'

import BasicNav from './basicNav'
import BasicAppBar from './basicAppBar'

const inline = {
  background: {
    backgroundColor:'#F6921E'
  }
};

export default (props) => {
  return (
    <div style={inline.background}>
      <BasicAppBar title={props.title} />
      <BasicNav data={props.data} />
    </div>
  );
}