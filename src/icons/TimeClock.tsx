import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const TimeClock: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M11.719 6.736v6.328L16.641 16M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
  </Icon>
);

TimeClock.defaultProps = {
  color: '#3B3B3B',
};
