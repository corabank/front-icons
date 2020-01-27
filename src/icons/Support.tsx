import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Support: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M6 18L8.464 15.536M18 6L15.536 8.464M8.464 8.464L6 6M18 18L15.536 15.536M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)