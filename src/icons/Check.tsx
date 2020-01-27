import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Check: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M20 6.5L9 17.5L4 12.5" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
