import React from 'react'
import styled from 'styled-components';

const CodeBlockStyle = styled.div`
  background-color: #F0F4F8;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  margin: 20px 0;
`;

const CodeBlock = props => (
  <CodeBlockStyle>
    {props.children}
  </CodeBlockStyle>
);

export default CodeBlock;
