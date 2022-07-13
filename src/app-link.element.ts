/**
 * @file      app-link.element.ts
 * @brief     Handles navigation within the app.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-07
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {LitElement, html, property, customElement} from 'lit-element';
import {navigator} from 'lit-element-router';

@customElement('app-link')
export default class AppLinkElement extends navigator(LitElement) {
  //#region Properties
  @property({type: String}) href = '';
  @property({type: Boolean}) active = false;
  //#endregion

  //#region Events
  #$click($e: Event): void {
    $e.preventDefault();
    if (this.active) return;
    this.navigate(this.href);
    document.documentElement.scrollTop = 0;
  }
  //#endregion

  //#region Render
  protected render = () => html`
    <a href="${this.href}" @click="${this.#$click}" style="color: unset;">
      <slot></slot>
    </a>
  `;
  //#endregion
}
