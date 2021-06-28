import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Download: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} fillRule="evenodd" clipRule="evenodd" d="M12.5,4c0-0.3-0.2-0.5-0.5-0.5S11.5,3.7,11.5,4v10.8l-4.1-4.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7
	l5,5c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0,0,0,0l5-5c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0
	l-4.1,4.1V4z M20.5,16c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5v2c0,0.4-0.2,0.8-0.4,1.1s-0.7,0.4-1.1,0.4H6c-0.4,0-0.8-0.2-1.1-0.4
	S4.5,18.4,4.5,18v-2c0-0.3-0.2-0.5-0.5-0.5S3.5,15.7,3.5,16v2c0,0.7,0.3,1.3,0.7,1.8c0.5,0.5,1.1,0.7,1.8,0.7h12
	c0.7,0,1.3-0.3,1.8-0.7c0.5-0.5,0.7-1.1,0.7-1.8V16z"/>
  </Icon>
);

Download.defaultProps = {
  color: '#3B3B3B',
};
