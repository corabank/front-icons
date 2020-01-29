import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Question: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#111" strokeLinecap="round" strokeLinejoin="round" d="M10 9.833a2 2 0 1 1 4 0c0 .8-.495 1.233-.989 1.567-.506.34-1.011.783-1.011 1.6v.25M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-.001-5a.25.25 0 1 0 .002.5A.25.25 0 0 0 12 16z"/>
  </StyledIcon>
)
