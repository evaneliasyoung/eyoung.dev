/**
 * @file      container.element.ts
 * @brief     Handles padding and margins for a main app content container.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-29
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {customElement, LitElement, html, css} from 'lit-element';
import {
  mediaLG,
  mediaMD,
  mediaSM,
  mediaXL,
  mediaXXL,
} from '../styles/app.styles';
import {
  centerText,
  displayBlock,
  displayFlex,
  magicMargin,
} from '../styles/base.styles';
import {centerAligned, centerJustified} from '../styles/flex.styles';

@customElement('app-container')
export default class ContainerElement extends LitElement {
  //#region Static Members
  static styles = [
    css`
      :host {
        padding: var(--container-padding, 6.25rem 0.75rem);
        ${displayBlock}
      }
    `,
    css`
      :host([centered]) {
        ${displayFlex} ${centerAligned} ${centerJustified}
      }
    `,
    css`
      :host([landing]) {
        height: calc(100vh - var(--nav-height) - 12.5rem);
        ${centerText}
      }
    `,
    css`
      .container {
        ${magicMargin}
      }
    `,
    mediaSM(
      css`
        .container {
          max-width: var(--container-max-width, 33.75rem);
        }
      `
    ),
    mediaMD(
      css`
        .container {
          max-width: var(--container-max-width, 45rem);
        }
      `
    ),
    mediaLG(
      css`
        .container {
          max-width: var(--container-max-width, 60rem);
        }
      `
    ),
    mediaXL(
      css`
        .container {
          max-width: var(--container-max-width, 71.25rem);
        }
      `
    ),
    mediaXXL(
      css`
        .container {
          max-width: var(--container-max-width, 77.5rem);
        }
      `
    ),
  ];
  //#endregion

  //#region Render
  protected render = () => html` <div class="container">
    <slot></slot>
  </div>`;
  //#endregion
}
