import React from 'react';

import Header from '../Header';

import { Main, Container, TitleContainer, Title, Description} from './style';

const HeaderBanner = props => (
  <Main>
    <Container>
      <Header />
      <TitleContainer>
        <Title>Cora <span>Icons</span></Title>
        <Description>A Icon Library to Cora Products</Description>
      </TitleContainer>
    </Container>
  </Main>
);

export default HeaderBanner;
