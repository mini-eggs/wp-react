import React from 'react'

import Paper from './shared/paper'
import BasicNavWrap from './nav/'
import Theme from './shared/theme'
import Transition from './shared/transition'
import FooterComp from './footer'
import '../styles/bootstrap.css'
import '../styles/animate.css'
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
        <div className="pageWrap">
          <div className="container-fluid np">
            <Paper data={{initial:1, range:0}}>
              <BasicNavWrap title="See Spark Go" data={this.state.wp} />
            </Paper>
            <div className="col-xs-12 np">
              <Transition data={this.state.default.children}>
                {React.cloneElement(this.state.default.children, {data:this.state.wp})}
              </Transition>
            </div>
            <div className="col-xs-12 np">
              <Paper data={{initial:0, range:0}}>
                <FooterComp />
              </Paper>
            </div>
          </div>
        </div>
      </Theme>
    );
  }
}