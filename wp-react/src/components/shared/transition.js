import React from 'react';

/** This component is a bit weird
    we'll need to pass state in as props
    so ensure lifecycle methods are hit **/

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = this.getStateFromProps(props);
  }
  getStateFromProps(props){
    return {
      childrenState: props.data,
      children: props.children,
      time: 200
    }
  }
  componentDidMount(){
    this.fadeInRight();
  }
  componentWillReceiveProps(props){
    this.fadeOutLeft();
    this.wait(() => {
      this.setState(this.getStateFromProps(props), () => {
        this.fadeInRight();
      });
    }, this.state.time);
  }
  fadeOutLeft(){
    document.getElementById('page-content').className="animated fadeOutLeft"
  }
  remove(){
    document.getElementById('page-content').style.display='none;'
  }
  add(){
    document.getElementById('page-content').style.display='block;'
  }
  fadeInRight(){
    document.getElementById('page-content').className="animated fadeInRight"
  }
  wait(complete, time){
    setTimeout(() => {
      complete();
    }, time);
  };
  render(){
    return (
      <div id="page-content">
        {this.state.children}
      </div>
    );
  }
}
