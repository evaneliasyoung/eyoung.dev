/**
 * @file      object.types.ts.ts
 * @brief     Object types.
 *
 * @author    Evan Elias Young
 * @date      2021-09-06
 * @date      2021-09-06
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

export type ConstructorArgs = any[]; // eslint-disable-line
export type Prototype<T> = {prototype: T};
export type Abstract<T> = Function & Prototype<T>;
export type Constructor<T> = new (...args: ConstructorArgs) => T;
export type Class<T> = Abstract<T> | Constructor<T>;
