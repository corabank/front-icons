import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const PeopleUsers: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M15.7017 7.97396L16.6807 10.663C16.8636 11.1657 17.2388 11.5751 17.7237 11.801L18.6417 12.229C19.0863 12.4359 19.4302 12.8111 19.5977 13.272C19.7799 13.7723 19.7559 14.3245 19.5308 14.8071C19.3058 15.2896 18.8981 15.663 18.3977 15.845L8.27373 19.53C7.77341 19.7122 7.22118 19.6881 6.73861 19.463C6.25604 19.238 5.88268 18.8304 5.70073 18.33C5.53354 17.8693 5.55584 17.3612 5.76273 16.917L6.19073 15.999C6.41673 15.5142 6.44083 14.9595 6.25773 14.457L5.27873 11.768C4.85951 10.6163 4.91499 9.34519 5.43297 8.2344C5.95095 7.12361 6.889 6.26409 8.04073 5.84496L9.77773 5.21296C10.9294 4.79373 12.2005 4.84921 13.3113 5.3672C14.4221 5.88518 15.2816 6.82322 15.7007 7.97496M10.5527 4.93096L10.2537 4.10996C9.90684 3.22689 8.91917 2.78142 8.02763 3.10591C7.1361 3.4304 6.66584 4.40652 6.96773 5.30596L7.26673 6.12696M14.2437 17.357L9.82073 18.967L9.98173 19.409C10.453 20.5915 11.7786 21.1855 12.9748 20.7501C14.171 20.3148 14.8047 19.0077 14.4057 17.799L14.2437 17.357Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)
