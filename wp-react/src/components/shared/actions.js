import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const getMenuOptionsFromType = (type, onClick) => {
  if(type.toLowerCase() === 'share')
    return (
      <Menu>
        <MenuItem onClick={ () => {onClick(type, 'Facebook')}} primaryText="Facebook" />
        <MenuItem onClick={ () => {onClick(type, 'Twitter')}} primaryText="Twitter" />
        <MenuItem onClick={ () => {onClick(type, 'Instagram')}} primaryText="Instagram" />
        <MenuItem onClick={ () => {onClick(type, 'Google Plus')}} primaryText="Google Plus" />
      </Menu>
    );
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action:props.action,
      open: false
    };
  }
  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };
  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };
  onChosen(type,val){
    console.log([type, val]);
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <div>
        <RaisedButton
          labelStyle={{fontSize:'18px', textTransform:'capitalize'}}
          onTouchTap={this.handleTouchTap}
          label={this.state.action}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          {
            getMenuOptionsFromType(this.state.action, (type,val) => { this.onChosen(type,val) })
          }
        </Popover>
      </div>
    );
  }
}