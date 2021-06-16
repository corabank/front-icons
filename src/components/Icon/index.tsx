import * as React from "react";

import { IconProps } from './interface'
import { Sizes } from './enum'

import { StyledBackground } from './styled'

const Icon: React.FunctionComponent<IconProps> = ({
  children,
  size = "small",
  background = false,
  backgroundColor = "#eaf7ff",
  viewBox = "0 0 24 24"
}) => {
  if (background) {
    return (
      <StyledBackground className="icon-background" backgroundColor={backgroundColor}>
        <svg
          height={Sizes[size]}
          width={Sizes[size]}
          viewBox={viewBox}
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
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default Icon;
