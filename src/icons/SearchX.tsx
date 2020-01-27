import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const SearchX: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.971 15.775C13.2687 15.775 15.942 13.1017 15.942 9.80401C15.942 6.50632 13.2687 3.83301 9.971 3.83301C6.67331 3.83301 4 6.50632 4 9.80401C4 13.1017 6.67331 15.775 9.971 15.775Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.155 14.063L17.0775 17.0265L20 19.99" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.87866 12.0214L12.1213 7.77881L7.87866 12.0214Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.87866 7.77881L12.1213 12.0214L7.87866 7.77881Z" fill="white"/>
    <path d="M14.155 14.063L17.0775 17.0265L20 19.99M7.87866 12.0214L12.1213 7.77881M7.87866 7.77881L12.1213 12.0214M9.971 15.775C13.2687 15.775 15.942 13.1017 15.942 9.80401C15.942 6.50632 13.2687 3.83301 9.971 3.83301C6.67331 3.83301 4 6.50632 4 9.80401C4 13.1017 6.67331 15.775 9.971 15.775Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)