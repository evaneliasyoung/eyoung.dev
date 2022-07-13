/**
 * @file      flex.styles.ts
 * @brief     Styles for flex.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-18
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {unsafeCSS} from 'lit-element';

//#region Direction
export const horizontal = unsafeCSS`flex-direction: row;`;
export const vertical = unsafeCSS`flex-direction: column;`;
export const horizontalReverse = unsafeCSS`flex-direction: row-reverse;`;
//#endregion

//#region Wrap
export const wrap = unsafeCSS`flex-wrap: wrap;`;
export const noWrap = unsafeCSS`flex-wrap: nowrap;`;
//#endregion

//#region Align Items
export const centerAligned = unsafeCSS`align-items: center;`;
//#endregion

//#region Justify Content
export const startJustified = unsafeCSS`justify-content: flex-start;`;
export const endJustified = unsafeCSS`justify-content: flex-end;`;
export const centerJustified = unsafeCSS`justify-content: center;`;
export const evenlyJustified = unsafeCSS`justify-content: space-evenly;`;
export const justified = unsafeCSS`justify-content: space-between;`;
//#endregion

//#region Flex Constants
export const flex1 = unsafeCSS`flex: 1;`;
export const flex2 = unsafeCSS`flex: 2;`;
export const flex3 = unsafeCSS`flex: 3;`;
export const flex4 = unsafeCSS`flex: 4;`;
export const flex5 = unsafeCSS`flex: 5;`;
export const flex6 = unsafeCSS`flex: 6;`;
export const flex7 = unsafeCSS`flex: 7;`;
export const flex8 = unsafeCSS`flex: 8;`;
export const flex9 = unsafeCSS`flex: 9;`;
export const flex10 = unsafeCSS`flex: 10;`;
export const flex11 = unsafeCSS`flex: 11;`;
export const flex12 = unsafeCSS`flex: 12;`;
//#endregion
