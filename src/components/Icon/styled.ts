import styled from 'styled-components';

export const StyledBackground = styled.div<{ backgroundColor: string }>`
  display: inline-block;
  background-color: ${({ backgroundColor }: { backgroundColor: string }) => backgroundColor};
  border-radius: 50%;
  padding: 8px;
`
