import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Close: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M16.95 7.049l-9.901 9.9m9.9 0l-9.9-9.9"/>
  </StyledIcon>
);

Close.defaultProps = {
  color: '#3B3B3B',
};
