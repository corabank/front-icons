import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Check: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M20 6.5l-11 11-5-5"/>
  </Icon>
);

Check.defaultProps = {
  color: '#3B3B3B',
};
