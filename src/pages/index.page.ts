/**
 * @file      index.page.ts
 * @brief     The Index Page.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2022-02-23
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {
  html,
  customElement,
  CSSResultGroup,
  css,
  LitElement,
} from 'lit-element';
import {Route} from 'lit-element-router';
import {
  mdiLanguagePython,
  mdiLanguageTypescript,
  mdiGit,
  mdiNodejs,
  mdiMicrosoftWindows,
  mdiGithub,
  mdiTwitter,
  mdiLinkedin,
  mdiAngularjs,
  mdiPolymer,
  mdiDebian,
  mdiLanguageC,
  mdiInstagram,
} from '@mdi/js';
import {
  centerText,
  displayFlex,
  displayGrid,
  leftText,
} from '../styles/base.styles';
import {centerJustified, evenlyJustified, wrap} from '../styles/flex.styles';
import {yyyydlt, renderRange} from '../utils';
import {flyin, mediaSM} from '../styles/app.styles';

import 'weightless/title';
import 'weightless/text';
import 'weightless/card';
import '../elements/container.element';
import '../elements/icon.element';
import '../elements/typer.element';

//#region Data
const technologies: {icon: string; name: string; desc: string}[] = [
  {
    icon: mdiLanguagePython,
    name: 'Python 2 & 3',
    desc: `With more than ${yyyydlt(
      2013
    )} years of experience, I've stood the test of paradigm shifts.`,
  },
  {
    icon: mdiLanguageC,
    name: 'C-Languages',
    desc: `${yyyydlt(
      2015
    )} years of experience, with all C-languages varying in level of abstraction.`,
  },
  {
    icon: mdiLanguageTypescript,
    name: `TypeScript ${renderRange('2', '4')}`,
    desc: `Regarded as my 'language of the future,' an opinion ${yyyydlt(
      2018
    )} years in the making.`,
  },
  {
    icon: mdiNodejs,
    name: 'NodeJS',
    desc: 'Running on every computer in my house, node powers my life in more ways than you know.',
  },
  {
    icon: mdiAngularjs,
    name: 'AngularJS',
    desc: 'My previous favorite framework for web development; very robust with a large community.',
  },
  {
    icon: mdiPolymer,
    name: 'Lit',
    desc: 'My new favorite framework allows for lightweight web-components built for the 21st century.',
  },

  {
    icon: mdiGit,
    name: 'Git (Hub & Lab)',
    desc: "I've been open-sourcing most of my code since 2013. My first project is still public!",
  },
  {
    icon: mdiDebian,
    name: `Debian ${renderRange('7', '11')}`,
    desc: "The father of all, Debian has been my go-to distribution for it's large community and support.",
  },
  {
    icon: mdiMicrosoftWindows,
    name: `Windows ${renderRange('XP', '11')}`,
    desc: "I've been using Windows since before I learned to read and write. Enough said.",
  },
];

const socials: {icon: string; href: string; name: string}[] = [
  {
    icon: mdiTwitter,
    href: 'https://twitter.com/evaneliasyoung',
    name: '@evaneliasyoung',
  },
  {
    icon: mdiGithub,
    href: 'https://github.com/evaneliasyoung',
    name: '/evaneliasyoung',
  },
  {
    icon: mdiLinkedin,
    href: 'https://linkedin.com/in/evaneliasyoung',
    name: '/evaneliasyoung',
  },
  {
    icon: mdiInstagram,
    href: 'https://instagram.com/evaneliasyoung',
    name: '/evaneliasyoung',
  },
];
//#endregion

@customElement('app-index-page')
export default class IndexPageElement extends LitElement {
  //#region Static Members
  static route: Route & {display: string} = {
    name: 'index',
    pattern: '',
    display: 'Home',
  };

  static styles: CSSResultGroup = [
    css`
      app-container {
        ${centerText}
      }
    `,
    flyin,
    css`
      a {
        text-decoration: none;
      }
    `,
    css`
      #typed-container .title {
        font-size: 2.4rem;
      }
    `,
    mediaSM(
      css`
        #typed-container .title {
          font-size: 4rem;
        }
      `
    ),
    css`
      .tech app-icon,
      .social app-icon {
        margin: 0 0.75rem 0 0;
      }
    `,
    css`
      #technologies {
        ${displayGrid}
        ${centerJustified}
      grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, 15rem);
      }
    `,
    css`
      .tech {
        ${displayFlex} ${leftText}
      }
    `,
    css`
      #socials {
        ${displayFlex} ${evenlyJustified} ${wrap}
      }
    `,
    css`
      .tech app-icon {
        --icon-size: 60px;
      }
    `,
    css`
      .social app-icon {
        --icon-size: 40px;
      }
    `,
  ];
  //#endregion

  //#region Render
  protected render = () => html`
    <app-container id="typed-container" centered landing>
      <wl-title class="title" nowrap level="1">
        <app-typer text="Howdy, I'm Evan" wait="2720"></app-typer>
      </wl-title>
      <wl-text class="flyin" style="--flyin: 4;" size="large"
        >I like doing front-end development and making music</wl-text
      >
    </app-container>

    <app-container id="tech-container">
      <wl-title class="title" level="2">
        I've always been a fan of tech.
      </wl-title>
      <div id="technologies">
        ${technologies.map(
          ({icon, name, desc}) => html`
            <div class="tech">
              <app-icon icon="${icon}" color="shade"></app-icon>
              <aside>
                <wl-title class="title" level="4">${name}</wl-title>
                <wl-text>${desc}</wl-text>
              </aside>
            </div>
          `
        )}
      </div>
    </app-container>

    <app-container id="chat-container">
      <wl-title class="title" level="2">
        Got a burning question? Reach out.
      </wl-title>
      <wl-text>
        With a variety of different ways to contact me you should find a
        suitable medium below.
      </wl-text>
      <div id="socials">
        ${socials.map(
          ({icon, name, href}) => html`
            <div class="social">
              <a href="${href}">
                <wl-button flat inverted>
                  <app-icon icon="${icon}"></app-icon>
                  <span>${name}</span>
                </wl-button>
              </a>
            </div>
          `
        )}
      </div>
    </app-container>
  `;
  //#endregion
}
