/**
 * @file      projects.interfaces.ts
 * @brief     Interfaces for the Projects page.
 *
 * @author    Evan Elias Young
 * @date      2022-02-23
 * @date      2022-02-23
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

export interface IStackInfo {
  icon: string;
  name: string;
}

export interface ILinkInfo {
  icon: string;
  name: string;
  href: string;
}

export interface IProjectInfo {
  stack: IStackInfo[];
  links: ILinkInfo[];
}
