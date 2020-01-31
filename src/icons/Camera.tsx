import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Camera: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <mask id="q" fill="#fff">
        <path fillRule="evenodd" d="M7.573 12.987a4.487 4.487 0 1 1 8.974 0 4.487 4.487 0 0 1-8.974 0zM12.06 9.5a3.487 3.487 0 1 0 0 6.974 3.487 3.487 0 0 0 0-6.974zm-2.734-5a.5.5 0 0 0-.432.248L7.432 7.252A.5.5 0 0 1 7 7.5H5A1.5 1.5 0 0 0 3.5 9v9A1.5 1.5 0 0 0 5 19.5h14a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 19 7.5h-2a.5.5 0 0 1-.428-.242l-1.513-2.516a.501.501 0 0 0-.429-.242H9.326zm0-1h5.304c.526 0 1.014.276 1.285.726L17.284 6.5H19A2.5 2.5 0 0 1 21.5 9v9a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 18V9A2.5 2.5 0 0 1 5 6.5h1.713L8.03 4.244A1.5 1.5 0 0 1 9.326 3.5z" clipRule="evenodd"/>
    </mask>
    <path fill={props.color} d="M8.894 4.748l-.864-.504.864.504zm.432-.248v-1 1zm-.432.248l.863.504-.863-.504zM7.432 7.252l.863.504-.863-.504zm9.14.006l.857-.516-.857.516zm-1.513-2.516l-.86.51.003.006.857-.516zm0 0l.86-.509-.004-.008-.856.517zM9.326 4.5v1-1zm0-1v1-1zm0 0v1-1zm5.304 0v-1 1zm1.285.726l-.856.516.856-.516zm0 0l.858-.515-.001-.001-.856.516zM17.284 6.5l-.857.515a1 1 0 0 0 .857.485v-1zm-10.57 0v1a1 1 0 0 0 .864-.496L6.713 6.5zM8.03 4.244l-.862-.507-.001.003.863.504zm0 0l.862.507.002-.003-.864-.504zM12.06 7.5a5.487 5.487 0 0 0-5.487 5.487h2A3.487 3.487 0 0 1 12.06 9.5v-2zm5.487 5.487A5.487 5.487 0 0 0 12.06 7.5v2a3.487 3.487 0 0 1 3.487 3.487h2zm-5.487 5.487a5.487 5.487 0 0 0 5.487-5.487h-2a3.487 3.487 0 0 1-3.487 3.487v2zm-5.487-5.487a5.487 5.487 0 0 0 5.487 5.487v-2a3.487 3.487 0 0 1-3.487-3.487h-2zm3 0A2.487 2.487 0 0 1 12.06 10.5v-2a4.487 4.487 0 0 0-4.487 4.487h2zm2.487 2.487a2.487 2.487 0 0 1-2.487-2.487h-2a4.487 4.487 0 0 0 4.487 4.487v-2zm2.487-2.487a2.487 2.487 0 0 1-2.487 2.487v2a4.487 4.487 0 0 0 4.487-4.487h-2zM12.06 10.5a2.487 2.487 0 0 1 2.487 2.487h2A4.487 4.487 0 0 0 12.06 8.5v2zM9.758 5.252a.5.5 0 0 1-.432.248v-2a1.5 1.5 0 0 0-1.296.744l1.728 1.008zm0 0L8.03 4.244l1.728 1.008zM8.294 7.756l1.462-2.504L8.03 4.244 6.568 6.748l1.727 1.008zM7 8.5a1.5 1.5 0 0 0 1.295-.744L6.568 6.748A.5.5 0 0 1 7 6.5v2zm-2 0h2v-2H5v2zm-.5.5a.5.5 0 0 1 .5-.5v-2A2.5 2.5 0 0 0 2.5 9h2zm0 9V9h-2v9h2zm.5.5a.5.5 0 0 1-.5-.5h-2A2.5 2.5 0 0 0 5 20.5v-2zm14 0H5v2h14v-2zm.5-.5a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5h-2zm0-9v9h2V9h-2zm-.5-.5a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 19 6.5v2zm-2 0h2v-2h-2v2zm-1.286-.727A1.5 1.5 0 0 0 17 8.5v-2a.5.5 0 0 1 .428.242l-1.714 1.031zm-1.512-2.515l1.512 2.515 1.714-1.03-1.512-2.516-1.714 1.03zm-.004-.007l.005.008v.002h.001l-.001-.002-.005-.008 1.722-1.018-.005-.007a.031.031 0 0 1-.001-.003l.001.003.005.007-1.722 1.018zm.432.249a.499.499 0 0 1-.427-.241l1.712-1.034A1.501 1.501 0 0 0 14.63 3.5v2zm-5.304 0h5.304v-2H9.326v2zm0 0v-2 2zm0-3v2-2zm5.304 0H9.326v2h5.304v-2zm2.141 1.21A2.5 2.5 0 0 0 14.63 2.5v2c.175 0 .338.092.429.242L16.77 3.71zm0 0v-.001L15.06 4.742v.001l1.713-1.033zm1.369 2.275L16.773 3.71l-1.714 1.03 1.367 2.274 1.714-1.03zM19 5.5h-1.717v2H19v-2zM22.5 9A3.5 3.5 0 0 0 19 5.5v2A1.5 1.5 0 0 1 20.5 9h2zm0 9V9h-2v9h2zM19 21.5a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2zm-14 0h14v-2H5v2zM1.5 18A3.5 3.5 0 0 0 5 21.5v-2A1.5 1.5 0 0 1 3.5 18h-2zm0-9v9h2V9h-2zM5 5.5A3.5 3.5 0 0 0 1.5 9h2A1.5 1.5 0 0 1 5 7.5v-2zm1.713 0H5v2h1.713v-2zm.454-1.76L5.849 5.996l1.728 1.008 1.317-2.256L7.167 3.74zm.001-.003l1.724 1.014-1.724-1.014zM9.326 2.5a2.5 2.5 0 0 0-2.16 1.24l1.728 1.008a.5.5 0 0 1 .432-.248v-2z" mask="url(#q)"/>
  </StyledIcon>
);

Camera.defaultProps = {
  color: '#3B3B3B',
}
