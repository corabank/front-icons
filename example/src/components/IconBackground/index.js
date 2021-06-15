import React from "react";
import { Welcome } from "@corabank/icons";

import { Container, IconCard, IconName, IconWrapper } from "../IconDocs/style";

const IconBackground = () => {
  return (
    <React.Fragment>
      <Container>
        <IconCard>
          <IconWrapper>
            <Welcome size="big" background />
          </IconWrapper>
          <IconName>Welcome big</IconName>
        </IconCard>
        <IconCard>
          <IconWrapper>
            <Welcome size="medium" background />
          </IconWrapper>
          <IconName>Welcome medium</IconName>
        </IconCard>
        <IconCard>
          <IconWrapper>
            <Welcome size="small" background />
          </IconWrapper>
          <IconName>Welcome small</IconName>
        </IconCard>
      </Container>
    </React.Fragment>
  );
};

export default IconBackground;
