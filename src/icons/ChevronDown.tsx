import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const ChevronDown: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M6 9l6.001 6L18 9.003"/>
  </StyledIcon>
);

ChevronDown.defaultProps = {
  color: '#3B3B3B',
};
