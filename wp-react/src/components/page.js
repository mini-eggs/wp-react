import React from 'react'

const getPath = () => {
  let path = document.createElement("a");
  path.href = window.location.href;
  let url = path.pathname;
  path.remove();
  return url.replace('/page/','');
};

const getPageFromPath = (path, pages) => {
  let thePage;
  pages.map((page) => {
    if(page.post_name === path)
      thePage = page;
    return page;
  });
  return thePage;
};

const getPage = (props) => {
  let path = getPath();
  return getPageFromPath(path, props.data.pages);
};

const initializeClass = (props) => {
  let page = getPage(props);
  return {
    page:page,
    data:props.data
  };
};

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = initializeClass(props);
  }
  componentWillReceiveProps(props){
    this.setState(initializeClass(props))
  }
  render(){
    return (
      <div>
        {this.state.page.post_title}
      </div>
    );
  }
}
