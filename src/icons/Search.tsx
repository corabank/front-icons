import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Search: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M14.155 14.063L20 19.99M9.971 15.775C13.2687 15.775 15.942 13.1017 15.942 9.80401C15.942 6.50632 13.2687 3.83301 9.971 3.83301C6.67331 3.83301 4 6.50632 4 9.80401C4 13.1017 6.67331 15.775 9.971 15.775Z" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
