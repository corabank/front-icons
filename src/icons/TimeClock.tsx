import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const TimeClock: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M11.719 6.736v6.328L16.641 16M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
  </StyledIcon>
)
