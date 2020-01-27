import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const LockUnlocked: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V9M12 17.091V14M8 9H7C5.89543 9 5 9.89543 5 11V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V11C19 9.89543 18.1046 9 17 9H8ZM12.0001 14.546C12.427 14.546 12.7731 14.1999 12.7731 13.773C12.7731 13.3461 12.427 13 12.0001 13C11.5731 13 11.2271 13.3461 11.2271 13.773C11.2271 14.1999 11.5731 14.546 12.0001 14.546Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
