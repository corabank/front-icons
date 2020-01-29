import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 36px 0;
  flex-wrap: wrap;
`;

export const IconCard = styled.div`
  border: 1px solid #C7CBCF;
  border-radius: 5px;
  margin: 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 150px;
`;

export const IconName = styled.div`
  border-bottom: 1px solid #C7CBCF;
  border-top: 1px solid #C7CBCF;
  font-size: 18px;
  padding: 10px 0 6px;
  text-align: center;
`;
