import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const PersonAdd: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} fillRule="evenodd" d="M8.516 7.016a3.484 3.484 0 1 1 6.968 0 3.484 3.484 0 0 1-6.968 0zM12 2.532a4.484 4.484 0 1 0 0 8.968 4.484 4.484 0 0 0 0-8.968zm0 10.976a16.112 16.112 0 0 0-4.093.527c-1.479.397-2.811 1.016-3.785 1.837-.527.445-.957.957-1.242 1.53a3.788 3.788 0 0 0-.29.808c-.06.254-.09.518-.09.79v1A1.5 1.5 0 0 0 4 21.5h16a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 0-1 0v1a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1c0-.868.441-1.667 1.267-2.363.777-.656 1.867-1.193 3.142-1.565L8.166 15A14.937 14.937 0 0 1 12 14.508a15.422 15.422 0 0 1 2.265.168.5.5 0 1 0 .148-.99A16.38 16.38 0 0 0 12 13.509zM19.5 13a.5.5 0 0 0-1 0v1.5H17a.5.5 0 0 0 0 1h1.5V17a.5.5 0 0 0 1 0v-1.5H21a.5.5 0 0 0 0-1h-1.5V13z" clipRule="evenodd"/>
  </Icon>
);

PersonAdd.defaultProps = {
  color: '#3B3B3B',
};
