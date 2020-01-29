import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Search: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#111" strokeLinecap="round" strokeLinejoin="round" d="M14.155 14.063L20 19.99M9.971 15.775a5.971 5.971 0 1 0 0-11.942 5.971 5.971 0 0 0 0 11.942z"/>
  </StyledIcon>
)
