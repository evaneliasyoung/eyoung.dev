/**
 * @file      app-router.element.ts
 * @brief     Handles all routes for the app.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-13
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {LitElement, html, property, customElement} from 'lit-element';
import {Route, router, Routes} from 'lit-element-router';

import './app-route.element';
import IndexPageElement from './pages/index.page';
import MusicPageElement from './pages/music.page';
import NotFoundPageElement from './pages/not-found.page';
import ProjectsPageElement from './pages/projects.page';
import ResumePageElement from './pages/resume.page';
import ToolsColorsPageElement from './pages/tools/colors.page';

@customElement('app-router')
export default class AppRouterElement extends router(LitElement) {
  //#region Static Members
  static get publicRoutes(): (Route & {display: string})[] {
    return [
      IndexPageElement.route,
      MusicPageElement.route,
      ProjectsPageElement.route,
      ResumePageElement.route,
    ];
  }

  static get routes(): Routes {
    return [
      ...this.publicRoutes,
      ToolsColorsPageElement.route,
      NotFoundPageElement.route,
    ];
  }
  //#endregion

  //#region Properties
  @property({type: String}) route!: string;
  @property({type: Object}) params!: object;
  @property({type: Object}) query!: object;
  //#endregion

  //#region Lit Events
  protected router(
    route: string,
    params: object,
    query: object,
    _data: unknown
  ): void {
    Object.assign(this, {route, params, query});
    this.dispatchEvent(new CustomEvent('route-change', {detail: route}));
  }
  //#endregion

  //#region Render
  protected render = () => html`
    <app-route active-route="${this.route}">
      <app-index-page route="index"></app-index-page>
      <app-music-page route="music"></app-music-page>
      <app-projects-page route="projects"></app-projects-page>
      <app-tools-colors-page route="tools-colors"></app-tools-colors-page>
      <app-resume-page route="resume"></app-resume-page>
      <app-not-found-page route="not-found"></app-not-found-page>
    </app-route>
  `;
  //#endregion
}
