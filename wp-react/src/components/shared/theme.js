import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin();

export default (props) => {
  return (
    <MuiThemeProvider>
      <div>
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}