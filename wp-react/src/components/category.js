import React from 'react'

const getPath = () => {
  let path = document.createElement("a");
  path.href = window.location.href;
  let url = path.pathname;
  path.remove();
  return url.replace('/category/','');
};

const getCategoryFromPath = (path, categories) => {
  let theCategory;
  categories.map((cat) => {
    if(cat.slug === path)
      theCategory = cat;
    return cat;
  });
  return theCategory;
};

const getPostsFromCategory = (category, posts) => {
  let catPosts = [];
  posts.map((post) => {
    post.post_categories.map((pCat) => {
      if(pCat.category_id === category.category_id)
        catPosts.push(post);
      return pCat;
    });
    return post;
  });
  return catPosts;
};

const initializeClass = (props) => {
  let path = getPath();
  let category = getCategoryFromPath(path, props.data.categories);
  let posts = getPostsFromCategory(category, props.data.posts);
  return {
    category:category,
    posts:posts
  };
};

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = initializeClass(props);
  }
  componentWillReceiveProps(props){
    setTimeout(() => {
      this.setState(initializeClass(props));
    }, 200)
  }
  render(){
    return (
      <div>
        {this.state.category.name}
      </div>
    );
  }
}
