import * as React from 'react';

import PropsInterface from './interface';

import StyledIcon from '../StyledIcon';

export const Gift: React.FunctionComponent<PropsInterface> = (props) => (
  <StyledIcon {...props}>
    <path fill={props.color} d="M11.5 21a.5.5 0 1 0 1 0h-1zm1-13a.5.5 0 0 0-1 0h1zm3.196-1.389l.36.347.003-.003-.363-.344zM12.1 8l-.494.079a.5.5 0 0 0 .494.421V8zM5 12v-.5h-.5v.5H5zm14 0h.5v-.5H19v.5zm-5.82-8.034a.5.5 0 1 0-.72-.693l.72.693zm2.516-.347l-.364.344.364-.344zm-3.239-.343a.5.5 0 0 0 .727.687l-.727-.687zM8.304 6.61l.36-.346-.36.346zM11.901 8v.5a.5.5 0 0 0 .494-.421l-.494-.079zm-.36-4.726a.5.5 0 1 0-.721.693l.72-.693zm-.723.693a.5.5 0 0 0 .722-.693l-.721.693zM12.5 21V8h-1v13h1zM20 7.5H4v1h16v-1zm-16 0A1.5 1.5 0 0 0 2.5 9h1a.5.5 0 0 1 .5-.5v-1zM2.5 9v2h1V9h-1zm0 2A1.5 1.5 0 0 0 4 12.5v-1a.5.5 0 0 1-.5-.5h-1zM4 12.5h16v-1H4v1zm16 0a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1zm1.5-1.5V9h-1v2h1zm0-2A1.5 1.5 0 0 0 20 7.5v1a.5.5 0 0 1 .5.5h1zm-6.164-2.735c-.94.978-2.47 1.234-3.237 1.234v1c.877 0 2.741-.275 3.958-1.541l-.721-.693zM18 20.5H6v1h12v-1zm-12 0a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 6 21.5v-1zm-.5-.5v-8h-1v8h1zM5 12.5h14v-1H5v1zm13.5-.5v8h1v-8h-1zm0 8a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1zM12.1 8l.493-.079v-.005a5.306 5.306 0 0 1-.016-.116 9.946 9.946 0 0 1-.073-1.501 6.02 6.02 0 0 1 .174-1.334c.112-.424.279-.766.502-.999l-.72-.693c-.385.4-.612.92-.749 1.436a7.01 7.01 0 0 0-.207 1.56 10.94 10.94 0 0 0 .1 1.805l.001.002v.001L12.1 8zm3.96-1.045a2.677 2.677 0 0 0-.001-3.68l-.726.688a1.677 1.677 0 0 1 0 2.305l.726.687zm0-3.68a2.478 2.478 0 0 0-1.802-.775v1c.407 0 .795.167 1.074.463l.727-.687zM14.257 2.5c-.681 0-1.332.28-1.8.776l.726.687c.28-.296.668-.463 1.074-.463v-1zM7.944 6.958c1.216 1.266 3.08 1.541 3.957 1.541v-1c-.767 0-2.297-.256-3.236-1.234l-.721.693zM11.9 7.999l.494.078v-.003l.002-.009.004-.03a7.549 7.549 0 0 0 .056-.499c.029-.325.054-.774.04-1.268a7.01 7.01 0 0 0-.208-1.559c-.137-.515-.364-1.036-.748-1.436l-.721.693c.223.233.39.575.502 1 .112.42.161.887.175 1.333a9.952 9.952 0 0 1-.085 1.594l-.004.023v.005L11.9 8zM8.665 6.265a1.677 1.677 0 0 1 0-2.299l-.721-.693a2.677 2.677 0 0 0 0 3.685l.72-.693zm0-2.299a1.478 1.478 0 0 1 2.154 0l.72-.693a2.478 2.478 0 0 0-3.595 0l.72.693z"/>
  </StyledIcon>
);

Gift.defaultProps = {
  color: '#3B3B3B',
};
