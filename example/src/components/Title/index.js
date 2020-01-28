import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  align-items: ${props => props.align || "center"};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const TitleStyle = styled.h1`
  color: #FE3E6D;
  font-size: 48px;
  margin: 0;

  span {
    font-weight: 300;
    letter-spacing: -3px;
  }
`;

const Description = styled.small`
  color: #FFF;
  font-size: 22px;
  font-weight: 300;
  margin-top: 18px;
`;

const Title = props => {
  const {title, subtitle, align} = props;

  return(
    <Container align={align}>
      <TitleStyle>{title}</TitleStyle>
      <Description>{subtitle}</Description>
    </Container>
  )
};

export default Title;
