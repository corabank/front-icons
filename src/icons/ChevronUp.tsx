import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const ChevronUp: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6.001-6L6 14.997"/>
  </StyledIcon>
);

ChevronUp.defaultProps = {
  color: '#3B3B3B',
};
