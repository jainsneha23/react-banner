import Component from '../src';

import React from 'react';
import {render} from 'react-dom';

const props = {
  imgsrc: 'http://www.johnstonefitness.com/wp-content/uploads/2011/07/hot-summer-deals-300x208.jpg',
  alt: 'Summer Deals'
};

render(
  <Component {...props} />,
  document.getElementById('app')
);
