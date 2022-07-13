/**
 * @file      timeline.element.ts
 * @brief     The timeline element.
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
import {mediaMD} from '../styles/app.styles';
import {absolute, displayBlock, relative} from '../styles/base.styles';
import {bgShade200} from '../styles/wl.styles';

@customElement('app-timeline')
export default class TimelineElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      :host {
        ${displayBlock} ${relative} padding: 2.5em 0;
      }
    `,
    css`
      :host::before {
        ${absolute}
        ${bgShade200}
      content: '';
        top: 0;
        left: calc((var(--marker-size, 1rem) - var(--track-width, 2px)) * 0.5);
        height: 100%;
        width: var(--track-width, 2px);
      }
    `,
    mediaMD(
      css`
        :host::before {
          left: calc(50% - var(--track-width, 2px) / 2);
        }
      `
    ),
  ];
  //#endregion

  //#region Render
  protected render = () => html`<slot></slot>`;
  //#endregion
}
