import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ChevronRightSmall: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M10 16l4-4-4-4"/>
  </StyledIcon>
)
