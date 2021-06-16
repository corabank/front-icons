import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const PeopleUsers: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} fillRule="evenodd" d="M10.122 7.642a2.312 2.312 0 1 0-4.625 0 2.312 2.312 0 0 0 4.625 0zM7.81 4.329a3.312 3.312 0 1 1 0 6.625 3.312 3.312 0 0 1 0-6.625zm10.168 3.903a1.722 1.722 0 1 0-3.445 0 1.722 1.722 0 0 0 3.444 0zM16.255 5.51a2.722 2.722 0 1 1 0 5.444 2.722 2.722 0 0 1 0-5.444zm-4.067 8.9a3.834 3.834 0 0 0-2.711-1.122H6.143a3.834 3.834 0 0 0-3.833 3.834v1.11a.5.5 0 0 0 1 0v-1.11a2.834 2.834 0 0 1 2.833-2.834h3.334a2.833 2.833 0 0 1 2.833 2.834v1.11a.5.5 0 0 0 1 0v-1.11a3.834 3.834 0 0 0-1.123-2.711zm5.178-1.122a3.834 3.834 0 0 1 3.834 3.834v1.11a.5.5 0 0 1-1 0v-1.11a2.834 2.834 0 0 0-2.834-2.834h-2.222a.5.5 0 1 1 0-1h2.222z" clipRule="evenodd"/>
  </Icon>
);

PeopleUsers.defaultProps = {
  color: '#3B3B3B',
};
