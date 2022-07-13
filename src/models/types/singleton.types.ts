/**
 * @file      singleton.types.ts
 * @brief     The Singleton type.
 *
 * @author    Evan Elias Young
 * @date      2022-02-17
 * @date      2022-02-17
 * @copyright Copyright 2022 Evan Elias Young. All rights reserved.
 */

import {Constructor, ConstructorArgs} from './object.types';

export const SINGLETON_KEY = Symbol();

export type Singleton<T extends Constructor<T>> = T & {
  [SINGLETON_KEY]: T extends new (...args: ConstructorArgs) => infer I
    ? I
    : never;
};
