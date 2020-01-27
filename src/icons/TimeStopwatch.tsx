import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const TimeStopwatch: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M10 2H14M12 9V13M20 5L18 7M19 4L21 6M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
