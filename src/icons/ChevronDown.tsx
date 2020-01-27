import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ChevronDown: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M6 9L12.0013 15L18 9.00333" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
