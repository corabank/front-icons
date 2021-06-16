import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const File: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M19 10V9a2 2 0 0 0-2-2h-4.465a1 1 0 0 1-.832-.445l-1.406-2.109A1 1 0 0 0 9.465 4H5a2 2 0 0 0-2 2v12.853a1.146 1.146 0 1 0 2.245.33l2.327-7.757A2 2 0 0 1 9.488 10h9.84a2 2 0 0 1 1.92 2.563l-1.761 6c-.25.852-1.031 1.737-1.92 1.737H4"/>
  </Icon>
);

File.defaultProps = {
  color: '#3B3B3B',
};
