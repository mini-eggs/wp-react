import React from 'react'
import {Link} from 'react-router'
import Logo from '../../public/seesparkgo.png'

const inline = {
  margin:{
  },
  light:{
    backgroundColor:'#333333',
    padding:'50px 0 50px'
  },
  dark:{
    backgroundColor:'#2d2d2d',
    padding:'50px 0 50px'
  },
  span:{
    fontWeight:'300',
    color:'#fff',
    textDecoration:'none'
  }
};

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div style={inline.margin}>
        <div style={inline.light}>
          <div className="container np">
            <div className="col-xs-12 np">
              <div className="max-width">
                <img src={Logo} />
                <br/>
                <br/>
                <a style={inline.span} href="https://www.facebook.com/seesparkgo/">Facebook</a>
                <br/>
                <a style={inline.span} href="https://twitter.com/seesparkgo">Twitter</a>
                <br/>
                <Link to="/category/blog" style={inline.span}>Blog</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={inline.dark}>
          <div className="container np">
            <div className="col-xs-12 np">
              <div className="max-width">
                <span style={inline.span}>© Copyright 2016 See Spark Go.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}