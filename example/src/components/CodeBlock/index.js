import React from 'react'
import styled from 'styled-components';

const CodeBlockStyle = styled.div`
  background-color: #DEE4E9;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  margin: 10px 0;
`;

const CodeBlock = props => (
  <CodeBlockStyle>
    {props.children}
  </CodeBlockStyle>
);

export default CodeBlock;
