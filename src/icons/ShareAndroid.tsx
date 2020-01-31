import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const ShareAndroid: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M14.667 8l-5.334 2.667M14.667 16l-5.334-2.667m-2.666 1.334a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334zm10.666-5.333a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334zm0 10.666a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334z"/>
  </StyledIcon>
);

ShareAndroid.defaultProps = {
  color: '#3B3B3B',
};
