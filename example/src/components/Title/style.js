import styled from 'styled-components';

export const Container = styled.section`
  align-items: ${props => props.align};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0 12px 0;
  border-bottom: 1px solid #C7CBCF;
`;

export const TitleStyle = styled.h2`
  color: #FE3E6D;
  font-size: 36px;
  margin: 0;
`;
