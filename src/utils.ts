/**
 * @file      utils.ts
 * @brief     General project utilities.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2022-02-17
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

export const {floor, ceil, abs} = Math;

export const timeout = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const random = {
  /**
   * Returns a pseudorandom number between 0 and 1.
   * @returns A pseudorandom number between 0 and 1.
   */
  random: () => Math.random(),
  /**
   * Returns a pseudorandom float between min and max.
   * @param min The minimum allowed value.
   * @param max The maximum allowed value.
   * @returns A pseudorandom float between min and max.
   */
  float: (min: number, max: number) => random.random() * (max - min) + min,
  /**
   * Returns a pseudorandom integer between min and max.
   * @param min The minimum allowed value.
   * @param max The maximum allowed value.
   * @returns A pseudorandom integer between min and max.
   */
  int: (min: number, max: number) => round(random.float(min, max)),
  /**
   * Returns a pseudorandom boolean.
   * @returns A pseudorandom boolean.
   */
  boolean: () => random.random() > 0.5,
  /**
   * Returns a randomly selected element from the iterable.
   * @param iter An iterable of options to choose from.
   * @returns A randomly selected element from the iterable.
   */
  choose: <T>(...iter: T[]) => iter[random.int(0, iter.length - 1)],
  /**
   * Returns a randomly selected set of elements from the iterable.
   * @param amount The amount of elements to select from the iterable.
   * @param iter An iterable of options to choose from.
   * @returns A randomly selected set element from the iterable.
   */
  choice: <T>(amount: number, ...iter: T[]) => {
    const ret = new Set<T>();
    while (ret.size < amount) ret.add(random.choose(...iter));
    return Array.from(ret);
  },
} as const;

export const round = (x: number, digits = 0) =>
  digits === 0 ? Math.round(x) : Math.round(x * 10 ** digits) / 10 ** digits;

export const iota = (stop: number, step = 1) => range(0, stop, step);

export const range = (start: number, stop?: number, step = 1) => {
  if (typeof stop === 'undefined') [stop, start] = [start, 0];
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) return [];

  const result: number[] = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) result.push(i);
  return result;
};

export const divmod = (x: number, d: number) => [floor(x / d), x % d];

export const next = <T>(iter: T[], it: T) =>
  iter[(iter.indexOf(it) + 1) % iter.length];

export const yyyydlt = (year: number) => new Date().getFullYear() - year;

export const renderRange = (beg: string, end: string) => [beg, end].join(' – ');

export const toTitleCase = (text: string) =>
  text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const HEX_MATCH = new RegExp('^#?([A-Fa-f0-9]{6})$');
