import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Business: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M2 9.667L12 3L22 9.667M11 22L13 20L11 18M12 20H3M21 20H15M4 17V8.333M20 8.333V17M8 11V15M12 11V15M16 11V15" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
