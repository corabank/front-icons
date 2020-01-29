import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ShareAndroid: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M14.667 8l-5.334 2.667M14.667 16l-5.334-2.667m-2.666 1.334a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334zm10.666-5.333a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334zm0 10.666a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334z"/>
  </StyledIcon>
)
