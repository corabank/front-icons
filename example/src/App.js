import React, { Component } from 'react'
import styled from 'styled-components';

import HeaderBanner from './components/HeaderBanner'
import Title from './components/Title';
import IconDocs from './components/IconDocs';

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 50vh;
`;

export default class App extends Component {
  render () {
    return (
      <React.Fragment>
        <HeaderBanner />
        <Container>
          <Title title="Iconography" align="flex-start" />
          <IconDocs />
        </Container>
      </React.Fragment>
    )
  }
}
