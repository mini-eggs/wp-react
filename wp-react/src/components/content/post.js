import React from 'react'
import Helmet from '../shared/helmet'
import HeaderBackground from '../shared/headerBackground'
import MainContent from '../shared/mainContent'
import './main.css'

const getPath = props => {
  let path = document.createElement("a");
  path.href = window.location.href
  let url = path.pathname
  path.remove()
  return url.replace('/category/blog/','')
};

const getPostFromPath = (path, posts) => {
  let thePost
  posts.map( post => {
    if(post.post_name === path)
      thePost = post
    return post
  });
  return thePost
};

const getPost = props => {
  let path = getPath();
  return getPostFromPath(path, props.data.posts);
};

const getCategory = props => {
  let path = document.createElement("a")
  path.href = window.location.href
  let url = path.pathname
  path.remove()
  return url.replace('/category/','').split('/')[0]
}

const initializeClass = props => {
  let post = getPost(props);
  post.post_title = getCategory()
  return {
    post:post,
    data:props.data
  };
};

class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = initializeClass(props);
  }
  componentWillReceiveProps(props){
    this.setState(initializeClass(props))
  }
  render(){
    return (
      <div className="content">
        <Helmet title={ "See Spark Go | " + this.state.post.post_title} />
        <HeaderBackground data={this.state.post} />
        <MainContent data={this.state.post} />
      </div>
    );
  }
}

export default Post