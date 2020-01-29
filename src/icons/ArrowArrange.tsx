import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const ArrowArrange: React.FunctionComponent<PropsInterface> = props => (
  <StyledIcon {...props}>
    <path fill="#3B3B3B" fillRule="evenodd" d="M16.207 4.396a.5.5 0 1 0-.708.708l2.044 2.043H4.75a.5.5 0 0 0 0 1h12.793L15.5 10.189a.5.5 0 0 0 .706.708L19.1 8.004 19.104 8a.498.498 0 0 0 .144-.396l-.001-.017a.499.499 0 0 0-.143-.295l-.002-.001-.002-.002-2.893-2.894zM4.397 15.498l2.897-2.895a.5.5 0 0 1 .706.708l-2.043 2.042H18.75a.5.5 0 0 1 0 1H5.957l2.044 2.043a.5.5 0 1 1-.708.708l-2.895-2.896h-.001v-.002a.499.499 0 0 1-.147-.35v-.003-.006a.501.501 0 0 1 0 .005" clipRule="evenodd"/>
  </StyledIcon>
)
