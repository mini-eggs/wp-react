import React from 'react'
import Helmet from 'react-helmet'

export default (props) => {
  return (
    <Helmet
      title={props.title}
      meta={[{ property: 'og:site_name', content: props.title }]}
    />
  );
}