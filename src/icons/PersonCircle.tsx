import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const PersonCircle: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M17.707 18.958A7.848 7.848 0 0 0 12 16.5a7.845 7.845 0 0 0-5.707 2.459M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-7.875a2.812 2.812 0 1 0 0-5.624 2.812 2.812 0 0 0 0 5.624z"/>
  </StyledIcon>
)
