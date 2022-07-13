/**
 * @file      theme.service.ts
 * @brief     The background theme service.
 *
 * @author    Evan Elias Young
 * @date      2021-09-04
 * @date      2021-09-08
 * @copyright Copyright 2021 Evan Elias Young. All rights reserved.
 */

import Theme from '../models/enums/theme.enum';
import {singleton} from '../models/models/singleton.model';
import Storable, {StringConverter} from '../models/models/storable.model';
import {next} from '../utils';

@singleton
export default class ThemeService {
  readonly FALLBACK_THEME: Theme = Theme.DARKER;
  readonly THEMES: Theme[] = Object.values(Theme);
  readonly MEDIA_MATCHER = (theme: Theme) =>
    window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;

  #store = new Storable<string>('theme', StringConverter, this.FALLBACK_THEME);

  set theme(theme: Theme) {
    if (this.isTheme(theme)) {
      this.#store.val = theme;
      this.apply();
    }
  }
  get theme(): Theme {
    return (this.#store.val as Theme) ?? this.mediaTheme ?? this.FALLBACK_THEME;
  }
  get mediaTheme(): Theme | undefined {
    return this.THEMES.find(this.MEDIA_MATCHER);
  }

  asTheme = (theme?: string | null) =>
    this.isTheme(theme) ? theme : undefined;
  isTheme(theme?: string | null): theme is Theme {
    return (this.THEMES as string[]).includes(theme ?? '');
  }

  apply = () => {
    window.document.documentElement.setAttribute('theme', this.theme);
  };
  next = () => (this.theme = next(this.THEMES, this.theme));
}
