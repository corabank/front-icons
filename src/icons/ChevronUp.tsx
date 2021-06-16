import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const ChevronUp: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6.001-6L6 14.997"/>
  </Icon>
);

ChevronUp.defaultProps = {
  color: '#3B3B3B',
};
