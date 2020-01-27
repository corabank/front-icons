import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ChevronLeft: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M15 6L9 12.0013L14.9967 18" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
