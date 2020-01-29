import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Card: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path fill="#3B3B3B" fillRule="evenodd" d="M3.5 7.8c0-1.31.966-2.3 2.071-2.3h12.857c1.106 0 2.072.99 2.072 2.3v.7h-17v-.7zM2.5 9V7.8c0-1.781 1.336-3.3 3.071-3.3h12.857c1.736 0 3.072 1.519 3.072 3.3v8.4c0 1.781-1.335 3.3-3.071 3.3H5.571c-1.735 0-3.071-1.519-3.071-3.3V9zm18 .5v6.7c0 1.31-.966 2.3-2.071 2.3H5.571c-1.104 0-2.071-.99-2.071-2.3V9.5h17zM6.5 13a.5.5 0 0 1 .5-.5h2.571a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5z" clipRule="evenodd"/>
  </StyledIcon>
)
