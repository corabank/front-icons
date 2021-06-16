import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Rocket: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M12.692 11.807l-7.075 7.076m7.906-13.165a21.57 21.57 0 0 1 5.259 5.26m-3.3 4.283l-.027 3.13a.943.943 0 0 1-.276.658l-2.815 2.815a.465.465 0 0 1-.781-.222l-.83-3.512M9.239 9.018l-3.13.026a.944.944 0 0 0-.658.277l-2.815 2.815a.465.465 0 0 0 .222.781l3.512.83M19.84 8.71l.63-3.03a1.394 1.394 0 0 0-1.65-1.649l-3.03.63a9.475 9.475 0 0 0-4.77 2.576L8.689 9.57a8.525 8.525 0 0 0-2.408 4.794l-.035.241a2.788 2.788 0 0 0 .787 2.376l.487.487a2.788 2.788 0 0 0 2.376.787l.24-.035a8.53 8.53 0 0 0 4.795-2.407l2.333-2.333a9.462 9.462 0 0 0 2.577-4.77z"/>
  </Icon>
);

Rocket.defaultProps = {
  color: '#3B3B3B',
};
