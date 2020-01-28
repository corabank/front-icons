import * as React from 'react';

interface Props {
    size: string,
    children: any
}

const Icon: React.FunctionComponent<Props> = props => (
  <svg>
    ${props.children}
  </svg>
);

export default Icon;
