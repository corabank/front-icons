import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const NotificationEmpty: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M9.70799 18.417V18.875C9.70799 20.1408 10.7342 21.167 12 21.167C13.2658 21.167 14.292 20.1408 14.292 18.875V18.417M13.833 5.58301V4.33301C13.833 3.50458 13.1614 2.83301 12.333 2.83301H11.666C10.8376 2.83301 10.166 3.50458 10.166 4.33301V5.58301M6.50099 10.167C6.50099 7.63589 8.55287 5.58401 11.084 5.58401H12.917C15.4481 5.58401 17.5 7.63589 17.5 10.167V13.005C17.5001 13.5354 17.7109 14.044 18.086 14.419L18.797 15.13C19.141 15.4735 19.3343 15.9398 19.334 16.426V17.417C19.334 17.9693 18.8863 18.417 18.334 18.417H5.66699C5.11471 18.417 4.66699 17.9693 4.66699 17.417V16.426C4.66699 15.94 4.85999 15.474 5.20399 15.13L5.91399 14.419C6.28909 14.044 6.49988 13.5354 6.49999 13.005V10.167" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)