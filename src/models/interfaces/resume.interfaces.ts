/**
 * @file      resume.interfaces.ts
 * @brief     Interfaces for the Resume page.
 *
 * @author    Evan Elias Young
 * @date      2022-02-23
 * @date      2022-02-23
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

export interface IEducation {
  edu: string;
  deg: string;
  minor?: string[];
  grad: string;
  gpa: number;
}

export interface IExperience {
  work: string;
  loc: string;
  title: string;
  date: string;
  bullets: string[];
}

export interface IRecognition {
  name: string;
  date: string;
}
