import React, { Component } from "react";
import styled from "styled-components";

import HeaderBanner from "./components/HeaderBanner";
import Title from "./components/Title";
import Docs from "./components/Docs";
import IconDocs from "./components/IconDocs";
import IconBackground from "./components/IconBackground";

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderBanner />
        <Container>
          <Docs />
        </Container>
        <Container>
          <Title title="Iconography" />
          <IconDocs />
        </Container>
        <Container>
          <Title title="Background Icon" />
          <IconBackground />
        </Container>
      </React.Fragment>
    );
  }
}
