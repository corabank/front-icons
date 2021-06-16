import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Notification: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M9.708 18.417v.458a2.292 2.292 0 0 0 4.584 0v-.458m-.459-12.834v-1.25a1.5 1.5 0 0 0-1.5-1.5h-.667a1.5 1.5 0 0 0-1.5 1.5v1.25m-3.665 4.584a4.583 4.583 0 0 1 4.583-4.583h1.833a4.583 4.583 0 0 1 4.583 4.583v2.838a2 2 0 0 0 .586 1.414l.711.711c.344.343.537.81.537 1.296v.991a1 1 0 0 1-1 1H5.667a1 1 0 0 1-1-1v-.991c0-.486.193-.952.537-1.296l.71-.711a2 2 0 0 0 .586-1.414v-2.838"/>
  </Icon>
);

Notification.defaultProps = {
  color: '#3B3B3B',
};
