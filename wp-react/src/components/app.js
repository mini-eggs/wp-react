import React from 'react'

import Container from './container'

const wp = window.WORDPRESS_CONTENT;

export default (props) => {
  return (
    <Container data={wp} default={props} />
  );
};