import * as React from "react";

interface Props {
  size: string;
  background?: boolean;
  children: any;
}

enum Sizes {
  small = 16,
  medium = 24,
  big = 32,
}

const BackgroundContainer = {
  display: "inline-block",
  backgroundColor: "#eaf7ff",
  borderRadius: "50%",
  padding: "8px 8px 4px",
};

const Icon: React.FunctionComponent<Props> = (props) => {
  if (props.background) {
    return (
      <div style={BackgroundContainer}>
        <svg
          height={Sizes[props.size]}
          width={Sizes[props.size]}
          viewBox="0 0 24 24"
          fill="none"
        >
          {props.children}
        </svg>
      </div>
    );
  }
  return (
    <svg
      height={Sizes[props.size]}
      width={Sizes[props.size]}
      viewBox="0 0 24 24"
      fill="none"
    >
      {props.children}
    </svg>
  );
};

Icon.defaultProps = {
  size: "small",
  background: false,
};

export default Icon;
