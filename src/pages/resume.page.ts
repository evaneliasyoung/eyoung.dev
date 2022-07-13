/**
 * @file      resume.page.ts
 * @brief     The Resume Page.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2022-02-23
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {
  LitElement,
  html,
  customElement,
  CSSResultGroup,
  css,
} from 'lit-element';
import {Route} from 'lit-element-router';
import {mdiSchool, mdiBriefcase, mdiHumanGreeting} from '@mdi/js';
import {mediaSM} from '../styles/app.styles';
import {displayFlex, displayGrid, noWrap} from '../styles/base.styles';
import {wrap} from '../styles/flex.styles';
import {IEducation, IExperience} from '../models/interfaces/resume.interfaces';
import {education, experiences, recognitions} from '../data/resume';

import 'weightless/title';
import 'weightless/text';
import '../elements/container.element';
import {landingStyles} from '../styles/page.styles';

//#region Data
const SECTION_LEVEL = 2 as const;
const INNER_LEVEL = 3 as const;
//#endregion

@customElement('app-resume-page')
export default class ResumePageElement extends LitElement {
  //#region Static Members
  static route: Route & {display: string} = {
    name: 'resume',
    pattern: 'resume',
    display: 'Resume',
  };

  static styles: CSSResultGroup = [
    ...landingStyles,
    css`
      wl-title,
      wl-text {
        margin-bottom: 0;
      }
    `,
    css`
      #resume {
        ${displayGrid}
        grid-template-columns: auto;
        grid-column-gap: 2rem;
      }
    `,
    css`
      .row {
        column-gap: 2rem;
      }
    `,
    css`
      .trow {
        column-gap: 1.5rem;
      }
    `,
    css`
      .row,
      .trow {
        ${displayFlex} ${wrap}
      }
    `,
    css`
      .row wl-title,
      .row wl-text,
      .trow wl-title,
      .trow wl-text {
        ${noWrap}
      }
    `,
    css`
      .trow > *,
      .l {
        flex: 1;
      }
    `,
    css`
      .quad.row .b {
        font-style: italic;
      }
    `,
    css`
      section {
        margin-bottom: 1rem;
      }
    `,
    mediaSM(
      css`
        #resume {
          grid-template-columns: min-content auto;
        }
      `
    ),
  ];
  //#endregion

  //#region Private Methods
  #renderQuad = (ul: string, ur: string, bl: string, br: string) => html`
    <div class="quad row">
      <wl-title class="u l" level="${INNER_LEVEL}">${ul}</wl-title>
      <wl-title class="u r" level="${INNER_LEVEL}">${ur}</wl-title>
    </div>
    <div class="quad row">
      <wl-text class="b l">${bl}</wl-text>
      <wl-text class="b r">${br}</wl-text>
    </div>
  `;
  #renderEquation = ({edu, grad, deg, gpa}: IEducation) =>
    this.#renderQuad(edu, grad, deg, `GPA: ${gpa} / 4.00`);
  #renderExperience = ({work, loc, title, date}: IExperience) =>
    this.#renderQuad(work, loc, title, date);
  //#region

  //#region Render
  protected render = () => html`
    <app-container id="landing-container" centered landing>
      <div>
        <app-icon
          class="flyin over"
          style="--flyin: 0;"
          icon="${mdiSchool}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin over"
          style="--flyin: 1;"
          icon="${mdiHumanGreeting}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin over"
          style="--flyin: 2;"
          icon="${mdiBriefcase}"
          color="primary"
        ></app-icon>
      </div>
      <wl-text size="large" class="flyin" style="--flyin-time: 1s; --flyin: 4;">
        I'm currently a university student, but my résumé is below
      </wl-text>
    </app-container>

    <app-container id="resume-container">
      <div id="resume">
        <wl-title level="${SECTION_LEVEL}">Education</wl-title>
        <section>
          ${this.#renderEquation(education)}
          ${education.minor
            ? html`<wl-text>Minor: ${education.minor.join(', ')}</wl-text>`
            : html``}
        </section>

        <wl-title level="${SECTION_LEVEL}">Experience</wl-title>
        <section>
          ${experiences.map(
            (experience: IExperience) => html`
              <section>
                ${this.#renderExperience(experience)}
                <wl-text>
                  ${experience.bullets.map(item => html`<li>${item}</li>`)}
                </wl-text>
              </section>
            `
          )}
        </section>

        <wl-title level="${SECTION_LEVEL}">Recognition</wl-title>
        <section>
          ${recognitions.map(
            ({name, date}) => html`
              <div class="row">
                <wl-text class="u l">${name}</wl-text>
                <wl-text class="u r">${date}</wl-text>
              </div>
            `
          )}
        </section>

        <wl-title level="${SECTION_LEVEL}">Hobbies</wl-title>
        <section class="trow">
          <wl-text>Music Production</wl-text>
          <wl-text>Hobby Programming</wl-text>
          <wl-text>Home Server Admin</wl-text>
        </section>

        <wl-title level="${SECTION_LEVEL}">Skills</wl-title>
        <section>
          <div class="trow">
            <wl-text>C, C++, C# Development</wl-text>
            <wl-text>NodeJS, Typescript</wl-text>
            <wl-text>Python Programming</wl-text>
          </div>
          <div class="trow">
            <wl-text>Unix/Linux Shell</wl-text>
            <wl-text>Angular, Lit, Express</wl-text>
            <wl-text>Spanish Biliteracy</wl-text>
          </div>
        </section>
      </div>
    </app-container>
  `;
  //#endregion
}
