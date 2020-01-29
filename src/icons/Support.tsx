import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Support: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#111" strokeLinecap="round" strokeLinejoin="round" d="M6 18l2.464-2.464M18 6l-2.464 2.464m-7.072 0L6 6m12 12l-2.464-2.464M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>
  </StyledIcon>
)
