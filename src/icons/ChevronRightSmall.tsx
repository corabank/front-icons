import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const ChevronRightSmall: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M10 16l4-4-4-4"/>
  </Icon>
);

ChevronRightSmall.defaultProps = {
  color: '#3B3B3B',
};
