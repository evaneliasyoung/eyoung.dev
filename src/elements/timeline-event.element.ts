/**
 * @file      timeline-event.element.ts
 * @brief     The timeline event element.
 *
 * @author    Evan Elias Young
 * @date      2021-09-12
 * @date      2021-09-12
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {
  LitElement,
  css,
  html,
  customElement,
  CSSResultGroup,
} from 'lit-element';
import {mediaMD, square} from '../styles/app.styles';
import {background, bgShade700, fgShade100} from '../styles/wl.styles';
import {absolute, displayFlex, noWrap, relative} from '../styles/base.styles';
import {
  centerAligned,
  centerJustified,
  horizontal,
  horizontalReverse,
} from '../styles/flex.styles';

import '../lib/components/card.element';
import {fabComponentRadius} from '../lib/styles/shapes';

@customElement('app-timeline-event')
export default class TimelineEventElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      :host,
      .nib {
        ${displayFlex} ${relative}
      }
    `,
    css`
      :host {
        margin-bottom: 2rem;
      }
    `,
    css`
      .nib {
        ${centerJustified}
        ${centerAligned}
      box-sizing: border-box;
        flex-shrink: 0;
        ${square('var(--marker-size, 1rem)')}
        ${fabComponentRadius}
        margin-right: calc(var(--marker-size, 1rem) * 0.5);
        border: calc(var(--marker-size, 1rem) / 16 + 2px) solid ${background};
        ${fgShade100}
        ${bgShade700}
      }
    `,
    mediaMD(css`
      :host {
        width: calc(50% + var(--marker-size, 1rem) / 2);
        ${horizontalReverse}
      }
      ::slotted([slot='date']) {
        ${absolute}
        top: calc(var(--marker-size, 1rem) * 0.5);
        ${noWrap}
      }
      :host([reversed]) {
        margin-left: auto;
        ${horizontal}
      }
      :host(:not([reversed])) .nib {
        margin-right: 0;
        margin-left: calc(var(--marker-size, 1rem) * 0.5);
      }
      :host(:not([reversed])) ::slotted([slot='date']) {
        right: calc(-2 * var(--marker-size, 1rem));
        transform: translateX(100%) translateY(-50%);
      }
      :host([reversed]) ::slotted([slot='date']) {
        left: calc(-2 * var(--marker-size, 1rem));
        transform: translateX(-100%) translateY(-50%);
      }
    `),
  ];
  //#endregion

  //#region Render
  protected render = () => html`
    <div class="nib"><slot name="nib"></slot></div>
    <slot name="date"></slot>
    <eey-card>
      <slot name="image" slot="image"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="text" slot="text"></slot>
    </eey-card>
  `;
  //#endregion
}
