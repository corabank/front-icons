import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const GraphArrowUp: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="a" fill="#fff">
        <path fillRule="evenodd" d="M21.459 6.8A.496.496 0 0 0 21 6.5h-2.667a.5.5 0 1 0 0 1h1.46l-5.106 5.105a.5.5 0 0 1-.707 0l-2.14-2.14h-.001a1.499 1.499 0 0 0-2.121 0l-5.071 5.07a.5.5 0 1 0 .707.707l5.07-5.07h.001a.499.499 0 0 1 .706 0l2.141 2.14a1.5 1.5 0 0 0 2.122 0L20.5 8.207v1.46a.5.5 0 0 0 1 0V7a.498.498 0 0 0-.041-.2zM2.425 3.221a.5.5 0 0 0-1 0v17.708a.5.5 0 0 0 .5.5H21a.5.5 0 1 0 0-1H2.425V3.221z" clipRule="evenodd"/>
    </mask>
    <path fill="#3B3B3B" d="M21.369 6.662l-.737.676.737-.676zm.09.138l-.917.4.917-.4zm-.12-.169l.675-.737-.676.737zM21 6.5v1-1zm-2.667 0v-1 1zm1.46 1l.707.707a1 1 0 0 0-.707-1.707v1zm-5.106 5.105l.706.708-.706-.708zm0 0l-.707-.708-.001.002.707.707zm-.707 0l.708-.706-.708.707zm0 0l.707-.707-.707.707zm-2.14-2.14l-.709.706h.001l.707-.706zm-.001 0l.708-.707-.708.706zm-2.121 0l-.708-.707.708.706zm0 0l.707.707-.708-.707zm-5.071 5.07l-.707-.707.707.707zm0 .707l-.707.707.707-.707zm.707 0l.707.707-.707-.707zm5.07-5.07l.708.707v-.001l-.707-.707zm.001 0l.708.706-.708-.707zm.706 0l-.707.706.707-.707zm0 0l-.707.706.708-.707zm2.141 2.14l.708-.706v-.001l-.708.707zm2.122 0l-.707-.707.707.707zM20.5 8.207h1a1 1 0 0 0-1.707-.707l.707.707zm1-1.204h1V7l-1 .002zm0-.002l-1-.007v.008h1zm0-.001l1 .007V7h-1zM1.645 21.344l.56-.829-.56.829zm.28.085v-1 1zm19.075 0v1-1zm-18.575-1h-1a1 1 0 0 0 1 1v-1zm18.207-13.09a.502.502 0 0 1-.09-.14l1.834-.798a1.498 1.498 0 0 0-.27-.415l-1.474 1.352zm1.474-1.353a1.507 1.507 0 0 0-.092-.092l-1.352 1.474a.484.484 0 0 1-.03-.03l1.474-1.352zm-.092-.092A1.498 1.498 0 0 0 21 5.5v2c-.13 0-.25-.05-.338-.132l1.352-1.474zM21 7.5v-2 2zm0-2h-2.667v2H21v-2zm-2.667 0a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2zm-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm1.5 1.5h1.46v-2h-1.46v2zm-2.94 4.812L20.5 8.207l-1.414-1.414-5.106 5.105 1.414 1.414zm0 .002l-1.412-1.417 1.412 1.417zm-1.06.438a1.5 1.5 0 0 0 1.061-.44L13.98 11.9a.5.5 0 0 1 .354-.147v2zm-1.06-.44a1.5 1.5 0 0 0 1.06.44v-2a.5.5 0 0 1 .355.147l-1.416 1.413zm0 0l1.414-1.413-1.414 1.413zm-2.141-2.14l2.14 2.14 1.415-1.414-2.14-2.14-1.415 1.414zm0-.001l1.415-1.413-1.416 1.413zm-.354-.146a.5.5 0 0 1 .353.146l1.416-1.413a2.5 2.5 0 0 0-1.769-.733v2zm-.353.146a.5.5 0 0 1 .353-.146v-2a2.5 2.5 0 0 0-1.768.733l1.415 1.413zm0 0L9.01 9.758l1.415 1.413zm-5.071 5.071l5.07-5.07L9.01 9.757l-5.07 5.071 1.414 1.414zm0-.707a.5.5 0 0 1 0 .707L3.94 14.828a1.5 1.5 0 0 0 0 2.122l1.414-1.415zm-.707 0a.5.5 0 0 1 .707 0L3.94 16.95a1.5 1.5 0 0 0 2.12 0l-1.413-1.415zm5.07-5.07l-5.07 5.07L6.06 16.95l5.07-5.071-1.413-1.415zm0 0l1.415 1.413-1.415-1.414zm1.061-.44c-.398 0-.78.158-1.06.44l1.415 1.413a.501.501 0 0 1-.355.147v-2zm1.061.44a1.499 1.499 0 0 0-1.06-.44v2a.501.501 0 0 1-.355-.147l1.415-1.413zm0 0l-1.415 1.413 1.415-1.413zm2.14 2.14l-2.14-2.14-1.414 1.414 2.14 2.14 1.415-1.414zm.354.147a.5.5 0 0 1-.353-.146l-1.415 1.413a2.5 2.5 0 0 0 1.768.733v-2zm.353-.146a.5.5 0 0 1-.353.146v2a2.5 2.5 0 0 0 1.769-.733l-1.416-1.413zM19.793 7.5l-5.106 5.105 1.414 1.414 5.106-5.105L19.793 7.5zm-.293.707v1.46h2v-1.46h-2zm0 1.46a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2zm1.5-1.5V7.003h-2v2.664h2zM22.5 7V7l-2 .002v.002l2-.003zm0 .007v-.001l-2-.014v.001l2 .014zm0-.008c0-.211-.044-.415-.125-.6l-1.833.8A.502.502 0 0 1 20.5 7h2zM1.925 3.72a.5.5 0 0 1-.5-.5h2a1.5 1.5 0 0 0-1.5-1.5v2zm.5-.5a.5.5 0 0 1-.5.5v-2a1.5 1.5 0 0 0-1.5 1.5h2zm0 17.708V3.221h-2v17.708h2zm-.22-.414a.5.5 0 0 1 .22.414h-2c0 .519.264.975.66 1.243l1.12-1.657zm-.28-.086c.102 0 .2.032.28.086l-1.12 1.657c.24.162.53.257.84.257v-2zm19.075 0H1.925v2H21v-2zm-.5.5a.5.5 0 0 1 .5-.5v2a1.5 1.5 0 0 0 1.5-1.5h-2zm.5.5a.5.5 0 0 1-.5-.5h2a1.5 1.5 0 0 0-1.5-1.5v2zm-18.575 0H21v-2H2.425v2zm-1-18.208v17.208h2V3.221h-2z" mask="url(#a)"/>
  </StyledIcon>
)
