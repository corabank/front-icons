import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Copy: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19 21H11C9.89543 21 9 20.1046 9 19V11C9 9.89543 9.89543 9 11 9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V13C15 14.1046 14.1046 15 13 15Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
