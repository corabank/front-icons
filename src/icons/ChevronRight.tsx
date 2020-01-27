import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ChevronRight: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M10 18L16 11.9987L10.0033 6" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
