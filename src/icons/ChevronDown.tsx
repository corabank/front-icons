import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const ChevronDown: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M6 9l6.001 6L18 9.003"/>
  </Icon>
);

ChevronDown.defaultProps = {
  color: '#3B3B3B',
};
