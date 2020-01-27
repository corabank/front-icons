import React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.header`
  padding: 15px 0;
`;

const Header = props => (
  <StyleHeader>
    <img src="./static/images/logo.svg"/>
  </StyleHeader>
);

export default Header;
