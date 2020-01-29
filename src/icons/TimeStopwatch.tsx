import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const TimeStopwatch: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M10 2h4m-2 7v4m8-8l-2 2m1-3l2 2m-9 15a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/>
  </StyledIcon>
)
