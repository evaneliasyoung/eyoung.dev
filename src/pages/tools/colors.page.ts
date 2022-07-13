/**
 * @file      colors.page.ts
 * @brief     The Tools Colors Page.
 *
 * @author    Evan Elias Young
 * @date      2022-02-25
 * @date      2022-03-19
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

import {
  css,
  CSSResultGroup,
  customElement,
  html,
  LitElement,
} from 'lit-element';
import {Route} from 'lit-element-router';
import {Slider} from 'weightless';
import Color from 'color';
import {HEX_MATCH, round} from '../../utils';

import 'weightless/title';
import 'weightless/text';
import 'weightless/textfield';
import 'weightless/label';
import 'weightless/slider';
import '../../elements/container.element';
import '../../lib/components/card.element';
import '../../lib/components/color-strip.element';
import {displayFlex, displayGrid} from '../../styles/base.styles';
import {centerJustified} from '../../styles/flex.styles';
import Storable, {StringConverter} from '../../models/models/storable.model';

@customElement('app-tools-colors-page')
export default class ToolsColorsPageElement extends LitElement {
  //#region Static Members
  static route: Route & {display: string} = {
    name: 'tools-colors',
    pattern: 'tools/colors',
    display: 'Color Tools',
  };

  static styles: CSSResultGroup = [
    css`
      #form {
        ${displayGrid} ${centerJustified} grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, 24rem);
      }
    `,
    css`
      .text.row {
        ${displayFlex};
        gap: 1rem;
      }
      .text.row > wl-textfield {
        flex-grow: 1;
      }
    `,
    css`
      section {
        margin-bottom: 1rem;
      }
    `,
  ];
  //#endregion

  //#region Readonly Properties
  readonly FALLBACK_COLOR: string = '#306191';
  //#endregion

  //#region Properties
  get hex() {
    return this.color.hex().substring(1).padStart(6, '0');
  }
  get oct() {
    return this.dec.toString(8).padStart(9, '0');
  }
  get dec() {
    return (
      (this.color.red() << 0x10) +
      (this.color.green() << 0x08) +
      this.color.blue()
    );
  }
  //#endregion

  //#region Private Members
  #color = new Storable('color', StringConverter, this.FALLBACK_COLOR);
  //#endregion

  //#region Members
  color: Color = Color(this.#color.val ?? this.FALLBACK_COLOR, 'hex');
  //#endregion

  //#region Events
  $inputColor($e: InputEvent) {
    const {data} = $e;
    if (data === undefined || data === null) return;
    this.updateColor(this.color.hex(data));
  }

  $inputHex($e: Event) {
    const {target} = $e;
    const {value} = target as HTMLInputElement;
    const [match] = value.match(HEX_MATCH) ?? [undefined];
    if (match) this.updateColor(this.color.hex(`#${match}`));
  }

  $inputDecimal($e: Event) {
    const {target} = $e;
    const {valueAsNumber} = target as HTMLInputElement;
    this.updateColor(
      this.color.rgb(
        ...[
          (valueAsNumber & 0xff0000) >> 0o20,
          (valueAsNumber & 0x00ff00) >> 0o10,
          valueAsNumber & 0x0000ff,
        ]
      )
    );
  }

  $inputColorSegment($e: Event) {
    const {attr, value} = this.getAttrAndValue(
      $e.target as HTMLInputElement | Slider
    );
    if (attr === undefined) return;
    const merge = this.color[attr].bind(this.color) as (
      value: unknown
    ) => Color;
    this.updateColor(merge(value));
  }
  //#endregion

  //#region Methods
  getAttrAndValue(target: HTMLInputElement | Slider): {
    attr: keyof Color | undefined;
    value: number;
  } {
    return {
      attr: ('attr' in target.dataset
        ? target.dataset.attr
        : target.parentElement
        ? target.parentElement.dataset.attr
        : undefined) as keyof Color | undefined,
      value:
        'valueAsNumber' in target
          ? (target as HTMLInputElement).valueAsNumber
          : parseInt((target as Slider).value),
    };
  }

  updateColor(newColor: Color, push = true) {
    const oldColor = this.color;
    this.color = newColor;
    this.#color.val = newColor.hex();
    if (push) this.requestUpdate('color', oldColor);
  }
  //#endregion

  //#region Render
  #renderTextInput = (
    key: keyof Color,
    name: string,
    max = 100
  ) => html`<wl-textfield
    type="number"
    min="0"
    max="${max}"
    @input="${this.$inputColorSegment}"
    data-attr="${key}"
    value="${round((this.color[key] as () => number)())}"
    label="${name}"
  >
  </wl-textfield>`;
  #renderTextInputs = (inputs: [keyof Color, string, number?][]) =>
    html`<div class="text row">
      ${inputs.map(args => this.#renderTextInput(...args))}
    </div>`;

  #renderSliderInput = (
    key: keyof Color,
    name: string,
    max = 100
  ) => html`<wl-slider
    min="0"
    max="${max}"
    @input="${this.$inputColorSegment}"
    data-attr="${key}"
    value="${round((this.color[key] as () => number)())}"
    label="${name}"
  >
  </wl-slider>`;
  #renderSliderInputs = (inputs: [keyof Color, string, number?][]) =>
    html`<div class="slider column">
      ${inputs.map(args => this.#renderSliderInput(...args))}
    </div>`;

  #renderBothInputs = (inputs: [keyof Color, string, number?][]) =>
    html`${this.#renderTextInputs(inputs)}${this.#renderSliderInputs(inputs)}`;

  #renderInputSet = (name: string, inputs: [keyof Color, string, number?][]) =>
    html`<eey-card>
      <wl-title slot="headline" level="3">${name}</wl-title>
      <div slot="text">${this.#renderBothInputs(inputs)}</div>
    </eey-card>`;

  protected render = () => html`
    <app-container>
      <eey-color-strip allowInput="${true}" color="${this.color.hex()}" name="${this.color.keyword()}" @input="${
    this.$inputColor
  }"></eey-color-strip>
      <section id="form">
        ${this.#renderInputSet('RGB', [
          ['red', 'Red', 255],
          ['green', 'Green', 255],
          ['blue', 'Blue', 255],
        ])}
        ${this.#renderInputSet('CMYK', [
          ['cyan', 'Cyan'],
          ['magenta', 'Magenta'],
          ['yellow', 'Yellow'],
          ['black', 'Black'],
        ])}
        ${this.#renderInputSet('HSL', [
          ['hue', 'Hue', 360],
          ['saturationl', 'Saturation'],
          ['lightness', 'Lightness'],
        ])}
        ${this.#renderInputSet('HSV', [
          ['hue', 'Hue', 360],
          ['saturationv', 'Saturation'],
          ['value', 'Value'],
        ])}
        ${this.#renderInputSet('HWB', [
          ['hue', 'Hue', 360],
          ['white', 'White'],
          ['wblack', 'Black'],
        ])}
        ${this.#renderInputSet('HCG', [
          ['hue', 'Hue', 360],
          ['chroma', 'Chroma'],
          ['gray', 'Grey'],
        ])}
        <eey-card>
          <wl-title slot="headline" level="2">System</wl-title>
          <div slot="text">
            <div class="text row">
              <wl-textfield
                type="text"
                @input="${this.$inputHex}"
                value="${this.hex}"
                label="Hex"
              ></wl-textfield>
              <wl-textfield
                type="number"
                min="0"
                max="16777215"
                @input="${this.$inputDecimal}"
                value="${this.dec}"
                label="Decimal"
              ></wl-textfield>
            </div>
            <div class="slider column">
              <wl-slider
                min="0"
                max="16777215"
                @input="${this.$inputDecimal}"
                value="${this.dec}"
                label="Decimal"
              ></wl-slider>
            </div>
          </div>
        </eey-card>
        ${this.#renderInputSet('XYZ', [
          ['x', 'X'],
          ['y', 'Y'],
          ['z', 'Z'],
        ])}
        ${this.#renderInputSet('LAB', [
          ['l', 'L'],
          ['a', 'A'],
          ['b', 'B'],
        ])}
      </section>

      <section>
        <wl-title level="1">Brand Palettes</wl-title level="1">
        <eey-color-strip showHex="true" name="Google" colors="${[
          '#4285F4',
          '#34A853',
          '#FBBC05',
          '#EA4335',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" name="Microsoft" colors="${[
          '#F25022',
          '#7FBA00',
          '#00A4EF',
          '#FFB900',
          '#737373',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" color="#1DA1F2" name="Twitter Blue"></eey-color-strip>
        <eey-color-strip showHex="true" color="#A2AAAD" name="Apple Gray"></eey-color-strip>
        <eey-color-strip showHex="true" color="#5865F2" name="Discord Blurple"></eey-color-strip>
      </section>

      <section>
        <wl-title level="1">Software Palettes</wl-title level="1">
        <eey-color-strip showHex="true" name="Access" colors="${[
          '#881421',
          '#AF2031',
          '#C94F60',
          '#E08095',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" name="Excel" colors="${[
          '#185C37',
          '#107C41',
          '#21A366',
          '#33C481',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" name="OneNote" colors="${[
          '#7719AA',
          '#9332BF',
          '#AE4BD5',
          '#CA64EA',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" name="Outlook" colors="${[
          '#0567B1',
          '#0077D4',
          '#26A5E9',
          '#55DAFF',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" name="Powerpoint" colors="${[
          '#D35230',
          '#ED6C47',
          '#FF8F6B',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" name="Publisher" colors="${[
          '#038387',
          '#1A9BA1',
          '#37C6D0',
        ]}"></eey-color-strip>
        <eey-color-strip showHex="true" name="Word" colors="${[
          '#103F91',
          '#185ABD',
          '#2B7CD3',
          '#41A5EE',
        ]}"></eey-color-strip>
      </section>
    </app-container>
  `;
  //#endregion
}
