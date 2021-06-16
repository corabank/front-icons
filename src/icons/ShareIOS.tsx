import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const ShareIOS: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M8 10H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2m-4-7v11m0-11l3 3m-3-3L9.001 6"/>
  </Icon>
);

ShareIOS.defaultProps = {
  color: '#3B3B3B',
};
