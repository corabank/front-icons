import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Close: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M16.9497 7.04883L7.04883 16.9497M16.9497 16.9497L7.04883 7.04883" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
