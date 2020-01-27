import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ChevronUp: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M18 15L11.9987 9L6 14.9967" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
