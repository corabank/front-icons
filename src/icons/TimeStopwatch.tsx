import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const TimeStopwatch: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M10 2h4m-2 7v4m8-8l-2 2m1-3l2 2m-9 15a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
  </Icon>
);

TimeStopwatch.defaultProps = {
  color: '#3B3B3B',
};
