import * as React from 'react';

import StyledIcon from '../StyledIcon';

interface Props {
  size: string
}

export const GraphDots: React.FunctionComponent<Props> = props => (
  <StyledIcon {...props}>
    <mask id="path-2-inside-1" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.345 5.05005C21.1701 4.39539 20.5778 3.93949 19.9002 3.93799C19.2927 3.93665 18.7444 4.30211 18.512 4.86339C18.2795 5.42466 18.4088 6.07074 18.8393 6.49934C19.3196 6.9774 20.0608 7.07383 20.6474 6.73457C21.2339 6.3953 21.5199 5.70471 21.345 5.05005ZM10.745 6.25005C10.5701 5.59539 9.97778 5.13949 9.30017 5.13799C8.69268 5.13665 8.14444 5.50211 7.91198 6.06339C7.67951 6.62466 7.8088 7.27074 8.23934 7.69934C8.71957 8.1774 9.46079 8.27383 10.0474 7.93457C10.6339 7.5953 10.9199 6.90471 10.745 6.25005ZM18.3391 7.16737C18.542 6.98006 18.5546 6.66373 18.3673 6.46083C18.18 6.25793 17.8636 6.2453 17.6607 6.43262L16.3609 7.63262C16.158 7.81994 16.1454 8.13627 16.3327 8.33916C16.52 8.54206 16.8364 8.55469 17.0393 8.36737L18.3391 7.16737ZM11.5773 7.08395C11.3475 6.93079 11.0371 6.9929 10.884 7.22268C10.7308 7.45245 10.7929 7.76288 11.0227 7.91604L12.2229 8.71604C12.4527 8.8692 12.7631 8.80709 12.9162 8.57731C13.0694 8.34754 13.0073 8.03711 12.7775 7.88395L11.5773 7.08395ZM7.66482 7.25808C7.85365 7.45956 7.8434 7.77597 7.64192 7.96481L5.62219 9.85778C5.42071 10.0466 5.1043 10.0364 4.91546 9.83488C4.72662 9.6334 4.73687 9.31699 4.93835 9.12815L6.95808 7.23518C7.15956 7.04634 7.47598 7.05659 7.66482 7.25808ZM20.0001 11.5C20.2762 11.5 20.5001 11.7238 20.5001 12V20C20.5001 20.2761 20.2762 20.5 20.0001 20.5C19.7239 20.5 19.5001 20.2761 19.5001 20V12C19.5001 11.7238 19.7239 11.5 20.0001 11.5ZM14.7021 14.167C14.9782 14.167 15.2021 14.3908 15.2021 14.667V20C15.2021 20.2761 14.9782 20.5 14.7021 20.5C14.4259 20.5 14.2021 20.2761 14.2021 20V14.667C14.2021 14.3908 14.4259 14.167 14.7021 14.167ZM4.50008 17C4.50008 16.7238 4.27623 16.5 4.00008 16.5C3.72394 16.5 3.50008 16.7238 3.50008 17V20C3.50008 20.2761 3.72394 20.5 4.00008 20.5C4.27623 20.5 4.50008 20.2761 4.50008 20V17ZM9.29908 13.1C9.57523 13.1 9.79908 13.3238 9.79908 13.6V20C9.79908 20.2761 9.57523 20.5 9.29908 20.5C9.02294 20.5 8.79908 20.2761 8.79908 20V13.6C8.79908 13.3238 9.02294 13.1 9.29908 13.1ZM3.69617 9.34099C4.37378 9.34249 4.96612 9.79839 5.14103 10.4531C5.31594 11.1077 5.02992 11.7983 4.44336 12.1376C3.85679 12.4768 3.11557 12.3804 2.63534 11.9023C2.2048 11.4737 2.07551 10.8277 2.30798 10.2664C2.54044 9.70511 3.08868 9.33965 3.69617 9.34099ZM14.6002 7.53799C15.2778 7.53949 15.8701 7.99539 16.045 8.65005C16.2199 9.30471 15.9339 9.9953 15.3474 10.3346C14.7608 10.6738 14.0196 10.5774 13.5393 10.0993C13.1088 9.67074 12.9795 9.02466 13.212 8.46339C13.4444 7.90211 13.9927 7.53665 14.6002 7.53799Z"/>
    </mask>
    <path d="M19.9002 3.93799L19.898 4.93799L19.9002 3.93799ZM21.345 5.05005L20.3789 5.30817L21.345 5.05005ZM18.512 4.86339L17.5881 4.48073L17.5881 4.48074L18.512 4.86339ZM18.8393 6.49934L19.5448 5.79063L19.5448 5.79063L18.8393 6.49934ZM20.6474 6.73457L21.148 7.6002L21.148 7.6002L20.6474 6.73457ZM9.30017 5.13799L9.29797 6.13799L9.30017 5.13799ZM10.745 6.25005L9.77892 6.50817L9.77892 6.50817L10.745 6.25005ZM7.91198 6.06339L6.98808 5.68074V5.68074L7.91198 6.06339ZM8.23934 7.69934L8.94485 6.99063L8.94485 6.99063L8.23934 7.69934ZM10.0474 7.93457L10.548 8.8002L10.548 8.8002L10.0474 7.93457ZM18.3673 6.46083L17.6325 7.13916V7.13916L18.3673 6.46083ZM18.3391 7.16737L19.0174 7.90213V7.90213L18.3391 7.16737ZM17.6607 6.43262L18.3391 7.16737V7.16737L17.6607 6.43262ZM16.3609 7.63262L15.6826 6.89787V6.89787L16.3609 7.63262ZM17.0393 8.36737L16.3609 7.63262V7.63262L17.0393 8.36737ZM10.884 7.22268L11.716 7.77732V7.77732L10.884 7.22268ZM11.5773 7.08395L12.132 6.25186L12.132 6.25186L11.5773 7.08395ZM11.0227 7.91604L11.5773 7.08395L11.5773 7.08395L11.0227 7.91604ZM12.2229 8.71604L12.7775 7.88395L12.7775 7.88395L12.2229 8.71604ZM12.9162 8.57731L12.0841 8.02268L12.0841 8.02268L12.9162 8.57731ZM12.7775 7.88395L13.3322 7.05186L13.3322 7.05186L12.7775 7.88395ZM7.64192 7.96481L6.95808 7.23518L6.95808 7.23518L7.64192 7.96481ZM7.66482 7.25808L6.93518 7.94192L6.93518 7.94192L7.66482 7.25808ZM5.62219 9.85778L4.93835 9.12815H4.93835L5.62219 9.85778ZM4.91546 9.83488L5.64509 9.15104L5.64509 9.15104L4.91546 9.83488ZM4.93835 9.12815L5.62219 9.85778L5.62219 9.85778L4.93835 9.12815ZM6.95808 7.23518L6.27424 6.50555L6.95808 7.23518ZM5.14103 10.4531L6.10715 10.1949L5.14103 10.4531ZM3.69617 9.34099L3.69396 10.341H3.69396L3.69617 9.34099ZM4.44336 12.1376L4.94404 13.0032H4.94404L4.44336 12.1376ZM2.63534 11.9023L1.92984 12.611L1.92984 12.611L2.63534 11.9023ZM2.30798 10.2664L1.38408 9.88374L2.30798 10.2664ZM16.045 8.65005L15.0789 8.90817L15.0789 8.90817L16.045 8.65005ZM14.6002 7.53799L14.6024 6.53799H14.6024L14.6002 7.53799ZM13.5393 10.0993L12.8338 10.808L12.8338 10.808L13.5393 10.0993ZM13.212 8.46339L14.1359 8.84604L14.1359 8.84603L13.212 8.46339ZM19.898 4.93799C20.1235 4.93849 20.3207 5.09024 20.3789 5.30817L22.3111 4.79193C22.0196 3.70054 21.0321 2.94049 19.9024 2.93799L19.898 4.93799ZM19.4359 5.24604C19.5133 5.05919 19.6958 4.93754 19.898 4.93799L19.9024 2.93799C18.8896 2.93576 17.9756 3.54504 17.5881 4.48073L19.4359 5.24604ZM19.5448 5.79063C19.4015 5.64796 19.3585 5.43288 19.4359 5.24603L17.5881 4.48074C17.2005 5.41644 17.4161 6.49352 18.1338 7.20804L19.5448 5.79063ZM20.1467 5.86893C19.9514 5.98186 19.7047 5.94977 19.5448 5.79063L18.1338 7.20804C18.9344 8.00503 20.1702 8.1658 21.148 7.6002L20.1467 5.86893ZM20.3789 5.30817C20.4371 5.52611 20.3419 5.756 20.1467 5.86893L21.148 7.6002C22.1259 7.0346 22.6027 5.8833 22.3111 4.79193L20.3789 5.30817ZM9.29797 6.13799C9.52351 6.13849 9.72069 6.29024 9.77892 6.50817L11.7111 5.99193C11.4196 4.90055 10.4321 4.14049 9.30238 4.13799L9.29797 6.13799ZM8.83587 6.44603C8.91326 6.25919 9.09575 6.13754 9.29796 6.13799L9.30238 4.13799C8.2896 4.13576 7.37562 4.74503 6.98808 5.68074L8.83587 6.44603ZM8.94485 6.99063C8.80153 6.84796 8.75848 6.63288 8.83587 6.44603L6.98808 5.68074C6.60054 6.61643 6.81607 7.69352 7.53384 8.40804L8.94485 6.99063ZM9.54668 7.06893C9.35143 7.18186 9.1047 7.14977 8.94485 6.99063L7.53384 8.40804C8.33444 9.20503 9.57016 9.3658 10.548 8.8002L9.54668 7.06893ZM9.77892 6.50817C9.83715 6.72611 9.74193 6.956 9.54668 7.06893L10.548 8.8002C11.5259 8.2346 12.0027 7.0833 11.7111 5.99193L9.77892 6.50817ZM17.6325 7.13916C17.4452 6.93627 17.4578 6.61994 17.6607 6.43262L19.0174 7.90213C19.6261 7.34017 19.664 6.39118 19.102 5.78249L17.6325 7.13916ZM18.3391 7.16737C18.1362 7.35469 17.8198 7.34206 17.6325 7.13916L19.102 5.78249C18.5401 5.1738 17.5911 5.13592 16.9824 5.69787L18.3391 7.16737ZM17.0393 8.36737L18.3391 7.16737L16.9824 5.69787L15.6826 6.89787L17.0393 8.36737ZM17.0675 7.66083C17.2548 7.86373 17.2422 8.18006 17.0393 8.36737L15.6826 6.89787C15.0739 7.45982 15.036 8.40881 15.598 9.0175L17.0675 7.66083ZM16.3609 7.63262C16.5638 7.4453 16.8802 7.45793 17.0675 7.66083L15.598 9.0175C16.1599 9.62619 17.1089 9.66408 17.7176 9.10213L16.3609 7.63262ZM17.6607 6.43262L16.3609 7.63262L17.7176 9.10213L19.0174 7.90213L17.6607 6.43262ZM11.716 7.77732C11.5629 8.00709 11.2525 8.0692 11.0227 7.91604L12.132 6.25186C11.4426 5.79238 10.5113 5.97871 10.0519 6.66804L11.716 7.77732ZM11.5773 7.08395C11.8071 7.23711 11.8692 7.54754 11.716 7.77732L10.0519 6.66804C9.59238 7.35737 9.77872 8.28866 10.468 8.74813L11.5773 7.08395ZM12.7775 7.88395L11.5773 7.08395L10.468 8.74813L11.6682 9.54813L12.7775 7.88395ZM12.0841 8.02268C12.2373 7.7929 12.5477 7.73079 12.7775 7.88395L11.6682 9.54813C12.3576 10.0076 13.2889 9.82128 13.7483 9.13195L12.0841 8.02268ZM12.2229 8.71604C11.9931 8.56288 11.931 8.25245 12.0841 8.02268L13.7483 9.13195C14.2078 8.44263 14.0215 7.51134 13.3322 7.05186L12.2229 8.71604ZM11.0227 7.91604L12.2229 8.71604L13.3322 7.05186L12.132 6.25186L11.0227 7.91604ZM8.32576 8.69444C8.93021 8.12793 8.96096 7.17868 8.39445 6.57424L6.93518 7.94192C6.74635 7.74043 6.7566 7.42402 6.95808 7.23518L8.32576 8.69444ZM6.30603 10.5874L8.32576 8.69444L6.95808 7.23518L4.93835 9.12815L6.30603 10.5874ZM4.18583 10.5187C4.75234 11.1232 5.70159 11.1539 6.30603 10.5874L4.93835 9.12815C5.13984 8.93931 5.45625 8.94956 5.64509 9.15104L4.18583 10.5187ZM4.25451 8.39852C3.65007 8.96503 3.61931 9.91428 4.18583 10.5187L5.64509 9.15104C5.83393 9.35253 5.82368 9.66894 5.62219 9.85778L4.25451 8.39852ZM6.27424 6.50555L4.25451 8.39852L5.62219 9.85778L7.64192 7.96481L6.27424 6.50555ZM8.39445 6.57424C7.82794 5.96979 6.87869 5.93904 6.27424 6.50555L7.64192 7.96481C7.44044 8.15365 7.12402 8.1434 6.93518 7.94192L8.39445 6.57424ZM21.5001 12C21.5001 11.1716 20.8285 10.5 20.0001 10.5V12.5C19.7239 12.5 19.5001 12.2761 19.5001 12H21.5001ZM21.5001 20V12H19.5001V20H21.5001ZM20.0001 21.5C20.8285 21.5 21.5001 20.8284 21.5001 20H19.5001C19.5001 19.7238 19.7239 19.5 20.0001 19.5V21.5ZM18.5001 20C18.5001 20.8284 19.1717 21.5 20.0001 21.5V19.5C20.2762 19.5 20.5001 19.7238 20.5001 20H18.5001ZM18.5001 12V20H20.5001V12H18.5001ZM20.0001 10.5C19.1717 10.5 18.5001 11.1716 18.5001 12H20.5001C20.5001 12.2761 20.2762 12.5 20.0001 12.5V10.5ZM16.2021 14.667C16.2021 13.8386 15.5305 13.167 14.7021 13.167V15.167C14.4259 15.167 14.2021 14.9431 14.2021 14.667H16.2021ZM16.2021 20V14.667H14.2021V20H16.2021ZM14.7021 21.5C15.5305 21.5 16.2021 20.8284 16.2021 20H14.2021C14.2021 19.7238 14.4259 19.5 14.7021 19.5V21.5ZM13.2021 20C13.2021 20.8284 13.8737 21.5 14.7021 21.5V19.5C14.9782 19.5 15.2021 19.7238 15.2021 20H13.2021ZM13.2021 14.667V20H15.2021V14.667H13.2021ZM14.7021 13.167C13.8737 13.167 13.2021 13.8386 13.2021 14.667H15.2021C15.2021 14.9431 14.9782 15.167 14.7021 15.167V13.167ZM4.00008 17.5C3.72394 17.5 3.50008 17.2761 3.50008 17H5.50008C5.50008 16.1716 4.82851 15.5 4.00008 15.5V17.5ZM4.50008 17C4.50008 17.2761 4.27623 17.5 4.00008 17.5V15.5C3.17166 15.5 2.50008 16.1716 2.50008 17H4.50008ZM4.50008 20V17H2.50008V20H4.50008ZM4.00008 19.5C4.27623 19.5 4.50008 19.7238 4.50008 20H2.50008C2.50008 20.8284 3.17166 21.5 4.00008 21.5V19.5ZM3.50008 20C3.50008 19.7238 3.72394 19.5 4.00008 19.5V21.5C4.82851 21.5 5.50008 20.8284 5.50008 20H3.50008ZM3.50008 17V20H5.50008V17H3.50008ZM10.7991 13.6C10.7991 12.7716 10.1275 12.1 9.29908 12.1V14.1C9.02294 14.1 8.79908 13.8761 8.79908 13.6H10.7991ZM10.7991 20V13.6H8.79908V20H10.7991ZM9.29908 21.5C10.1275 21.5 10.7991 20.8284 10.7991 20H8.79908C8.79908 19.7238 9.02294 19.5 9.29908 19.5V21.5ZM7.79908 20C7.79908 20.8284 8.47066 21.5 9.29908 21.5V19.5C9.57522 19.5 9.79908 19.7238 9.79908 20H7.79908ZM7.79908 13.6V20H9.79908V13.6H7.79908ZM9.29908 12.1C8.47066 12.1 7.79908 12.7716 7.79908 13.6H9.79908C9.79908 13.8761 9.57523 14.1 9.29908 14.1V12.1ZM6.10715 10.1949C5.81555 9.10355 4.82805 8.34349 3.69838 8.34099L3.69396 10.341C3.91951 10.3415 4.11669 10.4932 4.17492 10.7112L6.10715 10.1949ZM4.94404 13.0032C5.92191 12.4376 6.39874 11.2863 6.10715 10.1949L4.17492 10.7112C4.23315 10.9291 4.13793 11.159 3.94268 11.2719L4.94404 13.0032ZM1.92984 12.611C2.73044 13.408 3.96616 13.5688 4.94404 13.0032L3.94268 11.2719C3.74743 11.3849 3.5007 11.3528 3.34085 11.1936L1.92984 12.611ZM1.38408 9.88374C0.996544 10.8194 1.21207 11.8965 1.92984 12.611L3.34085 11.1936C3.19752 11.051 3.15448 10.8359 3.23187 10.649L1.38408 9.88374ZM3.69838 8.34099C2.6856 8.33876 1.77162 8.94804 1.38408 9.88374L3.23187 10.649C3.30926 10.4622 3.49175 10.3405 3.69396 10.341L3.69838 8.34099ZM17.0111 8.39193C16.7196 7.30055 15.7321 6.54049 14.6024 6.53799L14.598 8.53799C14.8235 8.53849 15.0207 8.69024 15.0789 8.90817L17.0111 8.39193ZM15.848 11.2002C16.8259 10.6346 17.3027 9.4833 17.0111 8.39193L15.0789 8.90817C15.1371 9.12611 15.0419 9.356 14.8467 9.46893L15.848 11.2002ZM12.8338 10.808C13.6344 11.605 14.8702 11.7658 15.848 11.2002L14.8467 9.46893C14.6514 9.58186 14.4047 9.54977 14.2448 9.39063L12.8338 10.808ZM12.2881 8.08074C11.9005 9.01644 12.1161 10.0935 12.8338 10.808L14.2448 9.39063C14.1015 9.24796 14.0585 9.03288 14.1359 8.84604L12.2881 8.08074ZM14.6024 6.53799C13.5896 6.53576 12.6756 7.14503 12.2881 8.08074L14.1359 8.84603C14.2133 8.65919 14.3958 8.53754 14.598 8.53799L14.6024 6.53799Z" fill="#3B3B3B" mask="url(#path-2-inside-1)"/>
  </StyledIcon>
)