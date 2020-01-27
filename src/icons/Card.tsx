import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Card: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7.8C3.5 6.48907 4.4665 5.5 5.571 5.5H18.428C19.5336 5.5 20.5 6.4892 20.5 7.8V8.5H3.5V7.8ZM2.5 9V7.8C2.5 6.01893 3.8355 4.5 5.571 4.5H18.428C20.1644 4.5 21.5 6.0188 21.5 7.8V9V16.2C21.5 17.9811 20.1645 19.5 18.429 19.5H5.571C3.8355 19.5 2.5 17.9811 2.5 16.2V9ZM20.5 9.5V16.2C20.5 17.5109 19.5335 18.5 18.429 18.5H5.571C4.4665 18.5 3.5 17.5109 3.5 16.2V9.5H20.5ZM6.5 13C6.5 12.7239 6.72386 12.5 7 12.5H9.571C9.84714 12.5 10.071 12.7239 10.071 13C10.071 13.2761 9.84714 13.5 9.571 13.5H7C6.72386 13.5 6.5 13.2761 6.5 13Z" fill="#3B3B3B"/>
  </StyledIcon>
)
