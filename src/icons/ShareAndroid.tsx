import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ShareAndroid: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M14.667 8L9.333 10.667M14.667 16L9.333 13.333M6.667 14.667C8.13994 14.667 9.334 13.4729 9.334 12C9.334 10.5271 8.13994 9.333 6.667 9.333C5.19406 9.333 4 10.5271 4 12C4 13.4729 5.19406 14.667 6.667 14.667ZM17.333 9.334C18.8059 9.334 20 8.13994 20 6.667C20 5.19406 18.8059 4 17.333 4C15.8601 4 14.666 5.19406 14.666 6.667C14.666 8.13994 15.8601 9.334 17.333 9.334ZM17.333 20C18.8059 20 20 18.8059 20 17.333C20 15.8601 18.8059 14.666 17.333 14.666C15.8601 14.666 14.666 15.8601 14.666 17.333C14.666 18.8059 15.8601 20 17.333 20Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)