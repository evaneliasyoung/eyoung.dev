/**
 * @file      card.element.ts
 * @brief     Card component.
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
  property,
} from 'lit-element';
import {elevate, shade500} from '../../styles/wl.styles';
import {mediumComponentRadius} from '../styles/shapes';

export type CardType = 'elevated' | 'filled' | 'outlined';

@customElement('eey-card')
export default class CardElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      :host {
        ${mediumComponentRadius}
        background: var(--card-bg,hsl(var(--background,var(--background-hue,0),var(--background-saturation,0%),var(--background-lightness,100%))));
        transition: var(
          --card-transition,
          box-shadow var(--transition-duration-fast, 0.12s)
            var(--transition-timing-function-ease, ease)
        );
        max-width: 100%;
        overflow: hidden;
        ${elevate()}
      }
      :host([type='outlined']) {
        outline: 1px solid ${shade500};
      }
    `,
    css`
      :host,
      .wrapper {
        display: flex;
        flex-direction: column;
      }
    `,
    css`
      .wrapper {
        padding: 0.5rem var(--eey-card-padding-xy, 1rem);
        flex: 1 1 0%;
      }
    `,
  ];
  //#endregion

  //#region Properties
  @property({type: String}) type: CardType = 'elevated';
  //#endregion

  //#region Render
  protected render = () =>
    html`
      <slot name="image"></slot>
      <div class="wrapper">
        <slot name="headline"></slot>
        <slot name="subhead"></slot>
        <slot name="text"></slot>
        <slot name="button"></slot>
      </div>
    `;
  //#endregion
}
