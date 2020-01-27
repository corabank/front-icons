import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Plus: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M11.9995 12.4995C11.9995 12.2233 11.7757 11.9995 11.4995 11.9995C11.7757 11.9995 11.9995 11.7756 11.9995 11.4995C11.9995 11.7756 12.2234 11.9995 12.4995 11.9995C12.2234 11.9995 11.9995 12.2233 11.9995 12.4995Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
