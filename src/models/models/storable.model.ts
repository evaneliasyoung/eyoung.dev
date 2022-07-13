/**
 * @file      storable.model.ts
 * @brief     Represents a storable variable.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-04
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import IStorableConverter from '../interfaces/storable-converter.interface';

interface SupportsToString {
  /**
   * Returns a string representation of an object.
   */
  toString: () => string;
}

const thisToString = <T extends SupportsToString>(thisArg: T) =>
  thisArg.toString();

export const StringConverter: IStorableConverter<string> = {
  read: (stored: string) => stored,
  write: (value: string) => value,
};

export const IntConverter: IStorableConverter<number> = {
  read: parseInt,
  write: thisToString,
};

export const FloatConverter: IStorableConverter<number> = {
  read: parseFloat,
  write: thisToString,
};

export const BooleanConverter: IStorableConverter<boolean> = {
  read: (stored: string) => stored === 'true',
  write: thisToString,
};

export const JSONConverter: IStorableConverter<object> = {
  read: JSON.parse,
  write: JSON.stringify,
};

export default class Storable<T = string> {
  #key: string;
  #converters: IStorableConverter<T>;

  set store(value: string | null) {
    if (value !== null) localStorage.setItem(this.#key, value);
    else localStorage.removeItem(this.#key);
  }
  get store(): string | null {
    return localStorage.getItem(this.#key);
  }
  set val(value: T | undefined) {
    this.store = value !== undefined ? this.#converters.write(value!) : null;
  }
  get val(): T | undefined {
    return this.has ? this.#converters.read(this.store!) : undefined;
  }
  get has(): boolean {
    return this.store !== null;
  }

  constructor(
    key: string,
    converters: IStorableConverter<T>,
    defaultValue?: T
  ) {
    this.#key = key;
    this.#converters = converters;
    if (defaultValue !== undefined && !this.has) this.val = defaultValue;
  }
}
