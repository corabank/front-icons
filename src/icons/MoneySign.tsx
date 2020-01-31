import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const MoneySign: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M16 9v-.19C16 7.257 14.84 6 13.409 6H11.21c-.6.046-1.99.11-2.624.948a2.998 2.998 0 0 0-.339 2.974c.426.98 1.333 1.292 2.332 1.611l3.46.94c1.269.346 2.1 1.662 1.94 3.068-.16 1.407-1.263 2.464-2.57 2.465h-2.022v-.007h-.177C9.78 18 8.62 16.742 8.62 15.191v-.192M12.309 4v1.264m0 14.736v-1.264"/>
  </StyledIcon>
);

MoneySign.defaultProps = {
  color: '#3B3B3B',
};
