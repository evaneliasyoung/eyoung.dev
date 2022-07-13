/**
 * @file      assist-chip.element.ts
 * @brief     Assist chip component.
 *
 * @author    Evan Elias Young
 * @date      2022-04-22
 * @date      2022-04-22
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

import {
  LitElement,
  css,
  CSSResultGroup,
  customElement,
  html,
} from 'lit-element';
import {shade500} from '../../styles/wl.styles';
import {smallComponentRadius} from '../styles/shapes';

@customElement('eey-assist-chip')
export default class AssistChipElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      :host {
        ${smallComponentRadius}
        height: 2rem;
        border-radius: 0.5rem;
        padding: 0px 1rem 0px 0.5rem;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        outline: 1px solid ${shade500};
      }
    `,
    css`
      ::slotted(*) {
        margin: 0;
      }
      ::slotted([slot='icon']) {
        --icon-size: 18px;
        line-height: 12px;
      }
      ::slotted([slot='text']) {
        line-height: 20px;
        font-size: 14px;
        font-weight: 500;
      }
    `,
  ];
  //#endregion

  //#region Render
  protected render = () =>
    html`
      <slot name="icon"></slot>
      <slot name="text"></slot>
    `;
  //#endregion
}
