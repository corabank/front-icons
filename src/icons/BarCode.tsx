import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const BarCode: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <mask id="m" fill="#fff">
        <path fillRule="evenodd" d="M3.5 4.5A.5.5 0 0 1 4 5v14a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm17 0a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm-14 0A.5.5 0 0 1 7 5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm2.75 0a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm2.75 0a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm2.75 0a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5zm2.75 0a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z" clipRule="evenodd"/>
    </mask>
    <path fill={props.color} d="M5 5a1.5 1.5 0 0 0-1.5-1.5v2A.5.5 0 0 1 3 5h2zm0 14V5H3v14h2zm-1.5 1.5A1.5 1.5 0 0 0 5 19H3a.5.5 0 0 1 .5-.5v2zM2 19a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5H2zM2 5v14h2V5H2zm1.5-1.5A1.5 1.5 0 0 0 2 5h2a.5.5 0 0 1-.5.5v-2zM22 5a1.5 1.5 0 0 0-1.5-1.5v2A.5.5 0 0 1 20 5h2zm0 14V5h-2v14h2zm-1.5 1.5A1.5 1.5 0 0 0 22 19h-2a.5.5 0 0 1 .5-.5v2zM19 19a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm0-14v14h2V5h-2zm1.5-1.5A1.5 1.5 0 0 0 19 5h2a.5.5 0 0 1-.5.5v-2zM8 5a1.5 1.5 0 0 0-1.5-1.5v2A.5.5 0 0 1 6 5h2zm0 10V5H6v10h2zm-1.5 1.5A1.5 1.5 0 0 0 8 15H6a.5.5 0 0 1 .5-.5v2zM5 15a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5H5zM5 5v10h2V5H5zm1.5-1.5A1.5 1.5 0 0 0 5 5h2a.5.5 0 0 1-.5.5v-2zM10.75 5a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2zm0 10V5h-2v10h2zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2zM7.75 15a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm0-10v10h2V5h-2zm1.5-1.5A1.5 1.5 0 0 0 7.75 5h2a.5.5 0 0 1-.5.5v-2zM13.5 5A1.5 1.5 0 0 0 12 3.5v2a.5.5 0 0 1-.5-.5h2zm0 10V5h-2v10h2zM12 16.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2zM10.5 15a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm0-10v10h2V5h-2zM12 3.5A1.5 1.5 0 0 0 10.5 5h2a.5.5 0 0 1-.5.5v-2zM16.25 5a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2zm0 10V5h-2v10h2zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2zm-1.5-1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm0-10v10h2V5h-2zm1.5-1.5a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2zM19 5a1.5 1.5 0 0 0-1.5-1.5v2A.5.5 0 0 1 17 5h2zm0 10V5h-2v10h2zm-1.5 1.5A1.5 1.5 0 0 0 19 15h-2a.5.5 0 0 1 .5-.5v2zM16 15a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm0-10v10h2V5h-2zm1.5-1.5A1.5 1.5 0 0 0 16 5h2a.5.5 0 0 1-.5.5v-2z" mask="url(#m)"/>
  </Icon>
);

BarCode.defaultProps = {
  color: '#3B3B3B',
};
