import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const inline = {
  Tab: {
    backgroundColor:'#F6921E',
    padding: '10px 0'
  },
  Bar: {
    backgroundColor:'#fff'
  }
};

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items:props.data,
      value: props.data[0].title
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={inline.Bar}
      >
        {
          this.state.items.map((item,i) => {
            return <Tab
              key={i}
              style={inline.Tab}
              label={item.title}
              value={item.title}
            />
          })
        }
      </Tabs>
    );
  }
}