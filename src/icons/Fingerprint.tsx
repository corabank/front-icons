import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Fingerprint: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path fill="#3B3B3B" fillRule="evenodd" d="M12 1.68a11.625 11.625 0 0 0-8.75 3.964.5.5 0 0 0 .753.659A10.625 10.625 0 0 1 12 2.679v-1zm0 0a11.625 11.625 0 0 1 8.75 3.964.5.5 0 1 1-.753.659A10.625 10.625 0 0 0 12 2.679v-1zm1.799 17.569c-1.342-1.013-2.299-2.582-2.299-4.75a.5.5 0 1 1 1 0c0 1.834.793 3.115 1.901 3.952 1.125.85 2.59 1.25 3.899 1.25a.5.5 0 1 1 0 1c-1.49 0-3.176-.451-4.501-1.452zm-9.955-1.95c-.22-1.002-.34-2.04-.34-3.105v-.015c0-4.695 3.804-8.5 8.496-8.5 4.691 0 8.496 3.805 8.496 8.5a2.5 2.5 0 1 1-4.997.013v-.008a3.5 3.5 0 1 0-6.997.027 9.494 9.494 0 0 0 4.48 8.035.5.5 0 0 0 .529-.85A8.494 8.494 0 0 1 9.5 14.139a2.5 2.5 0 1 1 4.999.028v.008a3.5 3.5 0 1 0 6.997-.03C21.476 8.914 17.232 4.68 12 4.68c-5.24 0-9.488 4.245-9.496 9.485v.015c0 1.146.128 2.26.363 3.334a.5.5 0 0 0 .977-.214zm2.659-3.12c0-3.038 2.461-5.5 5.497-5.5a5.498 5.498 0 0 1 5.497 5.5.5.5 0 0 0 1 0c0-3.59-2.909-6.5-6.497-6.5a6.498 6.498 0 0 0-6.498 6.5 12.441 12.441 0 0 0 2.259 7.164.5.5 0 1 0 .818-.574 11.441 11.441 0 0 1-2.076-6.59z" clipRule="evenodd"/>
  </StyledIcon>
)
