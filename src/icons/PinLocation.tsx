import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const PinLocation: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M4.746 10.175c0 3.243 3.913 7.992 5.992 10.286a1.7 1.7 0 0 0 2.525 0c2.078-2.294 5.992-7.043 5.992-10.286 0-4.526-3.748-7.152-7.254-7.152-3.506 0-7.255 2.626-7.255 7.152z"/>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M12 12.41a2.134 2.134 0 1 0 0-4.267 2.134 2.134 0 0 0 0 4.268z"/>
  </StyledIcon>
)
