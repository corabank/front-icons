import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const PinLocation: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M4.74609 10.1749C4.74609 13.4179 8.65909 18.1669 10.7381 20.4609C10.8975 20.6377 11.0922 20.779 11.3097 20.8758C11.5272 20.9725 11.7626 21.0225 12.0006 21.0225C12.2386 21.0225 12.474 20.9725 12.6915 20.8758C12.9089 20.779 13.1037 20.6377 13.2631 20.4609C15.3411 18.1669 19.2551 13.4179 19.2551 10.1749C19.2551 5.64895 15.5071 3.02295 12.0011 3.02295C8.49509 3.02295 4.74609 5.64895 4.74609 10.1749Z" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.0001 12.4109C13.1787 12.4109 14.1341 11.4555 14.1341 10.2769C14.1341 9.09837 13.1787 8.14295 12.0001 8.14295C10.8215 8.14295 9.86609 9.09837 9.86609 10.2769C9.86609 11.4555 10.8215 12.4109 12.0001 12.4109Z" stroke="#3B3B3B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)