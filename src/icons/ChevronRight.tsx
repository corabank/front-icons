import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const ChevronRight: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M10 18l6-6.001L10.003 6"/>
  </StyledIcon>
);

ChevronRight.defaultProps = {
  color: '#3B3B3B',
};
