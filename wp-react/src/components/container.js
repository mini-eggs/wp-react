import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin();

import Helmet from './shared/helmet'
import Paper from './shared/paper'
import BasicNav from './basicNav'
import BasicAppBar from './basicAppBar'
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
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Helmet title="See Spark Go" />
          <div className="container-fluid np">
            <div className="col-xs-12 np">
              Container
            </div>
          </div>
          <div className="container-fluid np">
            <div className="col-xs-12 col-lg-10 offset-lg-1 np">
              <div className="col-xs-12 np">
                <Paper data={{initial:1, range:0}}>
                  <BasicAppBar title={'See Spark Go'} />
                  <BasicNav data={this.state.wp.menu} />
                </Paper>
              </div>
              <div className="col-xs-12 col-sm-2 np">
                <Paper>
                  side menu
                </Paper>
              </div>
              <div className="col-xs-12 col-sm-10 np">
                <Paper>
                  {this.props.default.children}
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}