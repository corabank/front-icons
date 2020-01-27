import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const SignOutOff: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M12 4V12M17.657 6.343C20.7811 9.46724 20.781 14.5325 17.6568 17.6566C14.5326 20.7807 9.46738 20.7807 6.34319 17.6566C3.21901 14.5325 3.21892 9.46724 6.343 6.343" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
