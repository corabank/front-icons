import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const ChevronLeft: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6.001L14.997 18"/>
  </Icon>
);

ChevronLeft.defaultProps = {
  color: '#3B3B3B',
};
