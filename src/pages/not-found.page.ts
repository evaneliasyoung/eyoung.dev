/**
 * @file      not-found.page.ts.ts
 * @brief     The 404 Page.
 *
 * @author    Evan Elias Young
 * @date      2021-09-13
 * @date      2022-02-23
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {
  mdiMapMarkerQuestionOutline,
  mdiRobotConfusedOutline,
  mdiSearchWeb,
} from '@mdi/js';
import {CSSResultGroup, customElement, html, LitElement} from 'lit-element';
import {Route} from 'lit-element-router';

import 'weightless/title';
import 'weightless/text';
import '../elements/container.element';
import '../elements/icon.element';
import {landingStyles} from '../styles/page.styles';

@customElement('app-not-found-page')
export default class NotFoundPageElement extends LitElement {
  //#region Static Members
  static route: Route = {name: 'not-found', pattern: '*'};

  static styles: CSSResultGroup = [...landingStyles];
  //#endregion

  //#region Render
  protected render = () => html`
    <app-container id="landing-container" centered landing>
      <div>
        <app-icon
          class="flyin"
          style="--flyin: 0;"
          icon="${mdiSearchWeb}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin"
          style="--flyin: 1;"
          icon="${mdiMapMarkerQuestionOutline}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin"
          style="--flyin: 2;"
          icon="${mdiRobotConfusedOutline}"
          color="primary"
        ></app-icon>
      </div>
      <wl-text size="large" class="flyin" style="--flyin-time: 1s; --flyin: 4;">
        Between my server and I, we can't find whatever it is you're looking
        for...
      </wl-text>
    </app-container>
  `;
  //#endregion
}
