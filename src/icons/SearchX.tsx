import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const SearchX: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path fill="#fff" fillRule="evenodd" d="M9.971 15.775a5.971 5.971 0 1 0 0-11.942 5.971 5.971 0 0 0 0 11.942z" clipRule="evenodd"/>
    <path fill="#fff" fillRule="evenodd" d="M14.155 14.063l2.923 2.963L20 19.99M7.879 12.021L12.12 7.78 7.88 12.02z" clipRule="evenodd"/>
    <path fill="#fff" fillRule="evenodd" d="M7.879 7.779l4.242 4.242L7.88 7.78z" clipRule="evenodd"/>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M14.155 14.063l2.923 2.963L20 19.99M7.879 12.021L12.12 7.78m-4.242 0l4.242 4.242m-2.15 3.754a5.971 5.971 0 1 0 0-11.942 5.971 5.971 0 0 0 0 11.942z"/>
  </StyledIcon>
);

SearchX.defaultProps = {
  color: '#3B3B3B',
};
