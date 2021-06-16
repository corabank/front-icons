import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Flag: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path d="M5 21V3.92999M19 14.02V4C19 4 18.125 4.727 15.5 4.727C12.875 4.727 11.125 3 8.5 3C5.875 3 5 3.932 5 3.932M5 14C5 14 5.875 13.273 8.5 13.273C11.125 13.273 12.875 15 15.5 15C18.125 15 19 14.023 19 14.023" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
  </Icon>
);

Flag.defaultProps = {
  color: '#3B3B3B',
};
