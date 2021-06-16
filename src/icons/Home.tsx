import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Home: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} fillRule="evenodd" d="M11.008 5.044a1.5 1.5 0 0 1 1.984 0l4.724 4.164v8.363a.5.5 0 0 1-.5.5h-3.162v-4.41a.5.5 0 0 0-.5-.5h-3.108a.5.5 0 0 0-.5.5v4.41H6.784a.5.5 0 0 1-.5-.5V9.208l4.724-4.164zM5.284 10.09l-1.5 1.322a.5.5 0 1 1-.661-.75l7.224-6.368a2.5 2.5 0 0 1 3.306 0l7.225 6.368a.5.5 0 0 1-.662.75l-1.5-1.322v7.481a1.5 1.5 0 0 1-1.5 1.5h-3.662a.5.5 0 0 1-.5-.5v-4.41h-2.108v4.41a.5.5 0 0 1-.5.5H6.784a1.5 1.5 0 0 1-1.5-1.5V10.09z" clipRule="evenodd"/>
  </Icon>
);

Home.defaultProps = {
  color: '#3B3B3B',
};
