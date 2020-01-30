import styled from 'styled-components';

export const Main = styled.section`
  background-color: #193044;
`;

export const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 50vh;
`;

export const TitleContainer = styled.section`
  align-items: ${props => props.align || "center"};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;


export const Title = styled.h1`
  color: #FE3E6D;
  font-size: 48px;
  margin: 0;

  span {
    font-weight: 300;
    margin-left: -15px;
    letter-spacing: -3px;
  }
`;

export const Description = styled.small`
  color: #FFF;
  font-size: 22px;
  font-weight: 300;
  margin-top: 18px;
`;
