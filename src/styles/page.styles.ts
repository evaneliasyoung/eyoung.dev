/**
 * @file      page.styles.ts
 * @brief     Common styles for pages.
 *
 * @author    Evan Elias Young
 * @date      2022-02-23
 * @date      2022-02-23
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

import {css, CSSResult} from 'lit-element';
import {flyin, mediaSM} from './app.styles';
import {displayFlex} from './base.styles';
import {centerJustified} from './flex.styles';

export const landingStyles: CSSResult[] = [
  css`
    #landing-container div {
      ${displayFlex} ${centerJustified};
      gap: 1rem;
    }
  `,
  css`
    #landing-container app-icon {
      --icon-size: 5rem;
    }
  `,
  mediaSM(
    css`
      #landing-container app-icon {
        --icon-size: 6rem;
      }
    `
  ),
  flyin,
];
