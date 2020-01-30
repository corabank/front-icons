import React from 'react';
import styled from 'styled-components';

import CodeBlock from '../CodeBlock';

const DocsStyle = styled.section`
  padding: 30px 0;
`;

const Docs = props => (
  <DocsStyle>
    {props.children}
  </DocsStyle>
);

export default Docs;
