import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Flag: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path d="M1 11.9999C1 11.9999 1.875 11.2729 4.5 11.2729C7.125 11.2729 8.875 12.9999 11.5 12.9999C14.125 12.9999 15 12.0229 15 12.0229" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15 12.02V2" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 18.9999V1.92993" stroke={props.color} stroke-linecap="round" stroke-linejoin="round"/>
    <path
      d="M1 1.932C1 1.932 1.875 1 4.5 1C7.125 1 8.875 2.727 11.5 2.727C14.125 2.727 15 2 15 2"
      stroke={props.color}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </StyledIcon>
);

Flag.defaultProps = {
  color: '#3B3B3B',
};
