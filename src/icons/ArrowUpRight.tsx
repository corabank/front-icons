import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ArrowUpRight: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="path-2-inside-1" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87761 6.5501C9.60147 6.55016 9.37765 6.77406 9.37771 7.0502C9.37776 7.32634 9.60167 7.55016 9.87781 7.5501L15.7428 7.54893L6.69573 16.596C6.50047 16.7913 6.50047 17.1079 6.69573 17.3031C6.89099 17.4984 7.20757 17.4984 7.40283 17.3031L16.4501 8.25591L16.4495 14.1218C16.4495 14.398 16.6733 14.6218 16.9494 14.6219C17.2256 14.6219 17.4495 14.3981 17.4495 14.1219L17.4502 7.04874C17.4502 7.04869 17.4502 7.04864 17.4502 7.04859C17.4502 6.98084 17.4367 6.91624 17.4123 6.85732C17.3879 6.79834 17.3517 6.74308 17.3037 6.69513C17.2558 6.6472 17.2006 6.61104 17.1416 6.58664C17.1389 6.58551 17.1362 6.58441 17.1334 6.58333C17.0767 6.56098 17.0149 6.54869 16.9502 6.54869C16.9499 6.54869 16.9496 6.54869 16.9493 6.54869L9.87761 6.5501Z"/>
    </mask>
    <path d="M9.37771 7.0502L8.37771 7.0504L8.37771 7.0504L9.37771 7.0502ZM9.87761 6.5501L9.87781 7.5501L9.87781 7.5501L9.87761 6.5501ZM9.87781 7.5501L9.87761 6.5501L9.87761 6.5501L9.87781 7.5501ZM15.7428 7.54893L16.4499 8.25604C16.736 7.97001 16.8215 7.53985 16.6667 7.16615C16.5119 6.79246 16.1471 6.54885 15.7426 6.54893L15.7428 7.54893ZM6.69573 16.596L7.40283 17.3031L6.69573 16.596ZM16.4501 8.25591L17.4501 8.25601C17.4501 7.85153 17.2065 7.48686 16.8328 7.33205C16.4591 7.17725 16.029 7.2628 15.743 7.54881L16.4501 8.25591ZM16.4495 14.1218L17.4495 14.1219L16.4495 14.1218ZM16.9494 14.6219L16.9493 15.6219L16.9493 15.6219L16.9494 14.6219ZM17.4495 14.1219L18.4495 14.122L17.4495 14.1219ZM17.4502 7.04874L18.4502 7.04884L18.4502 7.04874H17.4502ZM17.4502 7.04859H18.4502L18.4502 7.04839L17.4502 7.04859ZM17.4123 6.85732L16.4882 7.2396L16.4885 7.24032L17.4123 6.85732ZM17.1416 6.58664L16.7586 7.51037L16.7592 7.51065L17.1416 6.58664ZM17.1334 6.58333L16.7668 7.51369L16.7668 7.5137L17.1334 6.58333ZM16.9502 6.54869L16.9503 5.54869L16.9502 5.54869V6.54869ZM16.9493 6.54869L16.9495 7.54869L16.9524 7.54868L16.9493 6.54869ZM10.3777 7.05C10.3778 7.32614 10.154 7.55005 9.87781 7.5501L9.87741 5.5501C9.04898 5.55027 8.37754 6.22198 8.37771 7.0504L10.3777 7.05ZM9.87761 6.5501C10.1538 6.55005 10.3777 6.77386 10.3777 7.05L8.37771 7.0504C8.37787 7.87883 9.04958 8.55027 9.87801 8.5501L9.87761 6.5501ZM15.7426 6.54893L9.87761 6.5501L9.87801 8.5501L15.743 8.54893L15.7426 6.54893ZM15.0357 6.84182L5.98862 15.8889L7.40283 17.3031L16.4499 8.25604L15.0357 6.84182ZM5.98862 15.8889C5.40283 16.4747 5.40283 17.4245 5.98862 18.0103L7.40283 16.596C7.5981 16.7913 7.5981 17.1079 7.40283 17.3031L5.98862 15.8889ZM5.98862 18.0103C6.57441 18.596 7.52415 18.596 8.10994 18.0103L6.69573 16.596C6.89099 16.4008 7.20757 16.4008 7.40283 16.596L5.98862 18.0103ZM8.10994 18.0103L17.1572 8.96302L15.743 7.54881L6.69573 16.596L8.10994 18.0103ZM15.4501 8.25581L15.4495 14.1217L17.4495 14.1219L17.4501 8.25601L15.4501 8.25581ZM15.4495 14.1217C15.4494 14.9502 16.1209 15.6218 16.9493 15.6219L16.9495 13.6219C17.2257 13.6219 17.4495 13.8458 17.4495 14.1219L15.4495 14.1217ZM16.9493 15.6219C17.7778 15.622 18.4494 14.9505 18.4495 14.122L16.4495 14.1218C16.4495 13.8457 16.6734 13.6218 16.9495 13.6219L16.9493 15.6219ZM18.4495 14.122L18.4502 7.04884L16.4502 7.04864L16.4495 14.1218L18.4495 14.122ZM18.4502 7.04874L18.4502 7.04859H16.4502L16.4502 7.04874H18.4502ZM16.4885 7.24032C16.4635 7.18001 16.4502 7.11469 16.4502 7.04879L18.4502 7.04839C18.4501 6.84698 18.4099 6.65246 18.336 6.47432L16.4885 7.24032ZM18.3363 6.47504C18.2625 6.29672 18.1534 6.13056 18.0108 5.98803L16.5966 7.40224C16.55 7.3556 16.5132 7.29996 16.4882 7.23959L18.3363 6.47504ZM18.0108 5.98803C17.8684 5.84554 17.7023 5.7364 17.524 5.66262L16.7592 7.51065C16.6989 7.48567 16.6433 7.44887 16.5966 7.40224L18.0108 5.98803ZM17.5246 5.6629C17.5165 5.65953 17.5083 5.65621 17.5001 5.65296L16.7668 7.5137C16.764 7.51261 16.7613 7.5115 16.7586 7.51037L17.5246 5.6629ZM16.9501 7.54869C16.8873 7.54868 16.8249 7.53659 16.7668 7.51369L17.5001 5.65297C17.3285 5.58537 17.1425 5.54871 16.9503 5.54869L16.9501 7.54869ZM16.9502 5.54869C16.9502 5.54869 16.9483 5.54869 16.9462 5.54869L16.9524 7.54868C16.9509 7.54869 16.9497 7.54869 16.9502 7.54869V5.54869ZM9.87781 7.5501L16.9495 7.54869L16.9491 5.54869L9.87741 5.5501L9.87781 7.5501Z" fill="#3B3B3B" mask="url(#path-2-inside-1)"/>
  </StyledIcon>
)
