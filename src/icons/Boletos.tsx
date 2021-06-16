import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Boletos: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} d="M18.414 6.414l-.354.354.354-.354zm-2.828-2.828l-.354.353.354-.353zM14.172 3v-.5.5zM19 7.828h.5-.5zm0 .672a.5.5 0 0 0 0-1v1zM14.5 3a.5.5 0 0 0-1 0h1zm0 12a.5.5 0 0 0-1 0h1zm-1 3a.5.5 0 0 0 1 0h-1zm-1-3a.5.5 0 0 0-1 0h1zm-1 3a.5.5 0 0 0 1 0h-1zm5-3a.5.5 0 0 0-1 0h1zm-1 3a.5.5 0 0 0 1 0h-1zm-5-3a.5.5 0 0 0-1 0h1zm-1 3a.5.5 0 0 0 1 0h-1zm-1-3a.5.5 0 0 0-1 0h1zm-1 3a.5.5 0 0 0 1 0h-1zM18.768 6.06L15.94 3.232l-.708.708 2.828 2.828.708-.708zM15.94 3.233a2.5 2.5 0 0 0-1.768-.733v1a1.5 1.5 0 0 1 1.06.44l.708-.708zM14.172 2.5H7v1h7.172v-1zM7 2.5A2.5 2.5 0 0 0 4.5 5h1A1.5 1.5 0 0 1 7 3.5v-1zM4.5 5v14h1V5h-1zm0 14A2.5 2.5 0 0 0 7 21.5v-1A1.5 1.5 0 0 1 5.5 19h-1zM7 21.5h10v-1H7v1zm10 0a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5v1zm2.5-2.5V7.828h-1V19h1zm0-11.172a2.5 2.5 0 0 0-.733-1.768l-.706.708a1.5 1.5 0 0 1 .439 1.06h1zM19 7.5h-4v1h4v-1zm-4 0a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 15 8.5v-1zm-.5-.5V3h-1v4h1zm-1 8v3h1v-3h-1zm-2 0v3h1v-3h-1zm4 0v3h1v-3h-1zm-6 0v3h1v-3h-1zm-2 0v3h1v-3h-1z"/>
  </Icon>
);

Boletos.defaultProps = {
  color: '#3B3B3B',
};
