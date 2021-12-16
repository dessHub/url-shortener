import { css } from 'styled-components';

export interface HelperProps {
  mb?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  m?: string;
  width?: number;
  height?: number;
  center?: boolean;
  textAlignCenter?: boolean;
  color?: string;
  bg?: string;
  font?: string;
  weight?: number;
  p?: string;
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  align?: string;
  direction?: string;
  flex?: number;
  justify?: string;
  border?: string;
  w?: string;
  h?: string;
  radius?: number;
  mw?: string;
  minw?: string;
  fs?: number;
  lineHeight?: string;
  textAlign?: string;
  display?: string;
  borderColor?: string;
}

const helpers = css<HelperProps>`
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px !important;
    `}

  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt}px !important;
    `}

  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml}px !important;
    `}

  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr}px !important;
    `}

  ${({ m }) =>
    m &&
    css`
      margin: ${m} !important;
    `}

  ${({ width }) =>
    width &&
    css`
      width: ${width}% !important;
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${height}% !important;
    `}

  ${({ center }) =>
    center &&
    css`
      display: block;
      margin: 0 auto;
    `}

  ${({ textAlignCenter }) =>
    textAlignCenter &&
    css`
      text-align: center;
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${color} !important;
    `}

  ${({ bg }) =>
    bg &&
    css`
      background-color: ${bg} !important;
    `}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight} !important;
    `}

  ${({ align }) =>
    align &&
    css`
      align-items: ${align} !important;
    `}

  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction} !important;
    `}
  
  ${({ flex }) =>
    flex &&
    css`
      flex: ${flex} !important;
    `}

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify} !important;
    `}

  ${({ border }) =>
    border &&
    css`
      border: ${border} !important;
    `} 
  ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor} !important;
    `}
    ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb}px !important;
    `}

  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt}px !important;
    `}

  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl}px !important;
    `}

  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr}px !important;
    `}

  ${({ p }) =>
    p &&
    css`
      padding: ${p} !important;
    `}

  ${({ w }) =>
    w &&
    css`
      width: ${w} !important;
    `}

  ${({ h }) =>
    h &&
    css`
      height: ${h} !important;
    `}

  ${({ font }) =>
    font &&
    css`
      font: ${font} !important;
    `}

  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius}px !important;
    `}

  ${({ mw }) =>
    mw &&
    css`
      max-width: ${mw} !important;
    `}
  ${({ minw }) =>
    minw &&
    css`
      min-width: ${minw} !important;
    `}
  ${({ fs }) =>
    fs &&
    css`
      font-size: ${fs}px !important;
    `} 
  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight} !important;
    `}
    ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign} !important;
    `}
    ${({ display }) =>
    display &&
    css`
      display: ${display} !important;
    `}
`;

export default helpers;
