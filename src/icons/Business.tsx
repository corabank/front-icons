import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Business: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M2 9.667L12 3l10 6.667M11 22l2-2-2-2m1 2H3m18 0h-6M4 17V8.333m16 0V17M8 11v4m4-4v4m4-4v4"/>
  </StyledIcon>
)
