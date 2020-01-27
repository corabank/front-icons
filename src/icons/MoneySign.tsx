import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const MoneySign: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M16 8.99961V8.80943C16 7.25815 14.8399 6.00079 13.4086 6.00079H11.2103C10.6102 6.04636 9.2192 6.10988 8.58622 6.9476C7.95323 7.78533 7.82124 8.94296 8.24702 9.9225C8.6728 10.902 9.58043 11.2145 10.5795 11.5332L14.0394 12.4731C15.3076 12.8189 16.1394 14.1347 15.979 15.5413C15.8186 16.948 14.7164 18.0047 13.4086 18.0055H11.3872V17.9992H11.2103C9.77899 17.9992 8.6189 16.7418 8.6189 15.1906V14.9988M12.3094 4V5.26365M12.3094 20V18.7363" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
