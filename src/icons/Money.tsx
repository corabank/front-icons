import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Money: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M14.517 10.279v-.121c0-.987-.8-1.787-1.787-1.787h-1.516c-.414.029-1.373.07-1.81.602a1.786 1.786 0 0 0-.234 1.893c.294.623.92.822 1.609 1.025l2.386.598a1.787 1.787 0 0 1-.435 3.52h-1.394v-.004h-.122c-.987 0-1.787-.8-1.787-1.787v-.122m2.545-6.998v.804m0 9.376v-.804M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
  </StyledIcon>
);

Money.defaultProps = {
  color: '#3B3B3B',
};
