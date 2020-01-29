import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const Reload: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="a" fill="#fff">
      <path fillRule="evenodd" d="M12 3.5a8.5 8.5 0 0 0 0 17c4.335 0 7.903-3.247 8.427-7.438a.5.5 0 1 0-.992-.124C18.973 16.637 15.823 19.5 12 19.5a7.5 7.5 0 0 1-7.443-8.433L12 4.5c2.8 0 5.344 1.559 6.63 4H16a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-1 0v3.005A8.498 8.498 0 0 0 12 3.5zm-7.443 7.567L3.5 12l1.057-.933zm0 0L12 4.5a7.501 7.501 0 0 0-7.443 6.567z" clipRule="evenodd"/>
    </mask>
    <path fill="#3B3B3B" d="M4.888 11.442a.5.5 0 0 0-.661-.75l.661.75zm-1.719.183a.5.5 0 1 0 .662.75l-.662-.75zm1.058-.933a.5.5 0 1 0 .661.75l-.661-.75zm8.104-5.817a.5.5 0 1 0-.662-.75l.662.75zm-8.104 5.817l-1.058.933.662.75 1.057-.933-.661-.75zm.661.75l7.443-6.567-.662-.75-7.442 6.567.661.75zm15.54 1.62l.991.124-.992-.124zm-.993-.124l.992.124-.992-.124zM12 4.5v-1a1 1 0 0 0-.662.25L12 4.5zm6.63 4v1a1 1 0 0 0 .885-1.466l-.884.466zm.772 1l.023-1h-.023v1zm.023 0v-1H19.4l.024 1zm.075-1.495l-.883.47a1 1 0 0 0 1.883-.47h-1zM12 3.5v-1 1zm0 1l.662.75A1 1 0 0 0 12 3.5v1zM4.5 12A7.5 7.5 0 0 1 12 4.5v-2A9.5 9.5 0 0 0 2.5 12h2zm7.5 7.5A7.5 7.5 0 0 1 4.5 12h-2a9.5 9.5 0 0 0 9.5 9.5v-2zm7.435-6.562C18.973 16.637 15.823 19.5 12 19.5v2c4.847 0 8.834-3.63 9.42-8.314l-1.985-.248zm.434.558a.5.5 0 0 1-.434-.558l1.984.248a1.5 1.5 0 0 0-1.302-1.674l-.248 1.984zm.558-.434a.5.5 0 0 1-.558.434l.248-1.984a1.5 1.5 0 0 0-1.674 1.302l1.984.248zM12 20.5c4.335 0 7.903-3.247 8.427-7.438l-1.984-.248A6.497 6.497 0 0 1 12 18.5v2zM3.5 12a8.5 8.5 0 0 0 8.5 8.5v-2A6.5 6.5 0 0 1 5.5 12h-2zm.065-1.056A8.572 8.572 0 0 0 3.5 12h2c0-.275.017-.545.05-.81l-1.985-.246zm7.773-7.194l-7.442 6.567 1.323 1.5 7.443-6.567-1.324-1.5zm8.177 4.284A8.498 8.498 0 0 0 12 3.5v2a6.498 6.498 0 0 1 5.746 3.466l1.77-.932zm-.884-.534H16v2h2.63v-2zM16 7.5A1.5 1.5 0 0 0 14.5 9h2a.5.5 0 0 1-.5.5v-2zM14.5 9a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2zm1.5 1.5h3.402v-2H16v2zm3.401-2h.024l-.046 2h.069l-.047-2zm.024 2H20v-2h-.575v2zm.575 0A1.5 1.5 0 0 0 21.5 9h-2a.5.5 0 0 1 .5-.5v2zM21.5 9V5h-2v4h2zm0-4A1.5 1.5 0 0 0 20 3.5v2a.5.5 0 0 1-.5-.5h2zM20 3.5A1.5 1.5 0 0 0 18.5 5h2a.5.5 0 0 1-.5.5v-2zM18.5 5v3.005h2V5h-2zM12 4.5a7.498 7.498 0 0 1 6.617 3.975l1.766-.94A9.498 9.498 0 0 0 12 2.5v2zm0 0v-2 2zm-7.838 8.25l1.057-.933-1.323-1.5-1.058.933 1.324 1.5zm-.266-2.433l-1.058.933 1.324 1.5 1.057-.933-1.323-1.5zm-.33.626l1.984.248-1.985-.248zm1.653.874l7.443-6.567-1.324-1.5-7.442 6.567 1.323 1.5zM12 3.5a8.501 8.501 0 0 0-8.434 7.444l1.985.246A6.501 6.501 0 0 1 12 5.5v-2z" mask="url(#a)"/>
  </StyledIcon>
)
