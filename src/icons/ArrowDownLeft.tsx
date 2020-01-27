import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const ArrowDownLeft: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="path-2-inside-1" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1224 17.4489C14.3985 17.4489 14.6223 17.225 14.6223 16.9488C14.6222 16.6727 14.3983 16.4489 14.1222 16.4489L8.25716 16.4501L17.3043 7.40298C17.4995 7.20772 17.4995 6.89114 17.3043 6.69587C17.109 6.50061 16.7924 6.50061 16.5972 6.69587L7.54993 15.7431L7.55052 9.8772C7.55054 9.60106 7.32671 9.37717 7.05057 9.37715C6.77443 9.37712 6.55054 9.60095 6.55052 9.8771L6.54981 16.9503C6.54981 16.9503 6.54981 16.9504 6.54981 16.9504C6.54982 17.0182 6.56331 17.0828 6.58774 17.1417C6.61214 17.2007 6.64831 17.2559 6.69626 17.3039C6.74419 17.3518 6.79943 17.388 6.85839 17.4124C6.86111 17.4135 6.86383 17.4146 6.86657 17.4157C6.92329 17.438 6.98509 17.4503 7.04976 17.4503C7.05008 17.4503 7.05041 17.4503 7.05074 17.4503L14.1224 17.4489Z"/>
    </mask>
    <path d="M14.6223 16.9488L15.6223 16.9486L15.6223 16.9486L14.6223 16.9488ZM14.1224 17.4489L14.1222 16.4489L14.1222 16.4489L14.1224 17.4489ZM14.1222 16.4489L14.1224 17.4489L14.1224 17.4489L14.1222 16.4489ZM8.25716 16.4501L7.55005 15.743C7.26403 16.029 7.17848 16.4592 7.33332 16.8329C7.48815 17.2066 7.85286 17.4502 8.25736 17.4501L8.25716 16.4501ZM7.54993 15.7431L6.54993 15.743C6.54989 16.1475 6.79352 16.5122 7.1672 16.667C7.54088 16.8218 7.97103 16.7362 8.25704 16.4502L7.54993 15.7431ZM7.55052 9.8772L6.55052 9.8771L7.55052 9.8772ZM7.05057 9.37715L7.05067 8.37715L7.05066 8.37715L7.05057 9.37715ZM6.55052 9.8771L5.55052 9.877L6.55052 9.8771ZM6.54981 16.9503L5.54981 16.9502L5.54981 16.9503H6.54981ZM6.54981 16.9504H5.54981L5.54981 16.9506L6.54981 16.9504ZM6.58774 17.1417L7.51179 16.7594L7.51149 16.7587L6.58774 17.1417ZM6.85839 17.4124L7.24142 16.4886L7.24076 16.4884L6.85839 17.4124ZM6.86657 17.4157L7.23322 16.4853L7.23319 16.4853L6.86657 17.4157ZM7.04976 17.4503L7.04966 18.4503L7.04976 18.4503V17.4503ZM7.05074 17.4503L7.05054 16.4503L7.04763 16.4503L7.05074 17.4503ZM13.6223 16.949C13.6222 16.6729 13.846 16.449 14.1222 16.4489L14.1226 18.4489C14.951 18.4488 15.6225 17.777 15.6223 16.9486L13.6223 16.949ZM14.1224 17.4489C13.8462 17.449 13.6223 17.2252 13.6223 16.949L15.6223 16.9486C15.6221 16.1202 14.9504 15.4488 14.122 15.4489L14.1224 17.4489ZM8.25736 17.4501L14.1224 17.4489L14.122 15.4489L8.25696 15.4501L8.25736 17.4501ZM8.96426 17.1572L18.0114 8.11009L16.5972 6.69587L7.55005 15.743L8.96426 17.1572ZM18.0114 8.11009C18.5972 7.5243 18.5972 6.57455 18.0114 5.98877L16.5972 7.40298C16.4019 7.20772 16.4019 6.89114 16.5972 6.69587L18.0114 8.11009ZM18.0114 5.98877C17.4256 5.40298 16.4758 5.40298 15.8901 5.98877L17.3043 7.40298C17.109 7.59824 16.7924 7.59824 16.5972 7.40298L18.0114 5.98877ZM15.8901 5.98877L6.84282 15.036L8.25704 16.4502L17.3043 7.40298L15.8901 5.98877ZM8.54993 15.7432L8.55052 9.8773L6.55052 9.8771L6.54993 15.743L8.54993 15.7432ZM8.55052 9.8773C8.5506 9.04887 7.87909 8.37723 7.05067 8.37715L7.05047 10.3771C6.77432 10.3771 6.55049 10.1532 6.55052 9.8771L8.55052 9.8773ZM7.05066 8.37715C6.22224 8.37707 5.5506 9.04857 5.55052 9.877L7.55052 9.8772C7.55049 10.1533 7.32661 10.3772 7.05047 10.3771L7.05066 8.37715ZM5.55052 9.877L5.54981 16.9502L7.54981 16.9504L7.55052 9.8772L5.55052 9.877ZM5.54981 16.9503L5.54981 16.9504H7.54981L7.54981 16.9503H5.54981ZM7.51149 16.7587C7.53649 16.819 7.5498 16.8843 7.54981 16.9502L5.54981 16.9506C5.54985 17.152 5.59013 17.3466 5.66399 17.5247L7.51149 16.7587ZM5.66369 17.524C5.73746 17.7023 5.84662 17.8685 5.98915 18.011L7.40336 16.5968C7.45001 16.6434 7.48682 16.6991 7.51179 16.7594L5.66369 17.524ZM5.98915 18.011C6.13164 18.1535 6.29775 18.2626 6.47603 18.3364L7.24076 16.4884C7.30111 16.5134 7.35674 16.5502 7.40336 16.5968L5.98915 18.011ZM6.47537 18.3361C6.4835 18.3395 6.49169 18.3428 6.49994 18.3461L7.23319 16.4853C7.23597 16.4864 7.23871 16.4875 7.24142 16.4886L6.47537 18.3361ZM7.04986 16.4503C7.1127 16.4503 7.17512 16.4624 7.23322 16.4853L6.49992 18.3461C6.67147 18.4137 6.85749 18.4503 7.04966 18.4503L7.04986 16.4503ZM7.04976 18.4503C7.04983 18.4503 7.05171 18.4503 7.05384 18.4503L7.04763 16.4503C7.04911 16.4503 7.05034 16.4503 7.04976 16.4503V18.4503ZM14.1222 16.4489L7.05054 16.4503L7.05094 18.4503L14.1226 18.4489L14.1222 16.4489Z" fill="#3B3B3B" mask="url(#path-2-inside-1)"/>
  </StyledIcon>
)
