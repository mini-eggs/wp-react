import React from 'react'
import Helmet from '../shared/helmet'
import HeaderBackground from '../shared/headerBackground'
import MainContent from '../shared/mainContent'
import './main.css'

const getPath = () => {
  let path = document.createElement("a");
  path.href = window.location.href;
  let url = path.pathname;
  path.remove();
  return url.replace('/page/','');
};

const getPageFromPath = (path, pages) => {
  let thePage;
  pages.map( page => {
    if(page.post_name === path)
      thePage = page;
    return page;
  });
  return thePage;
};

const getPage = props => {
  let path = getPath();
  return getPageFromPath(path, props.data.pages);
};

const initializeClass = props => {
  let page = getPage(props);
  return {
    page:page,
    data:props.data
  };
};

class Page extends React.Component {
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
        <Helmet title={ "See Spark Go | " + this.state.page.post_title} />
        <HeaderBackground data={this.state.page} />
        <MainContent data={this.state.page} />
      </div>
    );
  }
}

export default Page
