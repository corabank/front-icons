import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Support: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M6 18l2.464-2.464M18 6l-2.464 2.464m-7.072 0L6 6m12 12l-2.464-2.464M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
  </Icon>
)

Support.defaultProps = {
  color: '#3B3B3B',
};
