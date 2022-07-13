/**
 * @file      app.styles.ts
 * @brief     Reusable styles.
 *
 * @author    Evan Elias Young
 * @date      2021-09-12
 * @date      2021-09-12
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {css, CSSResult, unsafeCSS} from 'lit-element';

export const square = (size: string) =>
  unsafeCSS(`width: ${size}; height: ${size};`);

export const flyin = css`
  @keyframes flyin {
    to {
      top: 0px;
      opacity: var(--flyin-to, unset);
    }
  }
  .flyin {
    top: var(--flyin-top, 2rem);
    animation: var(--flyin-time, 500ms) calc(var(--flyin, 0) * 125ms) forwards
      flyin;
    opacity: 0;
    position: relative;
  }
  .flyin.over {
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  wl-text.flyin {
    --flyin-to: var(--text-opacity, 0.8);
  }
`;

export const mediaSM = (styles: CSSResult) =>
  css`
    @media (min-width: 576px) {
      ${styles}
    }
  `;
export const mediaMD = (styles: CSSResult) =>
  css`
    @media (min-width: 768px) {
      ${styles}
    }
  `;
export const mediaLG = (styles: CSSResult) =>
  css`
    @media (min-width: 992px) {
      ${styles}
    }
  `;
export const mediaXL = (styles: CSSResult) =>
  css`
    @media (min-width: 1200px) {
      ${styles}
    }
  `;
export const mediaXXL = (styles: CSSResult) =>
  css`
    @media (min-width: 1400px) {
      ${styles}
    }
  `;
