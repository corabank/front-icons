import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const ChevronRightSmall: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M10 16l4-4-4-4"/>
  </StyledIcon>
);

ChevronRightSmall.defaultProps = {
  color: '#3B3B3B',
};
