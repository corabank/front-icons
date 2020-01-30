import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: auto;
  grid-row-gap: 15px;
  padding: 36px 0;
  flex-wrap: wrap;
`;

export const IconCard = styled.div`
  border: 1px solid #C7CBCF;
  border-radius: 5px;
`;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 100%;
`;

export const IconName = styled.div`
  border-bottom: 1px solid #C7CBCF;
  border-top: 1px solid #C7CBCF;
  font-size: 18px;
  padding: 10px 0 6px;
  text-align: center;
`;
