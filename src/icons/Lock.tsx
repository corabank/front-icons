import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Lock: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M16 9V7a4 4 0 0 0-8 0v2m4 8.091V14m5 7H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm-5-6.454A.773.773 0 1 0 12 13a.773.773 0 0 0 0 1.546z"/>
  </Icon>
);

Lock.defaultProps = {
  color: '#3B3B3B',
};
