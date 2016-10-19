import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import {browserHistory} from 'react-router'

const inline = {
  Tab: {
    padding: '10px 0',
    backgroundColor:'#F6921E'
  },
  Bar: {
    backgroundColor:'#fff',
    height:'4px',
    marginTop:'-4px'
  }
};

const getPath = () => {
  let path = document.createElement("a");
  path.href = window.location.href;
  let url = path.pathname;
  path.remove();
  return url.replace('/page/','').replace('/category/','');
};

const getInitialValue = (props) => {
  let val = -1;
  let find = getPath();
  props.data.menu.map((item) => {
    let match = "";
    props.data.pages.map((page) => {
      if(page.post_title === item.title)
        match = page.post_name;
      return page;
    });
    props.data.categories.map((cat) => {
      if(cat.name === item.title)
        match = cat.slug;
      return cat;
    });
    if(match === find)
      val=item.id;
    return item;
  });
  return val;
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:props.data,
      items:props.data.menu,
      value: getInitialValue(props)
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
  handleChange = (value) => {
    let route = this.getRouteFromValue(value);
    if(route) {
      browserHistory.push(route);
      this.setState({
        value: value
      });
    }
  };
  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={inline.Bar}
        style={{width:this.state.items.length * 200 + 'px'}}
      >
        {
          this.state.items.map((item,i) => {
            return <Tab
              key={i}
              style={inline.Tab}
              label={item.title}
              value={item.id}
            />
          })
        }
      </Tabs>
    );
  }
}