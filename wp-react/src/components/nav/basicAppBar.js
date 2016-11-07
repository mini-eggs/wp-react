import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {browserHistory} from 'react-router'

const inline = {
  AppBar: {
    backgroundColor:'transparent',
    boxShadow: 'none',
    position:'absolute',
    top:'0',
    width:'100%'
  }
}

const hexToRgba = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")";
}

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:props.data.menu,
      data:props.data,
      title:props.title,
      color:props.color ? hexToRgba(props.color) : 'rgb(255, 255, 255)'
    };
  }
  getRouteFromValue = (val) => {
    let find;
    let pageOrPost;
    let type;

    this.state.items.map((item) => {
      if(item.id === val)
        find = item.title;
      return item;
    });

    if(!find) return false;

    this.state.data.pages.map((page) => {
      if(page.post_title === find) {
        pageOrPost = page.post_name;
        type = 'page';
      }
      return page;
    });

    this.state.data.posts.map((post) => {
      if(post.post_title === find){
        pageOrPost = post.post_name;
        type = 'post';
      }
      return post;
    });

    this.state.data.categories.map((cat) => {
      if(cat.name === find){
        pageOrPost = cat.slug;
        type = 'category';
      }
      return cat;
    });

    if(!pageOrPost || !type) return false;

    return '/' + type + '/' + pageOrPost;
  };
  navigateTo(val){
    let route = this.getRouteFromValue(val);
    if(route)
      browserHistory.push(route);
  }
  render(){
    return (
      <AppBar
        style={inline.AppBar}
        iconElementLeft={<span/>}
        title={this.state.title}
        iconStyleRight={{color:this.state.color, fill:this.state.color}}
        iconElementRight={(
          <IconMenu
            iconButtonElement={<IconButton className="inherit" ><MoreVertIcon color={this.state.color}/></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            {
              this.state.items.map((item,i) => {
                return (
                  <MenuItem onClick={() => {this.navigateTo(item.id)}} key={i} primaryText={item.title} />
                );
              })
            }
          </IconMenu>
        )}
      />
    );
  }
}