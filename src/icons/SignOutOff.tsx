import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const SignOutOff: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M12 4v8m5.657-5.657a8 8 0 1 1-11.314 0"/>
  </StyledIcon>
)
