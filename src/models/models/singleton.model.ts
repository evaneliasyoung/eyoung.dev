/**
 * @file      singleton.model.ts
 * @brief     The Singleton model.
 *
 * @author    Evan Elias Young
 * @date      2021-09-06
 * @date      2022-02-17
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import {Abstract, Constructor, ConstructorArgs} from '../types/object.types';
import {Singleton, SINGLETON_KEY} from '../types/singleton.types';

export const singleton = <T extends Constructor<T>>(Klass: T) =>
  new Proxy(Klass, {
    construct: (
      target: Singleton<T>,
      args: ConstructorArgs,
      newTarget: Abstract<T>
    ) =>
      target.prototype !== newTarget.prototype
        ? Reflect.construct(target, args, newTarget)
        : target[SINGLETON_KEY] ??
          (target[SINGLETON_KEY] = Reflect.construct(target, args, newTarget)),
  });
