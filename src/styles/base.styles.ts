/**
 * @file      base.styles.ts
 * @brief     Styles used anywhere.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-16
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {unsafeCSS} from 'lit-element';

//#region Position
export const relative = unsafeCSS`position: relative;`;
export const fixed = unsafeCSS`position: fixed;`;
export const absolute = unsafeCSS`position: absolute;`;
//#endregion

//#region Margin
export const magicMargin = unsafeCSS`margin: 0px auto;`;
//#endregion

//#region Display
export const displayInline = unsafeCSS`display: inline;`;
export const displayBlock = unsafeCSS`display: block;`;
export const displayFlex = unsafeCSS`display: flex;`;
export const displayGrid = unsafeCSS`display: grid;`;
export const displayInlineBlock = unsafeCSS`display: inline-block;`;
export const displayNone = unsafeCSS`display: none;`;
export const displayInitial = unsafeCSS`display: initial;`;
// #endregion

//#region Text Align
export const leftText = unsafeCSS`text-align: left`;
export const centerText = unsafeCSS`text-align: center`;
//#endregion

//#region White Space
export const noWrap = unsafeCSS`white-space: nowrap`;
//#endregion
