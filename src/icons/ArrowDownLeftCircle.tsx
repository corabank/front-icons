import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';


export const ArrowDownLeftCircle: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} d="M18.364 5.636l-.354.354.354-.354zm0 12.728l-.354-.354.354.354zm-12.728 0l.353-.354-.353.354zm3.01-3.718a.5.5 0 1 0 .707.707l-.707-.707zm6.707-5.292a.5.5 0 0 0-.707-.708l.707.708zM9.5 10.5a.5.5 0 1 0-1 0h1zm-1 4.5a.5.5 0 0 0 1 0h-1zm5 .5a.5.5 0 1 0 0-1v1zm-4.5-1a.5.5 0 1 0 0 1v-1zM5.99 5.99A8.5 8.5 0 0 1 12 3.5v-1a9.5 9.5 0 0 0-6.718 2.782l.707.708zM12 3.5a8.5 8.5 0 0 1 6.01 2.49l.707-.708A9.5 9.5 0 0 0 12 2.5v1zm6.01 2.49A8.5 8.5 0 0 1 20.5 12h1a9.5 9.5 0 0 0-2.782-6.718l-.708.708zM20.5 12a8.5 8.5 0 0 1-2.49 6.01l.707.707A9.5 9.5 0 0 0 21.5 12h-1zm-2.49 6.01A8.5 8.5 0 0 1 12 20.5v1a9.5 9.5 0 0 0 6.718-2.782l-.708-.708zM12 20.5a8.5 8.5 0 0 1-6.01-2.49l-.708.707A9.5 9.5 0 0 0 12 21.5v-1zm-6.01-2.49A8.5 8.5 0 0 1 3.5 12h-1a9.5 9.5 0 0 0 2.782 6.718l.707-.708zM3.5 12a8.5 8.5 0 0 1 2.49-6.01l-.708-.708A9.5 9.5 0 0 0 2.5 12h1zm5.853 3.354l6-6-.707-.708-6 6 .707.707zM8.5 10.5V15h1v-4.5h-1zm5 4H9v1h4.5v-1z"/>
  </Icon>
);

ArrowDownLeftCircle.defaultProps = {
  color: '#3B3B3B',
};
