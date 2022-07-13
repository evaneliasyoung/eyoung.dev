/**
 * @file      wl.styles.ts.ts
 * @brief     Weightless styles.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-08
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {css, CSSResult, unsafeCSS} from 'lit-element';

const constructRawHSL = (
  hslVar: string,
  [hVar, sVar, lVar]: string[],
  [h, s, l]: string[],
  alpha?: string
) =>
  alpha
    ? `hsla(var(--${hslVar}, var(--${hVar}, ${h}), var(--${sVar}, ${s}), var(--${lVar}, ${l})), ${alpha})`
    : `hsl(var(--${hslVar}, var(--${hVar}, ${h}), var(--${sVar}, ${s}), var(--${lVar}, ${l})))`;

const constructHSL = (
  hslVar: string,
  hslVars: string[],
  hsl: string[],
  alpha?: string
) => unsafeCSS(constructRawHSL(hslVar, hslVars, hsl, alpha));

const getHSLVariables = (key: string) => [
  `${key}-hue`,
  `${key}-saturation`,
  `${key}-lightness`,
];
const constructSlot = (
  slot: string,
  index: string,
  hsl: string[],
  alpha?: string
) => constructHSL(`${slot}-${index}`, getHSLVariables(slot), hsl, alpha);

const constructShade = (index: string, lightness: string) =>
  constructSlot('shade', index, ['200', '4%', lightness]);
const constructError = (index: string, hsl: string[]) =>
  constructSlot('error', index, hsl);
const constructPrimary = (index: string, hsl: string[]) =>
  constructSlot('primary', index, hsl);

const fg = (hsl: CSSResult) => unsafeCSS(`color: ${hsl};`);
const bg = (hsl: CSSResult) => unsafeCSS(`background-color: ${hsl};`);

export const shade100 = constructShade('100', '95%');
export const fgShade100 = fg(shade100);
export const bgShade100 = bg(shade100);
export const shade200 = constructShade('200', '85%');
export const fgShade200 = fg(shade200);
export const bgShade200 = bg(shade200);
export const shade300 = constructShade('300', '75%');
export const fgShade300 = fg(shade300);
export const bgShade300 = bg(shade300);
export const shade400 = constructShade('400', '65%');
export const fgShade400 = fg(shade400);
export const bgShade400 = bg(shade400);
export const shade500 = constructShade('500', '55%');
export const fgShade500 = fg(shade500);
export const bgShade500 = bg(shade500);
export const shade600 = constructShade('600', '35%');
export const fgShade600 = fg(shade600);
export const bgShade600 = bg(shade600);
export const shade700 = constructShade('700', '25%');
export const fgShade700 = fg(shade700);
export const bgShade700 = bg(shade700);
export const shade800 = constructShade('800', '15%');
export const fgShade800 = fg(shade800);
export const bgShade800 = bg(shade800);
export const shade900 = constructShade('900', '5%');
export const fgShade900 = fg(shade900);
export const bgShade900 = bg(shade900);

export const error400 = constructError('400', ['8', '82%', '68%']);
export const fgError400 = fg(error400);
export const bgError400 = bg(error400);
export const error500 = constructError('500', ['3', '80%', '54%']);
export const fgError500 = fg(error500);
export const bgError500 = bg(error500);
export const error600 = constructError('600', ['3', '71%', '38%']);
export const fgError600 = fg(error600);
export const bgError600 = bg(error600);

export const primary400 = constructPrimary('400', ['210', '42%', '52%']);
export const fgPrimary400 = fg(primary400);
export const bgPrimary400 = bg(primary400);
export const primary500 = constructPrimary('500', ['210', '47%', '38%']);
export const fgPrimary500 = fg(primary500);
export const bgPrimary500 = bg(primary500);
export const primary600 = constructPrimary('600', ['210', '49%', '30%']);
export const fgPrimary600 = fg(primary600);
export const bgPrimary600 = bg(primary600);

export const foreground = constructHSL(
  'foreground',
  getHSLVariables('foreground'),
  ['210', '70%', '5%']
);
export const fgForeground = fg(foreground);
export const bgForeground = bg(foreground);
export const background = constructHSL(
  'background',
  getHSLVariables('background'),
  ['0', '0%', '100%']
);
export const fgBackground = fg(background);
export const bgBackground = bg(background);

export const shadow = constructHSL(
  'shadow',
  getHSLVariables('shadow'),
  ['230', '70%', '5%'],
  '15%'
);

export const elevate = (z: number = 1) => css`
  box-shadow: var(--elevation-${z}, 0 0.3125rem 0.625rem -0.125rem ${shadow});
`;
