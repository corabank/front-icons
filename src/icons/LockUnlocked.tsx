import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const LockUnlocked: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M16 6a4 4 0 0 0-8 0v3m4 8.091V14M8 9H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H8zm4 5.546A.773.773 0 1 0 12 13a.773.773 0 0 0 0 1.546z"/>
  </Icon>
);

LockUnlocked.defaultProps = {
  color: '#3B3B3B',
};
