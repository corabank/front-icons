import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const CameraScanBarCode: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} fillRule="evenodd" d="M2.5 5.25A2.75 2.75 0 0 1 5.25 2.5H7.5a.5.5 0 0 1 0 1H5.25A1.75 1.75 0 0 0 3.5 5.25V7.5a.5.5 0 0 1-1 0V5.25zM3 16a.5.5 0 0 1 .5.5v2.25c0 .966.784 1.75 1.75 1.75H7.5a.5.5 0 0 1 0 1H5.25a2.75 2.75 0 0 1-2.75-2.75V16.5A.5.5 0 0 1 3 16zm18.5.5a.5.5 0 0 0-1 0v2.25a1.75 1.75 0 0 1-1.75 1.75H16.5a.5.5 0 0 0 0 1h2.25a2.75 2.75 0 0 0 2.75-2.75V16.5zM16 3a.5.5 0 0 1 .5-.5h2.25a2.75 2.75 0 0 1 2.75 2.75V7.5a.5.5 0 0 1-1 0V5.25a1.75 1.75 0 0 0-1.75-1.75H16.5A.5.5 0 0 1 16 3zM8.028 8a.5.5 0 0 1 .5.5v5a.502.502 0 0 1-.5.5.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5zm1.986 6a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5zM11.5 8.5a.5.5 0 0 1 1 0v5a.5.5 0 1 1-1 0v-5zm1.986 0a.5.5 0 0 1 1 0v5a.5.5 0 1 1-1 0v-5zm1.986 0a.5.5 0 1 1 1 0v5a.5.5 0 0 1-1 0v-5zM5.862 8a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm12.277 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z" clipRule="evenodd"/>
  </Icon>
);

CameraScanBarCode.defaultProps = {
  color: '#3B3B3B',
};
