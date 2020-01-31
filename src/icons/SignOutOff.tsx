import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const SignOutOff: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M12 4v8m5.657-5.657a8 8 0 1 1-11.314 0"/>
  </StyledIcon>
);

SignOutOff.defaultProps = {
  color: '#3B3B3B',
};
