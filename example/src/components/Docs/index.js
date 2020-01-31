import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import source from './docs.md';

import CodeBlock from '../CodeBlock';

const DocsStyle = styled.section`
  padding: 30px 0;
`;

export default class Docs extends Component {
  state = {
    markdown: '',
  };

  componentDidMount() {
    fetch(source)
      .then(res => res.text())
      .then(markdown => this.setState((state) => ({ ...state, markdown })))
      .catch((err) => console.error(err));
  }

  render () {
    const { markdown } = this.state;

    return (
      <DocsStyle>
        <ReactMarkdown
          source={markdown}
          renderers={{ code: CodeBlock }} />
      </DocsStyle>
    )
  }
}
