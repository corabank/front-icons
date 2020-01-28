import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Title from '../Title';

const Main = styled.section`
  background-color: #193044;
`;

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 50vh;
`;

const HeaderBanner = props => (
  <Main>
    <Container>
      <Header />
      <Title title={["Cora", <span>Icons</span>]} subtitle="A Icon Library to Cora Products" align="center" />
    </Container>
  </Main>
);

export default HeaderBanner;
