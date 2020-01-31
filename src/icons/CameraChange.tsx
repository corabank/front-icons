import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const CameraChange: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M6.286 13L8 11.286 9.714 13m-1.41 1.53a4.012 4.012 0 0 0 2.165 2.166m0 0a3.972 3.972 0 0 1-1.298-.867A4.013 4.013 0 0 1 8 13c0-.239.024-.475.066-.708m2.403 4.404a4 4 0 0 0 3.062 0M17.7 13l-1.714 1.714L14.272 13m1.41-1.53a4.012 4.012 0 0 0-2.165-2.165m0 0c.502.207.937.505 1.298.866a4.013 4.013 0 0 1 1.17 2.83c0 .238-.023.474-.065.707m-2.403-4.403a4 4 0 0 0-3.062 0M21 9v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2l1.462-2.504A1 1 0 0 1 9.326 4h5.304c.351 0 .676.184.857.484L17 7h2a2 2 0 0 1 2 2z"/>
  </StyledIcon>
);

CameraChange.defaultProps = {
  color: '#3B3B3B',
};
