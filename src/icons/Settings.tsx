import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const Settings: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fillRule="evenodd" stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M8.978 12a3 3 0 1 1 6 0M8.978 12a3 3 0 1 1 6 0M14.978 12a3 3 0 0 1-6 0" clipRule="evenodd"/>
    <path fillRule="evenodd" stroke={props.color} strokeLinecap="round" strokeLinejoin="round" d="M19.478 12c0-.33-.03-.66-.07-.98l1.764-1.38a.997.997 0 0 0 .25-1.285l-1.57-2.714a.997.997 0 0 0-1.235-.426l-1.576.633c-.314.12-.668.078-.944-.114a7.043 7.043 0 0 0-.757-.44 1.02 1.02 0 0 1-.569-.759l-.24-1.68A.997.997 0 0 0 13.542 2h-3.13a.997.997 0 0 0-.987.856l-.242 1.681a1.02 1.02 0 0 1-.566.758 7.575 7.575 0 0 0-.76.444 1.01 1.01 0 0 1-.94.11l-1.58-.634a.998.998 0 0 0-1.235.426L2.534 8.356a.997.997 0 0 0 .25 1.284l1.764 1.38c-.04.32-.07.65-.07.98M19.478 12c0 .33-.03.66-.07.98l1.764 1.38a.997.997 0 0 1 .25 1.285l-1.57 2.714a.997.997 0 0 1-1.235.426l-1.576-.633a1.017 1.017 0 0 0-.944.114c-.243.162-.496.31-.757.44a1.02 1.02 0 0 0-.569.759l-.24 1.68a.997.997 0 0 1-.988.855h-3.13a.997.997 0 0 1-.988-.856l-.24-1.682a1.02 1.02 0 0 0-.567-.757 7.489 7.489 0 0 1-.76-.445 1.014 1.014 0 0 0-.94-.11l-1.58.634a.998.998 0 0 1-1.235-.426l-1.569-2.714a.997.997 0 0 1 .25-1.285l1.763-1.38A8.101 8.101 0 0 1 4.478 12" clipRule="evenodd"/>
  </Icon>
);

Settings.defaultProps = {
  color: '#3B3B3B',
};
