import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const PersonCircle: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M17.707 18.958A7.848 7.848 0 0 0 12 16.5a7.845 7.845 0 0 0-5.707 2.459M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-7.875a2.812 2.812 0 1 0 0-5.624 2.812 2.812 0 0 0 0 5.624z"/>
  </Icon>
);

PersonCircle.defaultProps = {
  color: '#3B3B3B',
};
