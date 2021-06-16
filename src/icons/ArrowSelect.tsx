import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const ArrowSelect: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <mask id="p" fill="white">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.64641 16.6465C5.84165 16.4512 6.15823 16.4512 6.35351 16.6464L12.0014 22.293L17.6465 16.6497C17.8418 16.4545 18.1584 16.4545 18.3536 16.6498C18.5488 16.8451 18.5488 17.1617 18.3535 17.3569L12.3548 23.3536C12.1596 23.5488 11.8431 23.5488 11.6478 23.3536L5.64649 17.3536C5.4512 17.1584 5.45117 16.8418 5.64641 16.6465ZM18.3536 7.35351C18.1584 7.5488 17.8418 7.54883 17.6465 7.35359L11.9986 1.70701L6.35349 7.35028C6.1582 7.54551 5.84162 7.54546 5.64639 7.35016C5.45116 7.15487 5.45121 6.83828 5.64651 6.64305L11.6452 0.646388C11.8404 0.451196 12.1569 0.451205 12.3522 0.646407L18.3535 6.64641C18.5488 6.84165 18.5488 7.15823 18.3536 7.35351Z"/>
    </mask>
    <path d="M6.35351 16.6464L7.06054 15.9392H7.06054L6.35351 16.6464ZM5.64641 16.6465L6.35359 17.3535L5.64641 16.6465ZM12.0014 22.293L11.2943 23.0002C11.6848 23.3906 12.3178 23.3906 12.7083 23.0002L12.0014 22.293ZM17.6465 16.6497L16.9395 15.9425L16.9395 15.9425L17.6465 16.6497ZM18.3536 16.6498L19.0608 15.9429L19.0608 15.9428L18.3536 16.6498ZM18.3535 17.3569L19.0605 18.0642L18.3535 17.3569ZM12.3548 23.3536L13.0618 24.0608H13.0618L12.3548 23.3536ZM11.6478 23.3536L10.9408 24.0608H10.9408L11.6478 23.3536ZM5.64649 17.3536L4.93946 18.0608H4.93946L5.64649 17.3536ZM17.6465 7.35359L16.9395 8.06078L16.9395 8.06078L17.6465 7.35359ZM18.3536 7.35351L17.6464 6.64649V6.64649L18.3536 7.35351ZM11.9986 1.70701L12.7057 0.999823C12.3152 0.609419 11.6822 0.609402 11.2917 0.999784L11.9986 1.70701ZM6.35349 7.35028L7.06048 8.0575L7.06048 8.0575L6.35349 7.35028ZM5.64639 7.35016L4.93916 8.05715L4.93916 8.05715L5.64639 7.35016ZM5.64651 6.64305L4.93952 5.93583L4.93952 5.93583L5.64651 6.64305ZM11.6452 0.646388L10.9382 -0.0608377L10.9382 -0.060837L11.6452 0.646388ZM12.3522 0.646407L13.0592 -0.060778L13.0592 -0.0607785L12.3522 0.646407ZM18.3535 6.64641L19.0605 5.93922L18.3535 6.64641ZM7.06054 15.9392C6.47469 15.3535 5.52494 15.3536 4.93922 15.9395L6.35359 17.3535C6.15835 17.5488 5.84177 17.5488 5.64649 17.3536L7.06054 15.9392ZM12.7084 21.5858L7.06054 15.9392L5.64649 17.3536L11.2943 23.0002L12.7084 21.5858ZM16.9395 15.9425L11.2944 21.5858L12.7083 23.0002L18.3535 17.3569L16.9395 15.9425ZM19.0608 15.9428C18.4751 15.357 17.5254 15.3568 16.9395 15.9425L18.3535 17.3569C18.1582 17.5522 17.8416 17.5521 17.6464 17.3568L19.0608 15.9428ZM19.0605 18.0642C19.6464 17.4785 19.6465 16.5287 19.0608 15.9429L17.6464 17.3568C17.4512 17.1615 17.4512 16.845 17.6465 16.6497L19.0605 18.0642ZM13.0618 24.0608L19.0605 18.0642L17.6465 16.6497L11.6478 22.6464L13.0618 24.0608ZM10.9408 24.0608C11.5265 24.6464 12.476 24.6464 13.0618 24.0608L11.6478 22.6464C11.8431 22.4512 12.1596 22.4512 12.3548 22.6464L10.9408 24.0608ZM4.93946 18.0608L10.9408 24.0608L12.3548 22.6464L6.35351 16.6464L4.93946 18.0608ZM4.93922 15.9395C4.3535 16.5253 4.35361 17.4751 4.93946 18.0608L6.35351 16.6464C6.5488 16.8416 6.54883 17.1582 6.35359 17.3535L4.93922 15.9395ZM16.9395 8.06078C17.5253 8.6465 18.4751 8.64639 19.0608 8.06054L17.6464 6.64649C17.8416 6.4512 18.1582 6.45117 18.3535 6.64641L16.9395 8.06078ZM11.2916 2.41419L16.9395 8.06078L18.3535 6.64641L12.7057 0.999823L11.2916 2.41419ZM7.06048 8.0575L12.7056 2.41423L11.2917 0.999784L5.64651 6.64305L7.06048 8.0575ZM4.93916 8.05715C5.52485 8.64303 6.4746 8.64319 7.06048 8.0575L5.64651 6.64305C5.8418 6.44783 6.15838 6.44788 6.35361 6.64317L4.93916 8.05715ZM4.93952 5.93583C4.35363 6.52152 4.35348 7.47127 4.93916 8.05715L6.35361 6.64317C6.54884 6.83847 6.54879 7.15505 6.35349 7.35028L4.93952 5.93583ZM10.9382 -0.060837L4.93952 5.93583L6.35349 7.35028L12.3522 1.35361L10.9382 -0.060837ZM13.0592 -0.0607785C12.4735 -0.646384 11.524 -0.64641 10.9382 -0.0608377L12.3522 1.35361C12.1569 1.5488 11.8404 1.54879 11.6452 1.35359L13.0592 -0.0607785ZM19.0605 5.93922L13.0592 -0.060778L11.6452 1.35359L17.6465 7.35359L19.0605 5.93922ZM19.0608 8.06054C19.6465 7.47469 19.6464 6.52494 19.0605 5.93922L17.6465 7.35359C17.4512 7.15835 17.4512 6.84177 17.6464 6.64649L19.0608 8.06054Z" fill={props.color} mask="url(#p)"/>
  </Icon>
);

ArrowSelect.defaultProps = {
  color: '#3B3B3B',
};
