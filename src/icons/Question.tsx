import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Question: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M10 9.833C10 8.72843 10.8954 7.833 12 7.833C13.1046 7.833 14 8.72843 14 9.833C14 10.633 13.505 11.066 13.011 11.4C12.505 11.74 12 12.183 12 13V13.25M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM11.999 16C11.8611 16.0006 11.7496 16.1127 11.75 16.2507C11.7504 16.3886 11.8624 16.5002 12.0003 16.5C12.1383 16.4998 12.25 16.3879 12.25 16.25C12.25 16.1835 12.2235 16.1198 12.1764 16.0729C12.1293 16.026 12.0655 15.9997 11.999 16Z" stroke="#111111" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
