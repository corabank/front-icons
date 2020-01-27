import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const PersonCircle: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <path d="M17.707 18.958C16.272 17.447 14.248 16.5 12 16.5C9.752 16.5 7.728 17.447 6.293 18.959M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 13.125C13.553 13.125 14.812 11.866 14.812 10.313C14.812 8.75997 13.553 7.501 12 7.501C10.447 7.501 9.188 8.75997 9.188 10.313C9.188 11.866 10.447 13.125 12 13.125Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
  </StyledIcon>
)