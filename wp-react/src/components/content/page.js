import React from 'react'
import {Card, CardActions, CardMedia, CardText} from 'material-ui/Card'
import Helmet from '../shared/helmet'
import Paper from '../shared/paper'
import ShareBtn from '../shared/share'
import Zodiac from './zodiac'
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

const mockData = (String, num) => {
  let mock = Array.apply(null, Array(num)).map(() => {
    return String;
  });
  return mock.join(" ");
};

const formateDate = (dateString) => {
  let date = new Date(dateString);
  let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getYear();
}

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = initializeClass(props);
  }
  componentWillReceiveProps(props){
    this.setState(initializeClass(props))
  }
  componentDidMount(){
    this.zodiac()
  }
  zodiac(){
    Zodiac({container:'title-background', color:this.state.page.background_color})
  }
  render(){
    return (
      <div>
        <div className="content">
          <Helmet title={"See Spark Go | " + this.state.page.post_title} />


          <canvas id="title-background" className="title" style={{backgroundColor: this.state.page.background_color}}></canvas>


          <div className="title abs" style={{backgroundColor: 'transparent'}}>
            <h1 className="">{this.state.page.post_title}</h1>
          </div>



          <div className="col-xs-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2 np">
            <div className="max-width">
              <div className="vert-center-parent">
                <div className="vert-center">
                  <div className="preview-text">
                    <div className="overlay-title">
                      <span>{this.state.page.overlay_title}</span>
                    </div>
                    <div className="divider" />
                    <div className="overlay-description">
                      <span>{this.state.page.overlay_description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 



          <div className="col-xs-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2 np">
            <div className="max-width">
              <div className="buttons">
               {
                this.state.page.actions.split(',').map((action) => {
                  if(action === 'share'){
                    return (
                      <ShareBtn />
                    );
                   }else{
                    <span />
                    }
                 })
               }
              </div>
            </div>          
          </div>        
          </div>





        <img className="full" alt={this.state.page.post_title} src={this.state.page.post_image} />





        <div className="content">
          <div className="col-xs-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2 np">
            <div className="max-width">
              <div className="main-content">
                <div
                  className="body"
                  dangerouslySetInnerHTML={{__html:this.state.page.post_content}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}