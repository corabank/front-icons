import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const MenuNavigation: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <mask id="y" fill="#fff">
        <path fillRule="evenodd" d="M2.5 8.5A.5.5 0 0 1 3 8h18a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0 7A.5.5 0 0 1 3 15h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" clipRule="evenodd"/>
    </mask>
    <path fill={props.color} d="M3 7a1.5 1.5 0 0 0-1.5 1.5h2A.5.5 0 0 1 3 9V7zm18 0H3v2h18V7zm1.5 1.5A1.5 1.5 0 0 0 21 7v2a.5.5 0 0 1-.5-.5h2zM21 10a1.5 1.5 0 0 0 1.5-1.5h-2A.5.5 0 0 1 21 8v2zM3 10h18V8H3v2zM1.5 8.5A1.5 1.5 0 0 0 3 10V8a.5.5 0 0 1 .5.5h-2zM3 14a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2zm10 0H3v2h10v-2zm1.5 1.5A1.5 1.5 0 0 0 13 14v2a.5.5 0 0 1-.5-.5h2zM13 17a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2zM3 17h10v-2H3v2zm-1.5-1.5A1.5 1.5 0 0 0 3 17v-2a.5.5 0 0 1 .5.5h-2z" mask="url(#y)"/>
  </Icon>
);

MenuNavigation.defaultProps = {
  color: '#3B3B3B',
};
