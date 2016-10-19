import React from 'react'

const inline = {
  margin:{
  },
  light:{
    backgroundColor:'#333333',
    padding:'50px 0 100px'
  },
  dark:{
    backgroundColor:'#2d2d2d',
    padding:'50px 0 100px'
  },
  span:{
    fontWeight:'300',
    color:'#fff'
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
              <span style={inline.span}>Wow!</span>
            </div>
          </div>
        </div>
        <div style={inline.dark}>
          <div className="container np">
            <div className="col-xs-12 np">
              <span style={inline.span}>Wow!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}