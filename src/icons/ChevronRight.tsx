import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const ChevronRight: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M10 18l6-6.001L10.003 6"/>
  </Icon>
);

ChevronRight.defaultProps = {
  color: '#3B3B3B',
};
