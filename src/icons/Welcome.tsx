import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Welcome: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" d="M9.153 1.375l.439 1.638m4.84 18.063l.415 1.549M4.222 4.222l1.199 1.199m13.223 13.223l1.134 1.134M1.375 9.153l1.638.439m18.063 4.84l1.549.415m-21.25 0l1.638-.439m18.063-4.84l1.549-.415M4.222 19.778l1.199-1.199M18.644 5.356l1.134-1.134M9.153 22.625l.439-1.638m4.84-18.063l.415-1.549M14.31 7.5c1.984 0 3.315 1.862 3.315 3.597 0 3.625-4.514 6.403-5.625 6.403-1.111 0-5.625-2.778-5.625-6.403C6.375 9.362 7.706 7.5 9.69 7.5c1.134 0 1.879.566 2.31 1.069.431-.503 1.176-1.069 2.31-1.069z"/>
  </StyledIcon>
)
