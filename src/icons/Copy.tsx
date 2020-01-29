import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Copy: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path fillRule="evenodd" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M19 21h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" clipRule="evenodd"/>
    <path fillRule="evenodd" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M13 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" clipRule="evenodd"/>
  </StyledIcon>
)
