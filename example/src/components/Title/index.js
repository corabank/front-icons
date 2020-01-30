import React from 'react';

import { Container, TitleStyle } from './style';

const Title = props => {
  const {title, align} = props;

  return(
    <Container align={align}>
      <TitleStyle>{title}</TitleStyle>
    </Container>
  )
};

Title.defaultProps = {
  align: 'flex-start',
}

export default Title;
