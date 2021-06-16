import * as React from 'react';

import PropsInterface from './interface';

import Icon from '../components/Icon';

export const EyeHidden: React.FunctionComponent<PropsInterface> = (props) => (
  <Icon {...props}>
    <path fill={props.color} fillRule="evenodd" d="M19.459 8.595a.5.5 0 1 0-.76.652 14.63 14.63 0 0 1 1.743 2.524.487.487 0 0 1 0 .459c-.406.752-.89 1.48-1.43 2.16l-5.29 3.854A6.172 6.172 0 0 1 12 18.5h-.012c-.768-.002-1.545-.165-2.311-.461a.5.5 0 1 0-.361.932c.867.336 1.771.529 2.684.529l1.723-1.256.018-.005-1.727 1.26c1.886-.003 3.734-.82 5.334-2.057 1.603-1.24 2.992-2.924 3.968-4.725a1.487 1.487 0 0 0 .007-1.42l-.002-.003a15.634 15.634 0 0 0-1.863-2.699zm1.515 4.364l-1.967 1.436a.13.13 0 0 0 .004-.005l1.963-1.43zm-1.967 1.436a13.51 13.51 0 0 1-2.27 2.255c-.953.737-1.969 1.287-2.996 1.589l5.266-3.844zm.347-9.749a.5.5 0 0 1 0 .708l-1.952 1.95a.463.463 0 0 1-.01.011L7.328 17.38a.496.496 0 0 1-.039.039l-1.935 1.936a.5.5 0 0 1-.708-.708l1.563-1.562c-1.419-1.2-2.645-2.74-3.53-4.378l-.001-.001a1.487 1.487 0 0 1 0-1.409C3.655 9.488 5.045 7.8 6.652 6.557 8.256 5.318 10.11 4.5 12 4.5c1.754 0 3.476.705 4.996 1.797l1.65-1.65a.5.5 0 0 1 .708 0zm-3.075 2.368C14.914 6.064 13.44 5.5 12 5.5c-1.604 0-3.246.698-4.736 1.85-1.488 1.15-2.79 2.727-3.706 4.42a.487.487 0 0 0 0 .46c.845 1.562 2.018 3.024 3.36 4.144l2.172-2.171a3.65 3.65 0 0 1 5.114-5.114l2.075-2.075zm-2.792 2.792l-3.68 3.68a2.65 2.65 0 0 1 3.68-3.68z" clipRule="evenodd"/>
  </Icon>
);

EyeHidden.defaultProps = {
  color: '#3B3B3B',
};
