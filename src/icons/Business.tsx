import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Business: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M2 9.667L12 3l10 6.667M11 22l2-2-2-2m1 2H3m18 0h-6M4 17V8.333m16 0V17M8 11v4m4-4v4m4-4v4"/>
  </Icon>
);

Business.defaultProps = {
  color: '#3B3B3B',
};
