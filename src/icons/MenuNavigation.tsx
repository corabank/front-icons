import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const MenuNavigation: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="path-2-inside-1" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.5C2.5 8.22386 2.72386 8 3 8H21C21.2761 8 21.5 8.22386 21.5 8.5C21.5 8.77614 21.2761 9 21 9H3C2.72386 9 2.5 8.77614 2.5 8.5ZM2.5 15.5C2.5 15.2239 2.72386 15 3 15H13C13.2761 15 13.5 15.2239 13.5 15.5C13.5 15.7761 13.2761 16 13 16H3C2.72386 16 2.5 15.7761 2.5 15.5Z"/>
    </mask>
    <path d="M3 7C2.17157 7 1.5 7.67157 1.5 8.5H3.5C3.5 8.77614 3.27614 9 3 9V7ZM21 7H3V9H21V7ZM22.5 8.5C22.5 7.67157 21.8284 7 21 7V9C20.7239 9 20.5 8.77614 20.5 8.5H22.5ZM21 10C21.8284 10 22.5 9.32843 22.5 8.5H20.5C20.5 8.22386 20.7239 8 21 8V10ZM3 10H21V8H3V10ZM1.5 8.5C1.5 9.32843 2.17157 10 3 10V8C3.27614 8 3.5 8.22386 3.5 8.5H1.5ZM3 14C2.17157 14 1.5 14.6716 1.5 15.5H3.5C3.5 15.7761 3.27614 16 3 16V14ZM13 14H3V16H13V14ZM14.5 15.5C14.5 14.6716 13.8284 14 13 14V16C12.7239 16 12.5 15.7761 12.5 15.5H14.5ZM13 17C13.8284 17 14.5 16.3284 14.5 15.5H12.5C12.5 15.2239 12.7239 15 13 15V17ZM3 17H13V15H3V17ZM1.5 15.5C1.5 16.3284 2.17157 17 3 17V15C3.27614 15 3.5 15.2239 3.5 15.5H1.5Z" fill="#3B3B3B" mask="url(#path-2-inside-1)"/>
  </StyledIcon>
)