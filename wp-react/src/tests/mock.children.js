import React from 'react'
import ReactDOM from 'react-dom'

let TheChildNode;

class Child extends React.Component {
  render(){
    <span>Hello from container.test.js</span>
  }
}

class GetChild extends React.Component {
  constructor(props){
    super(props);
    TheChildNode = props.children;
    this.state = {};
  }
  render(){
    <div>
      {this.props.children}
    </div>
  }
}

const getChildHelper = () => {
  <GetChild>
    <Child />
  </GetChild>
};

export default (<getChildHelper />);