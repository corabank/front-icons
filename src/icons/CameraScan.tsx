import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const CameraScan: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path stroke="#111" strokeLinecap="round" strokeLinejoin="round" d="M7.5 3H5.25A2.25 2.25 0 0 0 3 5.25V7.5M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21H7.5M16.5 21h2.25A2.25 2.25 0 0 0 21 18.75V16.5M21 7.5V5.25A2.25 2.25 0 0 0 18.75 3H16.5"/>
    <mask id="a" fill="#fff">
        <path fillRule="evenodd" d="M9.701 12.617a2.337 2.337 0 1 1 4.674 0 2.337 2.337 0 0 1-4.674 0zm2.337-1.337a1.337 1.337 0 1 0 0 2.674 1.337 1.337 0 0 0 0-2.674zm-1.71-3.78a.124.124 0 0 0-.107.062l-.914 1.565a.5.5 0 0 1-.432.248h-1.25a.75.75 0 0 0-.75.75v5.625c0 .414.336.75.75.75h8.75a.75.75 0 0 0 .75-.75v-5.625a.75.75 0 0 0-.749-.75h-1.25a.5.5 0 0 1-.428-.242l-.946-1.57v-.001a.127.127 0 0 0-.108-.062h-3.315zm.001-1c-.4 0-.77.212-.972.558l-.769 1.317h-.963a1.75 1.75 0 0 0-1.75 1.75v5.625c0 .966.784 1.75 1.75 1.75h8.75a1.75 1.75 0 0 0 1.75-1.75v-5.625a1.75 1.75 0 0 0-1.749-1.75h-.967l-.8-1.33-.002-.001a1.127 1.127 0 0 0-.963-.544h-3.315z" clipRule="evenodd"/>
    </mask>
    <path fill="#111" d="M10.221 7.562l.864.503-.864-.503zm.107-.062v1-1zm-.107.062l.863.504-.863-.504zm-.914 1.565l-.864-.504.864.504zm5.39.006l-.856.515.857-.515zm-.944-1.57l.856-.516-.001-.003-.856.518zm0-.001l.853-.521V7.04l-.854.522zM10.328 7.5v1-1zm0-1v1-1zm-.972.558l.864.504-.864-.504zm0 0l-.863-.504h-.001l.864.504zm0 0l.863.505.001-.002-.864-.503zm-.769 1.317v1a1 1 0 0 0 .864-.496l-.864-.504zm6.82 0l-.856.516a1 1 0 0 0 .857.484v-1zm-.8-1.33l-.456-.89a1 1 0 0 0-.4 1.406l.856-.516zm0 0l.457.89a1 1 0 0 0 .398-1.409l-.855.52zm0-.001l-.856.518.855-.518zm-2.57 2.236a3.337 3.337 0 0 0-3.337 3.337h2c0-.738.599-1.337 1.337-1.337v-2zm3.337 3.337a3.337 3.337 0 0 0-3.337-3.337v2c.738 0 1.337.599 1.337 1.337h2zm-3.337 3.337a3.337 3.337 0 0 0 3.337-3.337h-2c0 .738-.599 1.337-1.337 1.337v2zm-3.337-3.337a3.337 3.337 0 0 0 3.337 3.337v-2a1.337 1.337 0 0 1-1.337-1.337h-2zm3 0c0-.186.15-.337.337-.337v-2a2.337 2.337 0 0 0-2.337 2.337h2zm.337.337a.337.337 0 0 1-.337-.337h-2a2.337 2.337 0 0 0 2.337 2.337v-2zm.337-.337c0 .186-.15.337-.337.337v2a2.337 2.337 0 0 0 2.337-2.337h-2zm-.337-.337c.186 0 .337.15.337.337h2a2.337 2.337 0 0 0-2.337-2.337v2zm-.953-4.215a.876.876 0 0 1-.758.435l.003-2c-.401 0-.772.212-.973.558l1.728 1.007zm0 0L9.357 7.058l1.728 1.008zm-.915 1.566l.914-1.565-1.727-1.008-.914 1.565L10.17 9.63zm-1.295.744a1.5 1.5 0 0 0 1.295-.744L8.443 8.623a.5.5 0 0 1 .432-.248v2zm-1.25 0h1.25v-2h-1.25v2zm.25-.25a.25.25 0 0 1-.25.25v-2a1.75 1.75 0 0 0-1.75 1.75h2zm0 5.625v-5.625h-2v5.625h2zm-.25-.25a.25.25 0 0 1 .25.25h-2c0 .966.784 1.75 1.75 1.75v-2zm8.75 0h-8.75v2h8.75v-2zm-.25.25a.25.25 0 0 1 .25-.25v2a1.75 1.75 0 0 0 1.75-1.75h-2zm0-5.625v5.625h2v-5.625h-2zm.251.25a.25.25 0 0 1-.251-.25h2a1.75 1.75 0 0 0-1.749-1.75v2zm-1.25 0h1.25v-2h-1.25v2zm-1.285-.727a1.5 1.5 0 0 0 1.285.727v-2a.5.5 0 0 1 .428.242l-1.713 1.031zm-.945-1.57l.945 1.57 1.713-1.03-.945-1.571-1.713 1.03zm.003.005l-.002-.003 1.711-1.036a.05.05 0 0 1-.002-.003l-1.707 1.042zm.745.417a.873.873 0 0 1-.745-.416l1.706-1.044a1.127 1.127 0 0 0-.961-.54v2zm-3.315 0h3.315v-2h-3.315v2zm-.001 0l.002-2h-.001l-.001 2zm.002-3c-.756 0-1.456.4-1.837 1.054l1.728 1.008a.124.124 0 0 1 .107-.062l.002-2zM8.494 6.554l1.727 1.008-1.727-1.008zm-.001 0v.001l1.728 1.006-1.728-1.006zm0 0l-.769 1.317 1.727 1.008.77-1.316-1.728-1.009zm.095.821h-.963v2h.963v-2zm-.963 0a2.75 2.75 0 0 0-2.75 2.75h2a.75.75 0 0 1 .75-.75v-2zm-2.75 2.75v5.625h2v-5.625h-2zm0 5.625a2.75 2.75 0 0 0 2.75 2.75v-2a.75.75 0 0 1-.75-.75h-2zm2.75 2.75h8.75v-2h-8.75v2zm8.75 0a2.75 2.75 0 0 0 2.75-2.75h-2a.75.75 0 0 1-.75.75v2zm2.75-2.75v-5.625h-2v5.625h2zm0-5.625a2.75 2.75 0 0 0-2.749-2.75v2a.75.75 0 0 1 .749.75h2zm-2.749-2.75h-.967v2h.967v-2zm-.11.484l-.8-1.33-1.714 1.032.8 1.33 1.713-1.032zm-1.201.076l-.913-1.78.913 1.78zm.398-1.409v-.001l-1.71 1.037v.002l1.71-1.038zm0 0A2.127 2.127 0 0 0 13.644 5.5v2c.043 0 .084.022.108.062l1.71-1.037zM13.644 5.5h-3.315v2h3.315v-2z" mask="url(#a)"/>
  </StyledIcon>
)
