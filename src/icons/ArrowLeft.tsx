import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ArrowLeft: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="g" fill="#fff">
      <path fillRule="evenodd" d="M9.647 17.354a.5.5 0 0 0 .707-.708L6.207 12.5h12.795a.5.5 0 0 0 0-1H6.206l4.148-4.147a.5.5 0 0 0-.707-.708l-5.002 5.001a.499.499 0 0 0 0 .707l.001.001 5.001 5z" clipRule="evenodd"/>
    </mask>
    <path fill="#3B3B3B" d="M10.355 17.354l.707.706-.707-.706zm-.708 0l.707-.708-.707.708zm.707-.708l-.707.708.707-.708zM6.207 12.5v-1a1 1 0 0 0-.707 1.707l.707-.707zm0-1l-.707-.707a1 1 0 0 0 .707 1.707v-1zm4.148-4.147l-.707-.708.707.708zm0-.708l.708-.707-.707.707zm-.707 0l-.707-.707.707.707zm-5.002 5.001l-.707-.707.707.707zm0 0l-.707-.707.707.707zm-.108.163l.924.383v-.001l-.924-.382zm0 .382l.924-.382-.924.382zm.003.008l.917-.398-.917.399zm.105.155l-.707.707.707-.707zm.001 0l.707-.707-.002-.002-.705.71zm5.001 4.293a.5.5 0 0 1 .707 0L8.941 18.06a1.5 1.5 0 0 0 2.12 0l-1.414-1.415zm0 .707a.5.5 0 0 1 0-.707l1.415 1.413a1.5 1.5 0 0 0 0-2.12l-1.414 1.414zM5.5 13.207l4.148 4.147 1.414-1.415-4.148-4.146L5.5 13.207zm.707.293h12.795v-2H6.206v2zm12.795 0a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2zm1.5-1.5a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2zm-1.5-1.5H6.206v2h12.795v-2zM6.913 12.207l4.149-4.147-1.415-1.415L5.5 10.793l1.414 1.414zm4.149-4.147a1.5 1.5 0 0 0 0-2.122L9.647 7.353a.5.5 0 0 1 0-.708l1.415 1.415zm0-2.122a1.5 1.5 0 0 0-2.122 0l1.415 1.415a.5.5 0 0 1-.708 0l1.415-1.415zm-2.122 0L3.938 10.94l1.414 1.415 5.002-5.001L8.94 5.938zM3.938 10.94l1.414 1.415-1.414-1.415zm1.523 1.252a.502.502 0 0 1-.108.162L3.938 10.94a1.498 1.498 0 0 0-.325.486l1.848.765zm-1.848-.766A1.499 1.499 0 0 0 3.5 12h2a.502.502 0 0 1-.038.192l-1.848-.767zM3.5 12c0 .201.04.396.114.574l1.848-.766c.025.06.038.126.038.192h-2zm.114.574l.01.024 1.834-.797a.402.402 0 0 1 .004.008l-1.848.765zm1.74-.928a.5.5 0 0 1 .104.155l-1.834.797c.074.17.18.327.315.463l1.415-1.415zm-1.415 1.415l.003.002 1.41-1.418.001.001-1.414 1.415zm6.416 3.585l-5.001-4.999-1.414 1.415 5.002 4.999 1.413-1.415z" mask="url(#g)"/>
  </StyledIcon>
)
