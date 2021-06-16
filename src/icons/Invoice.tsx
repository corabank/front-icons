import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Invoice: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M10 11h4m0 3h-4m0 3h2.394M7 12H5c-1.105 0-2-1.023-2-2.286V6.286C3 5.023 3.895 4 5 4h14c1.105 0 2 1.023 2 2.286v3.429C21 10.977 20.105 12 19 12h-2M7 21l2.5-1 2.5 1 2.5-1 2.5 1V8H7v13z"/>
  </Icon>
);

Invoice.defaultProps = {
  color: '#3B3B3B',
};
