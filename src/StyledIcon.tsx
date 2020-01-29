import * as React from 'react';

interface Props {
    size: string,
    children: any,
}

enum Sizes {
  small = 24,
  medium = 36,
  big = 48,
}

const Icon: React.FunctionComponent<Props> = props => {
  return (
    <svg height={Sizes[props.size]} width={Sizes[props.size]} viewBox="0 0 24 24" fill="none">
      {props.children}
    </svg>
  );
};

Icon.defaultProps = {
  size: 'small',
}

export default Icon;
