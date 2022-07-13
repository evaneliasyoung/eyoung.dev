/**
 * @file      header.element.ts
 * @brief     The main app header.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-12-02
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {
  html,
  customElement,
  css,
  property,
  CSSResultGroup,
  PropertyValues,
  LitElement,
} from 'lit-element';
import {displayFlex} from '../styles/base.styles';
import {fgPrimary500, fgShade400} from '../styles/wl.styles';
import {mdiBrightness2, mdiBrightness3, mdiBrightness7} from '@mdi/js';
import Theme from '../models/enums/theme.enum';

import 'weightless/nav';
import 'weightless/button';
import 'weightless/title';
import 'weightless/tab';
import 'weightless/tab-group';
import 'weightless/label';
import './icon.element';
import '../app-link.element';
import AppRouterElement from '../app-router.element';

@customElement('app-header')
export default class HeaderElement extends LitElement {
  //#region Static Members
  static styles: CSSResultGroup = [
    css`
      wl-nav {
        ${displayFlex};
        gap: 1rem;
      }
    `,
    css`
      wl-nav wl-label {
        cursor: pointer;
      }
    `,
    css`
      wl-nav app-link {
        ${fgShade400}
        margin: 0 1.5rem 0 0;
        border-bottom: 0.125rem solid transparent;
        transition: color, border-color, 150ms;
      }
    `,
    css`
      wl-nav app-link[active] wl-label {
        ${fgPrimary500}
      }
    `,
  ];
  //#endregion

  //#region Properties
  @property({type: String})
  get themeIcon(): string {
    switch (this.theme) {
      case Theme.LIGHT:
        return mdiBrightness7;
      case Theme.DARK:
        return mdiBrightness3;
      case Theme.DARKER:
        return mdiBrightness2;
    }
  }
  @property({type: String}) theme!: Theme;
  @property({type: String}) route!: string;
  //#endregion

  //#region Private Methods
  #patchLinks(): void {
    const links = this.shadowRoot?.querySelectorAll('[route]');
    if (!links) return;

    const removeActive = (el: Element) => el.removeAttribute('active');
    const addActive = (el: Element) => el.setAttribute('active', '');
    const decider = (el: Element) =>
      el.getAttribute('route') === this.route ? addActive : removeActive;
    const handleActive = (el: Element) => decider(el).call(this, el);
    links.forEach(handleActive);
  }
  //#endregion

  //#region Lit Events
  protected update(_changedProperties: PropertyValues): void {
    super.update(_changedProperties);
    this.#patchLinks();
  }
  //#endregion

  //#region Events
  #$themeClick(): void {
    this.dispatchEvent(new CustomEvent('next-theme'));
  }
  //#endregion

  //#region Render
  protected render = () => html` <wl-nav fixed role="navigation">
    <wl-title slot="title">Evan Elias Young</wl-title>

    <div slot="right">
      ${AppRouterElement.publicRoutes.map(
        ({name, pattern, display}) => html`
          <app-link
            href=${`/${pattern}`}
            route=${name}
            active=${name === this.route}
          >
            <wl-label>${display}</wl-label>
          </app-link>
        `
      )}

      <wl-button
        id="theme-selector"
        aria-label="Open theme"
        fab
        role="button"
        aria-disabled="false"
        @click=${this.#$themeClick}
      >
        <app-icon icon="${this.themeIcon}"></app-icon>
      </wl-button>
    </div>
  </wl-nav>`;
  //#endregion
}
