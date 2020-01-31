import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Search: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M14.155 14.063L20 19.99M9.971 15.775a5.971 5.971 0 1 0 0-11.942 5.971 5.971 0 0 0 0 11.942z"/>
  </StyledIcon>
);

Search.defaultProps = {
  color: '#3B3B3B',
};
