import * as React from "react";

import { IconProps } from './interface'
import { Sizes } from './enum'

import { StyledBackground } from './styled'

const Icon: React.FunctionComponent<IconProps> = ({ children, size = "small", background = false, backgroundColor = "#eaf7ff" }) => {
  if (background) {
    return (
      <StyledBackground className="icon-background" backgroundColor={backgroundColor}>
        <svg
          height={Sizes[size]}
          width={Sizes[size]}
          viewBox="0 0 24 24"
          fill="none"
        >
          {children}
        </svg>
      </StyledBackground>
    );
  }

  return (
    <svg
      height={Sizes[size]}
      width={Sizes[size]}
      viewBox="0 0 24 24"
      fill="none"
    >
      {children}
    </svg>
  );
};

export default Icon;
