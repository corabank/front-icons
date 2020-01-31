import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Delete: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M18 9l-.847 10.166A2 2 0 0 1 15.16 21H8.84a2 2 0 0 1-1.993-1.834L6 9m2-3l1.224-2.447A.998.998 0 0 1 10.118 3h3.764c.379 0 .725.214.894.553L16 6m-4 6v6m3-6l-.408 6M9 12l.408 6m9.124-9H5.468C4.9 9 4.44 8.54 4.44 7.973v-.946C4.44 6.46 4.9 6 5.468 6h13.065c.567 0 1.027.46 1.027 1.027v.945C19.56 8.54 19.1 9 18.532 9z"/>
  </StyledIcon>
);

Delete.defaultProps = {
  color: '#3B3B3B',
};
