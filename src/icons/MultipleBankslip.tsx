import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const MultipleBankslip: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <g>
      <path fill={props.color} d="M18.8,3.6l-2.8-2.8l0,0C15.5,0.3,14.8,0,14.2,0h0H7C6.2,0,5.5,0.4,5,1c0,0,0,0,0,0l-3,0.8l0,0
        c-1.3,0.3-2.2,1.7-1.9,3l3.2,13.6c0.3,1.3,1.7,2.2,3,1.9l0,0l5.2-1.3H17c1.4,0,2.5-1.1,2.5-2.5V5.3v0C19.5,4.7,19.2,4,18.8,3.6z
        M14.5,1c0.3,0.1,0.5,0.2,0.7,0.4l2.8,2.8v0c0.2,0.2,0.3,0.5,0.4,0.7H15c-0.3,0-0.5-0.2-0.5-0.5V1z M6.1,19.3
        c-0.8,0.2-1.6-0.3-1.8-1.1L1.1,4.5C0.9,3.7,1.4,2.9,2.2,2.7l0,0l2.3-0.6c0,0.1,0,0.2,0,0.3v14C4.5,17.9,5.6,19,7,19h0.3L6.1,19.3z
        M18.5,16.5c0,0.8-0.7,1.5-1.5,1.5H7c-0.8,0-1.5-0.7-1.5-1.5v-14C5.5,1.7,6.2,1,7,1h6.5v3.5C13.5,5.3,14.2,6,15,6h3.5V16.5z"/>
      <path fill={props.color} d="M14,12c-0.3,0-0.5,0.2-0.5,0.5v3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5v-3C14.5,12.2,14.3,12,14,12z"/>
      <path fill={props.color} d="M12,12c-0.3,0-0.5,0.2-0.5,0.5v3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5v-3C12.5,12.2,12.3,12,12,12z"/>
      <path fill={props.color} d="M16,16c0.3,0,0.5-0.2,0.5-0.5v-3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5v3C15.5,15.8,15.7,16,16,16z"/>
      <path fill={props.color} d="M10,12c-0.3,0-0.5,0.2-0.5,0.5v3c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5v-3C10.5,12.2,10.3,12,10,12z"/>
      <path fill={props.color} d="M8,12c-0.3,0-0.5,0.2-0.5,0.5v3C7.5,15.8,7.7,16,8,16s0.5-0.2,0.5-0.5v-3C8.5,12.2,8.3,12,8,12z"/>
    </g>
  </Icon>
);

MultipleBankslip.defaultProps = {
  color: '#3B3B3B',
};
