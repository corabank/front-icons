import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Invoice: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M10 11H14M14 14H10M10 17H12.394M7 12H5C3.895 12 3 10.977 3 9.714V6.286C3 5.023 3.895 4 5 4H19C20.105 4 21 5.023 21 6.286V9.715C21 10.977 20.105 12 19 12H17M7 21L9.5 20L12 21L14.5 20L17 21V8H7V21Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
