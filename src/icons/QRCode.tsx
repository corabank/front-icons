import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const QRCode: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path d="M6.19629 6.196H10.0003V10H6.19629V6.196Z" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.12012 14.12H10.0001V18H6.12012V14.12Z" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 16V14" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.8037 17.804H15.8037" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.88 9.88H14V6H17.88V9.88Z" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.5005 7.978V4.5C21.5005 3.96957 21.2897 3.46086 20.9147 3.08579C20.5396 2.71071 20.0309 2.5 19.5005 2.5H16.0225" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.3037 14H17.8037" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.8037 14V15.5" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.978 2.5H4.5C3.96957 2.5 3.46086 2.71071 3.08579 3.08579C2.71071 3.46086 2.5 3.96957 2.5 4.5V7.978" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.5 16.022V19.5C2.5 20.0304 2.71071 20.5391 3.08579 20.9142C3.46086 21.2893 3.96957 21.5 4.5 21.5H7.978" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.0225 21.5H19.5005C20.0309 21.5 20.5396 21.2893 20.9147 20.9142C21.2897 20.5391 21.5005 20.0304 21.5005 19.5V16.022" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
);

QRCode.defaultProps = {
  color: '#3B3B3B',
};
