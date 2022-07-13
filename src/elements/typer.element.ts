/**
 * @file      typer.element.ts
 * @brief     Types text into an element.
 *
 * @author    Evan Elias Young
 * @date      2021-09-05
 * @date      2021-09-29
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {
  customElement,
  LitElement,
  html,
  css,
  CSSResultGroup,
  property,
} from 'lit-element';
import {displayInlineBlock} from '../styles/base.styles';
import {primary500} from '../styles/wl.styles';
import {timeout} from '../utils';

const NBSP = '\xa0' as const;

@customElement('app-typer')
export default class TyperElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      @keyframes typed-carat {
        to {
          border-right-color: transparent;
        }
      }
    `,
    css`
      :host {
        ${displayInlineBlock}
        border-right-width: var(--typed-width, 0.1em);
        border-right-style: var(--typed-style, solid);
        border-right-color: var(--typed-color, ${primary500});
        animation: typed-carat var(--typed-timing, 750ms) infinite;
      }
    `,
  ];
  //#endregion

  //#region Properties
  @property({type: String}) text = '';
  @property({type: String}) buffer: string = NBSP;
  @property({type: Number}) wait = 250;
  //#endregion

  //#region Lit Events
  connectedCallback(): void {
    super.connectedCallback();
    this.type();
  }
  //#endregion

  //#region Methods
  async type() {
    await timeout(this.wait);

    for (const letter of this.text.replace(' ', NBSP).split('')) {
      this.buffer = (this.buffer === NBSP ? '' : this.buffer) + letter;
      await timeout(this.getInputDelay(letter));
    }
  }

  getInputDelay(char: string) {
    switch (char) {
      case '?':
      case '!':
      case '.':
        return 600;
      case ';':
      case ':':
        return 450;
      case ',':
        return 300;
      case "'":
      case '"':
      case '\\':
      case '/':
      case NBSP:
        return 150;
      default:
        return 75;
    }
  }
  //#endregion

  //#region Render
  protected render = () => html`<slot>${this.buffer}</slot>`;
  //#endregion
}
