import React from 'react';

import CodeBlock from '../CodeBlock';

const Docs = props => (
  <React.Fragment>
    <p>To install the Icon Library use NPM or Yarn:</p>
    <CodeBlock>npm i @corabank/icons</CodeBlock>
    <CodeBlock>yarn add @corabank/icons</CodeBlock>
  </React.Fragment>
);

export default Docs;
