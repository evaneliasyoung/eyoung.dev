/**
 * @file      color-strip.element.ts
 * @brief     Color strip component.
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

import 'weightless/title';

@customElement('eey-color-strip')
export default class ColorStripElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      :host {
        height: 4rem;
        border-radius: var(--eey-shape-small, 0.625rem);
        display: flex;
        align-items: end;
        margin-bottom: 0.75rem;
        overflow: hidden;
      }
      :host > wl-title {
        position: absolute;
        margin: 0;
        padding-left: 0.5rem;
      }
    `,
    css`
      #strip-input {
        margin: 0 -2px 0 0;
        padding: 0;
        opacity: 0;
        width: 0;
        height: 0;
      }
    `,
    css`
      .stripe {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 0px 0.5rem 0.5rem 0px;
      }
    `,
  ];
  //#endregion

  //#region Readonly Properties
  readonly FALLBACK_COLOR: string = '#306191';
  //#endregion

  //#region Properties
  @property({type: Boolean}) allowInput: boolean = false;
  @property({type: Boolean}) showHex: boolean = false;
  @property({type: String}) name?: string;
  @property({type: String}) color?: string;
  @property({type: String}) colors?: string;

  get displayColors(): string[] {
    return this.colors?.split(',') ?? [this.color ?? this.FALLBACK_COLOR];
  }

  get stripInput(): HTMLInputElement {
    return this.shadowRoot!.getElementById('strip-input')! as HTMLInputElement;
  }
  //#endregion

  //#region Events
  $inputColor($e: InputEvent) {
    this.dispatchEvent(new InputEvent($e.type, {data: this.stripInput.value}));
  }
  $clickStrip() {
    if (this.allowInput) this.stripInput.click();
  }
  //#endregion

  //#region Constructor
  constructor() {
    super();
    this.addEventListener('click', this.$clickStrip);
  }
  //#endregion

  //#region Render
  #renderInput = () => html`<input
    id="strip-input"
    type="color"
    @input="${this.$inputColor}"
  />`;
  #renderColor = (color: string) =>
    html`<div class="stripe" style="background-color: ${color};">
      ${this.showHex ? color : ''}
    </div>`;

  protected render = () =>
    html` ${this.allowInput ? this.#renderInput() : ``}
    ${this.name !== undefined
      ? html`<wl-title level="1">${this.name}</wl-title>`
      : ``}
    ${this.displayColors.map(this.#renderColor)}`;
  //#endregion
}
