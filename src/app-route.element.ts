/**
 * @file      app-route.element.ts
 * @brief     Handles activating a route within the app.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-07
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {LitElement, html, customElement} from 'lit-element';
import {outlet} from 'lit-element-router';

@customElement('app-route')
export default class AppRouteElement extends outlet(LitElement) {
  //#region Render
  protected render = () => html`<slot></slot>`;
  //#endregion
}
