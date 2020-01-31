import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Check: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M20 6.5l-11 11-5-5"/>
  </StyledIcon>
);

Check.defaultProps = {
  color: '#3B3B3B',
};
