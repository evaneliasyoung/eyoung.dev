/**
 * @file      storable-converter.interface.ts
 * @brief     Storable converter interface.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-04
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

export default interface IStorableConverter<T> {
  read: (stored: string) => T;
  write: (value: T) => string;
}
