import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleStyle = styled.h1`
  color: #FE3E6D;
  font-size: 48px;

  span {
    font-weight: 300;
  }
`;

const Description = styled.small`
  color: #FFF;
  font-size: 22px;
`;

const Title = props => (
  <Container>
    <TitleStyle>Cora <span>Icons</span></TitleStyle>
    <Description>A Library Icon to Cora Products</Description>
  </Container>
);

export default Title;
