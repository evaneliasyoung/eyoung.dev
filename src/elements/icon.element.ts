/**
 * @file      icon.element.ts
 * @brief     Draws a @mdi/js icon into the DOM.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-07
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {
  LitElement,
  html,
  customElement,
  property,
  css,
  CSSResultGroup,
} from 'lit-element';
import {square} from '../styles/app.styles';
import {error500, primary500, shade300} from '../styles/wl.styles';

@customElement('app-icon')
export default class IconElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      svg {
        ${square('var(--icon-size, 24px)')}
      }
    `,
    css`
      :host([color='primary']) {
        --icon-color: ${primary500};
      }
    `,
    css`
      :host([color='error']) {
        --icon-color: ${error500};
      }
    `,
    css`
      :host([color='shade']) {
        --icon-color: ${shade300};
      }
    `,
  ];
  //#endregion

  //#region Properties
  @property({type: String}) icon!: string;
  //#endregion

  //#region Render
  protected render = () => html`
    <svg viewBox="0 0 24 24">
      <path fill="var(--icon-color, currentColor)" d="${this.icon}"></path>
    </svg>
  `;
  //#endregion
}
