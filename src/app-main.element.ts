/**
 * @file      app-main.element.ts
 * @brief     The main point of entry into the app.
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
  css,
  property,
  CSSResult,
} from 'lit-element';
import ThemeService from './services/theme.service';
import Theme from './models/enums/theme.enum';

import './elements/header.element';
import './app-router.element';

@customElement('app-main')
export default class AppMainElement extends LitElement {
  //#region Static Members
  static styles: CSSResult = css`
    :host {
      --nav-height: 4rem;
    }
  `;
  //#endregion

  //#region Services
  #themeService: ThemeService = new ThemeService();
  //#endregion

  //#region Properties
  @property({type: String}) route = 'index';
  @property({type: String}) theme: Theme = this.#themeService.theme;
  //#endregion

  //#region Lit Events
  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    this.#themeService.apply();
  }
  //#endregion

  //#region Events
  #$themeChange(): void {
    this.theme = this.#themeService.next();
  }

  #$routeChange($e: CustomEvent<string>): void {
    this.route = $e.detail;
  }
  //#endregion

  //#region Render
  protected render = () => html`
    <app-header
      route="${this.route}"
      theme="${this.theme}"
      @next-theme="${this.#$themeChange}"
    ></app-header>
    <app-router
      route="${this.route}"
      @route-change="${this.#$routeChange}"
    ></app-router>
  `;
  //#endregion
}
