import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const SendMessage: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path d="M4 15H5.604" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 12H5.604" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.4809 18.7099L21.4679 12.8779C21.6285 12.7931 21.7629 12.6662 21.8566 12.5107C21.9504 12.3551 21.9999 12.177 21.9999 11.9954C21.9999 11.8139 21.9504 11.6357 21.8566 11.4802C21.7629 11.3247 21.6285 11.1977 21.4679 11.1129L10.4969 5.28994C9.66894 4.84994 8.74094 5.67994 9.09194 6.54594L11.2809 11.9459L9.07394 17.4559C8.72794 18.3229 9.65494 19.1479 10.4809 18.7099V18.7099Z" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path
      d="M11.281 11.9509L21.998 11.9999"
      stroke={props.color}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M2 9H5.604" stroke={props.color} stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </Icon>
);

SendMessage.defaultProps = {
  color: '#3B3B3B',
};
