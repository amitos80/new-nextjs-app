import React from 'react';
import LazyLoad from 'react-lazyload';

export default ({ children, height = 400, offset }) => (
  <LazyLoad once height={height} offset={offset}>
    {children}
  </LazyLoad>
);
