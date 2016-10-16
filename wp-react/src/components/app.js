import React from 'react'

import Container from './container'

export default (props) => {
  return (
    <Container data={props.route.data} default={props} />
  );
};