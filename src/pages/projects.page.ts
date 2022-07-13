/**
 * @file      projects.page.ts.ts
 * @brief     The Projects Page.
 *
 * @author    Evan Elias Young
 * @date      2021-09-06
 * @date      2022-02-23
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {mdiCoffee, mdiMicrosoftVisualStudioCode, mdiMusic} from '@mdi/js';
import {
  css,
  CSSResultGroup,
  customElement,
  html,
  LitElement,
} from 'lit-element';
import {Route} from 'lit-element-router';
import {displayFlex} from '../styles/base.styles';
import {
  centerAligned,
  centerJustified,
  endJustified,
  flex1,
  startJustified,
  wrap,
} from '../styles/flex.styles';
import {fgPrimary500} from '../styles/wl.styles';
import {mediaSM} from '../styles/app.styles';
import {
  ILinkInfo,
  IProjectInfo,
  IStackInfo,
} from '../models/interfaces/projects.interfaces';

import 'weightless/button';
import 'weightless/text';
import 'weightless/title';
import '../elements/container.element';
import '../elements/icon.element';
import '../lib/components/assist-chip.element';
import '../lib/components/card.element';
import {landingStyles} from '../styles/page.styles';
import {rtcInfo, cgmInfo} from '../data/projects';
import {mediumComponentRadius} from '../lib/styles/shapes';

@customElement('app-projects-page')
export default class ProjectsPageElement extends LitElement {
  //#region Static Members
  static route: Route & {display: string} = {
    name: 'projects',
    pattern: 'projects',
    display: 'Projects',
  };

  static styles: CSSResultGroup = [
    ...landingStyles,
    css`
      #project-card-container {
        ${displayFlex} ${wrap};
        grid-gap: var(--eey-card-gap, 0.5rem);
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    `,
    css`
      a {
        ${fgPrimary500};
      }
    `,
    css`
      section {
        margin-bottom: 1rem;
      }
    `,
    css`
      .stack-link {
        ${displayFlex} ${centerJustified} ${flex1};
        flex-direction: column;
      }
    `,
    css`
      .stack {
        ${displayFlex} ${centerAligned} ${startJustified} ${wrap} ${flex1};
        gap: 0.5rem;
        margin: 1rem 0;
      }
    `,
    css`
      .links {
        ${displayFlex} ${centerJustified} ${wrap} ${flex1};
        align-items: end;
        gap: 0.5rem 2rem;
      }
      .links app-icon {
        margin: 0 0.5rem 0 0;
      }
    `,
    css`
      eey-card {
        ${flex1}
      }
      eey-card img {
        ${mediumComponentRadius}
        max-width: 100%;
      }
    `,
    mediaSM(
      css`
        .links {
          ${endJustified}
        }
      `
    ),
  ];
  //#endregion

  //#region Private Methods
  #renderStack = (stack: IStackInfo[]) => html` <div class="stack">
    ${stack.map(
      ({icon, name}) => html`
        <eey-assist-chip>
          <app-icon slot="icon" icon="${icon}" color="shade"></app-icon>
          <wl-title slot="text" level="5">${name}</wl-title>
        </eey-assist-chip>
      `
    )}
  </div>`;
  #renderLinks = (links: ILinkInfo[]) => html`
    <div class="links">
      ${links.map(
        ({icon, name, href}) => html`
          <a href="${href}">
            <wl-button>
              <app-icon icon="${icon}"></app-icon>
              <span>${name}</span>
            </wl-button>
          </a>
        `
      )}
    </div>
  `;
  #renderProject = ({stack, links}: IProjectInfo) => html`
    ${this.#renderStack(stack)} ${this.#renderLinks(links)}
  `;
  //#endregion

  //#region Render
  protected render = () => html`
    <app-container id="landing-container" centered landing>
      <div>
        <app-icon
          class="flyin over"
          style="--flyin: 0;"
          icon="${mdiCoffee}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin over"
          style="--flyin: 1;"
          icon="${mdiMicrosoftVisualStudioCode}"
          color="primary"
        ></app-icon>
        <app-icon
          class="flyin over"
          style="--flyin: 2;"
          icon="${mdiMusic}"
          color="primary"
        ></app-icon>
      </div>
      <wl-text size="large" class="flyin" style="--flyin-time: 1s; --flyin: 4;">
        I have an insatiable desire to drink coffee and write code
      </wl-text>
    </app-container>

    <app-container>
      <wl-title level="1">Web Applications</wl-title>

      <section id="project-card-container">
        <eey-card>
          <img slot="image" src="/assets/images/projects/rtc.jpg" />
          <wl-title slot="headline" level="2">Real Time Communicator</wl-title>
          <wl-title slot="subhead" level="4"> ... </wl-title>
          <wl-text slot="text">
            Since mid-2020, I've worked on a web application that helps teams be
            more effective in remote-work. The web application provides
            instant-on reliable video conferencing for up to 50 participants, a
            side-bar showcasing coworker location, and a guest experience for
            visitors. The real-time floor plan empowers interactions among
            previously distributed team members.
          </wl-text>
          <div slot="button" class="stack-link">
            ${this.#renderProject(rtcInfo)}
          </div>
        </eey-card>

        <eey-card>
          <img slot="image" src="/assets/images/projects/cgm.jpg" />
          <wl-title slot="headline" level="2">
            Continuous Glucose Monitor</wl-title
          >
          <wl-title slot="subhead" level="4"> ... </wl-title>
          <wl-text slot="text">
            Since early-2020, I've been working on an open-source web
            application which provides real-time access to blood glucose
            information. The web application provides a reliable system for
            entering and tracking carbohydrates, insulin, and correction
            boluses. I highly recommend the open-source GitHub repo with
            instructions for setup!
          </wl-text>
          <div slot="button" class="stack-link">
            ${this.#renderProject(cgmInfo)}
          </div>
        </eey-card>
      </section>
    </app-container>
  `;
  //#endregion
}
