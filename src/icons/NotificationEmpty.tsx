import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const NotificationEmpty: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M15.702 7.974l.979 2.689c.183.503.558.912 1.043 1.138l.918.428c.444.207.788.582.956 1.043a2.007 2.007 0 0 1-1.2 2.573L8.274 19.53a2.007 2.007 0 0 1-2.573-1.2 1.851 1.851 0 0 1 .062-1.413l.428-.918c.226-.485.25-1.04.067-1.542l-.98-2.689a4.621 4.621 0 0 1 2.763-5.923l1.737-.632A4.621 4.621 0 0 1 15.7 7.975m-5.148-3.044l-.3-.821a1.749 1.749 0 0 0-3.285 1.196l.299.821m6.977 11.23l-4.423 1.61.16.442a2.355 2.355 0 0 0 4.425-1.61l-.162-.442z"/>
  </StyledIcon>
);

NotificationEmpty.defaultProps = {
  color: '#3B3B3B',
};
