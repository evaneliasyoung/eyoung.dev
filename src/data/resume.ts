/**
 * @file      resume.ts
 * @brief     Resume constant data.
 *
 * @author    Evan Elias Young
 * @date      2022-02-23
 * @date      2022-02-23
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

import {
  IEducation,
  IExperience,
  IRecognition,
} from '../models/interfaces/resume.interfaces';
import {renderRange} from '../utils';

export const education: IEducation = {
  edu: 'Missouri University of Science and Technology',
  deg: 'Bachelor of Science, Computer Science',
  minor: ['Math', 'Spanish'],
  grad: 'May 2023',
  gpa: 3.83,
};

export const experiences: IExperience[] = [
  {
    work: 'Positronic AI',
    loc: 'Chesterfield, Missouri',
    title: 'Software Engineer Intern',
    date: 'Summer / Winter 2020, 2021',
    bullets: [
      'Used modern web technologies to develop remote work applications',
      'Worked with clients to provide stable and leading-edge software',
      'Collaborated with other developers to fix bugs and improve performance',
      'Resolved issues and added features according to QA and user feedback',
      'Documented and refactored previous code according to standards',
    ],
  },
  {
    work: 'Missouri University of Science and Technology',
    loc: 'Rolla, Missouri',
    title: 'Computer Science Teaching Assistant',
    date: renderRange('Jan 2020', 'May 2020'),
    bullets: [
      "Asked and answered student questions, and tested students' lab work",
      'Helped design the course, constructed tests, prepared materials',
      'Worked with students one-on-one and in group sessions',
      'Learned about problems students were having with the course material',
      'Developed grade automation tools and material delivery software',
    ],
  },
  {
    work: 'Alliance Credit Union',
    loc: 'Fenton, Missouri',
    title: 'Information Technology Specialist',
    date: renderRange('Nov 2017', 'Jun 2019'),
    bullets: [
      'Maintained and administered Office365 and Active Directory accounts',
      'Troubleshot computer hardware, systems software, applications software',
      'Implemented and provided support for voice services and equipment',
      'Recommended changes to improve systems and network configurations',
      'Wrote scripts to automate system configuration and patching',
    ],
  },
];

export const recognitions: IRecognition[] = [
  {
    name: "Missouri S&T College of Computing Dean's List",
    date: renderRange('Fall 2019', 'Present'),
  },
  {
    name: 'FBLA IT Help Desk National Top 5',
    date: 'Jul 2019',
  },
  {
    name: 'SkillsUSA Software Development National Top 5',
    date: 'Jun 2019',
  },
  {
    name: 'SkillsUSA Web Design National Champion',
    date: 'Jun 2018',
  },
];
