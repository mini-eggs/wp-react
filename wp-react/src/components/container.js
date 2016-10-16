import React from 'react'

import Helmet from './shared/helmet'
import Paper from './shared/paper'
import BasicNavWrap from './basicNavWrap'
import Theme from './shared/theme'
import '../styles/bootstrap.css'
import '../styles/main.css'

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wp:props.data,
      default:props.default
    };
  }
  componentWillReceiveProps(props){
    this.setState({
      wp:props.data,
      default:props.default
    });
  }
  render() {
    return (
      <Theme>
        <Helmet title="See Spark Go" />
        <div className="container-fluid np">
          <div className="col-xs-12 np">
            <Paper data={{initial:1, range:0}}>
              <BasicNavWrap title="See Spark Go" data={this.state.wp} />
            </Paper>
          </div>
          <div className="col-xs-12 col-sm-2 np">
            <Paper>
              side menu
            </Paper>
          </div>
          <div className="col-xs-12 col-sm-10 np">
            <Paper>
              {React.cloneElement(this.state.default.children, {data:this.state.wp})}
            </Paper>
          </div>
        </div>
      </Theme>
    );
  }
}