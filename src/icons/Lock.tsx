import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Lock: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M16 9V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9M12 17.091V14M17 21H7C5.89543 21 5 20.1046 5 19V11C5 9.89543 5.89543 9 7 9H17C18.1046 9 19 9.89543 19 11V19C19 20.1046 18.1046 21 17 21ZM12.0001 14.546C12.427 14.546 12.7731 14.1999 12.7731 13.773C12.7731 13.3461 12.427 13 12.0001 13C11.5731 13 11.2271 13.3461 11.2271 13.773C11.2271 14.1999 11.5731 14.546 12.0001 14.546Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)