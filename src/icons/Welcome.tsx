import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Welcome: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M9.153 1.375L9.592 3.013M14.432 21.076L14.847 22.625M4.222 4.222L5.421 5.421M18.644 18.644L19.778 19.778M1.375 9.153L3.013 9.592M21.076 14.432L22.625 14.847M1.375 14.847L3.013 14.408M21.076 9.568L22.625 9.153M4.222 19.778L5.421 18.579M18.644 5.356L19.778 4.222M9.153 22.625L9.592 20.987M14.432 2.924L14.847 1.375M14.31 7.5C16.294 7.5 17.625 9.362 17.625 11.097C17.625 14.722 13.111 17.5 12 17.5C10.889 17.5 6.375 14.722 6.375 11.097C6.375 9.362 7.706 7.5 9.69 7.5C10.824 7.5 11.569 8.066 12 8.569C12.431 8.066 13.176 7.5 14.31 7.5Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
