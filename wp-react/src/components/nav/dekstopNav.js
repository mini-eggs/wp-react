import React from 'react'
import {Link} from'react-router'
import './main.css'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:props.data.menu,
      data:props.data,
      title:props.title,
      color:props.color
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
  render(){
    return (
      <div className="desktop-header">
        <div className="f-left">
          <div className="brand">
            <Link to="/">
              {this.state.title}
            </Link>
          </div>
        </div>
        <div className="f-right">
          <div className="p-right">
            {
              this.state.data.menu.map( (item) => {
                return (
                  <div className="item">
                    <Link to={this.getRouteFromValue(item.id)} className="link" style={{color:this.state.color, borderColor:this.state.color}}>
                      {item.title}
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}