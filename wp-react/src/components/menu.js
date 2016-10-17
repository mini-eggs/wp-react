import React from 'react'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import PersonAdd from 'material-ui/svg-icons/social/person-add'
import Divider from 'material-ui/Divider'

const style = {
  paper: {
    width:'90%',
    margin:'275px 5% 0 5%',
    overflow:'hidden',
    maxWidth:'390px'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px'
  }
};

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="hide-desktop">
        <Paper style={style.paper}>
          <Menu>
            <MenuItem primaryText="Connect" />
            <MenuItem primaryText="Facebook" leftIcon={<PersonAdd />} />
            <MenuItem primaryText="Twitter" leftIcon={<PersonAdd />} />
            <MenuItem primaryText="Instagram" leftIcon={<PersonAdd />} />
            <MenuItem primaryText="Google Plus" leftIcon={<PersonAdd />} />
            <Divider />
            <MenuItem primaryText="Spark Plug" />
            <MenuItem primaryText="Some Event #1" leftIcon={<PersonAdd />} />
            <MenuItem primaryText="Some Event #2" leftIcon={<PersonAdd />} />
          </Menu>
        </Paper>
      </div>
    );
  }
}