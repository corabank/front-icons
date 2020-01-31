import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const ChevronLeft: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6.001L14.997 18"/>
  </StyledIcon>
);

ChevronLeft.defaultProps = {
  color: '#3B3B3B',
};
