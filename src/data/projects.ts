/**
 * @file      projects.ts
 * @brief     Projects constant data.
 *
 * @author    Evan Elias Young
 * @date      2022-02-23
 * @date      2022-02-23
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

import {
  mdiMicrosoftVisualStudioCode,
  mdiNodejs,
  mdiLanguageTypescript,
  mdiAngularjs,
  mdiDocker,
  mdiGithub,
  mdiLanguageJavascript,
  mdiMicrosoftAzureDevops,
  mdiPolymer,
  mdiSpotify,
} from '@mdi/js';
import {
  IProjectInfo,
  IStackInfo,
} from '../models/interfaces/projects.interfaces';
import {
  mdiIllustrator,
  mdiMongoDB,
  mdiNightscout,
  mdiPositronicAlt,
  mdiRedis,
  mdiSocketIO,
} from '../styles/mdi-fill.styles';

export const stackVSCode: IStackInfo = {
  icon: mdiMicrosoftVisualStudioCode,
  name: 'VS Code',
};
export const stackNodeJS: IStackInfo = {icon: mdiNodejs, name: 'NodeJS'};
export const stackMongoDB: IStackInfo = {icon: mdiMongoDB, name: 'MongoDB'};
export const stackTypescript: IStackInfo = {
  icon: mdiLanguageTypescript,
  name: 'Typescript',
};
export const stackSocketIO: IStackInfo = {icon: mdiSocketIO, name: 'Socket.IO'};

export const rtcInfo: IProjectInfo = {
  stack: [
    {icon: mdiMicrosoftAzureDevops, name: 'Azure'},
    stackNodeJS,
    {icon: mdiRedis, name: 'Redis'},
    {icon: mdiAngularjs, name: 'AngularJS'},
    stackTypescript,
    stackSocketIO,
  ],
  links: [
    {
      icon: mdiPositronicAlt,
      name: 'Read More',
      href: 'https://www.positronic.ai/case-studies/rtc/',
    },
  ],
};

export const cgmInfo: IProjectInfo = {
  stack: [
    {icon: mdiDocker, name: 'Docker'},
    stackNodeJS,
    stackMongoDB,
    {icon: mdiLanguageJavascript, name: 'Javascript'},
    stackSocketIO,
  ],
  links: [
    {
      icon: mdiGithub,
      name: 'Read More',
      href: 'https://github.com/nightscout/cgm-remote-monitor',
    },
    {
      icon: mdiNightscout,
      name: 'Live Demo',
      href: 'https://cgm.evaneliasyoung.com/',
    },
  ],
};

export const siteInfo: IProjectInfo = {
  stack: [
    stackVSCode,
    stackNodeJS,
    {icon: mdiIllustrator, name: 'Illustrator'},
    {icon: mdiPolymer, name: 'Lit'},
    stackTypescript,
    {icon: mdiSpotify, name: 'Midwest Emo'},
  ],
  links: [],
};
