import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/social/share'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import './main.css'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action:props.action,
      open: false
    };
  }
  render(){
    return (
      <IconMenu
        iconStyle={{backgroundColor:'#F6921E'}}
        iconButtonElement={<FloatingActionButton><MoreVertIcon /></FloatingActionButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Facebook" />
        <MenuItem primaryText="Twitter" />
        <MenuItem primaryText="Instagram" />
        <MenuItem primaryText="Google Plus" />
      </IconMenu>
    );
  }
}