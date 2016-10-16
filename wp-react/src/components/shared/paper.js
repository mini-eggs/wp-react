import React from 'react'
import Paper from 'material-ui/Paper'

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zDepth: props.data ? props.data.initial : 1,
      range: props.data ? props.data.range : 1
    }
  }
  zDepthAdd(){
    this.setState({zDepth: this.state.zDepth + this.state.range})
  }
  zDepthRemove(){
    this.setState({zDepth: this.state.zDepth - this.state.range})
  }
  render() {
    return (
      <Paper
        transitionEnabled={true}
        zDepth={this.state.zDepth}
        onMouseEnter={ () => {this.zDepthAdd()} }
        onMouseLeave={ () => {this.zDepthRemove()} }
      >
        {this.props.children}
      </Paper>
    );
  }
}