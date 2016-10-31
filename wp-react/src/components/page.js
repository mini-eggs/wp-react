import React from 'react'
import {Card, CardActions, CardMedia, CardText} from 'material-ui/Card'
import Helmet from './shared/helmet'

import Paper from './shared/paper'
import ActionComp from './shared/actions'

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

//const formatDate = (dateString) => {
//  let date = new Date(dateString);
//  let monthNames = ["January", "February", "March", "April", "May", "June",
//    "July", "August", "September", "October", "November", "December"
//  ];
//  return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + (parseInt(date.getYear()) - 100 + 2000).toString();
//};

const mockData = (String, num) => {
  let mock = Array.apply(null, Array(num)).map(() => {
    return String;
  });
  return mock.join(" ");
};

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = initializeClass(props);
  }
  componentWillReceiveProps(props){
    this.setState(initializeClass(props));
  }
  render(){
    return (
      <div>
        <Helmet title={"See Spark Go | " + this.state.page.post_title} />
        <h1 style={{fontWeight:'400', textTransform: 'uppercase'}}>{this.state.page.post_title}</h1>
        <Paper data={{initial:0, range:0}}>
          <Card>
            <CardMedia>
              <img alt={this.state.page.post_title} src={this.state.page.post_image} />
            </CardMedia>
          </Card>
        </Paper>
        <div style={{width:'100%', height: '0'}} />
        <Paper data={{initial:0, range:0}}>
          <Card>
            <CardText style={{fontSize:'18px', color:'#484848', fontWeight:'400'}} dangerouslySetInnerHTML={{__html:mockData(this.state.page.post_content, 99)}} />
            <CardActions>
              {
                this.state.page.actions.split(',').map((action) => {
                  return (
                    <ActionComp action={action} />
                  );
                })
              }
            </CardActions>
          </Card>
        </Paper>
      </div>
    );
  }
}

//<div>
//  {
//    Array.apply(null, Array(200)).map(() => {
//      return (<span>Lorem Ipsum </span>);
//    })
//  }
//</div>
