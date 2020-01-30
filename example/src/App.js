import React, { Component } from 'react'
import styled from 'styled-components';

import HeaderBanner from './components/HeaderBanner'
import Title from './components/Title';
import Docs from './components/Docs';
import CodeBlock from './components/CodeBlock';
import IconDocs from './components/IconDocs';

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <HeaderBanner />
        <Container>
          <Title title="Install" />
          <Docs>
            <p>To install the Icon Library use NPM or Yarn:</p>
            <CodeBlock>npm i @corabank/icons</CodeBlock>
            <CodeBlock>yarn add @corabank/icons</CodeBlock>
          </Docs>
        </Container>
        <Container>
          <Title title="Iconography" />
          <IconDocs />
        </Container>
      </React.Fragment>
    )
  }
}
