import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Contacts: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M18 2H5.611a1.5 1.5 0 0 0-1.5 1.5m0 0a1.5 1.5 0 0 0 1.5 1.5h12.28a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6.11a2 2 0 0 1-2-2V3.5zm10.766 13.446A1.946 1.946 0 0 0 12.931 15h-1.863a1.946 1.946 0 0 0-1.946 1.946M12 12.789a1.571 1.571 0 1 0 0-3.142 1.571 1.571 0 0 0 0 3.142z"/>
  </StyledIcon>
);

Contacts.defaultProps = {
  color: '#3B3B3B',
};
