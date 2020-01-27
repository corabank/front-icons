import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ChevronRightSmall: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M10 16L14 12L10 8" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
