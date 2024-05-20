import { makeAutoObservable } from 'mobx';

import { APP_THEME } from '../consts/localeStorage';
import { ThemeType } from '../types/ThemeType';

export class Theme {
  theme: ThemeType = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  changeTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(APP_THEME, this.theme);
  }

  setTheme(theme: ThemeType) {
    this.theme = theme;
    localStorage.setItem(APP_THEME, this.theme);
  }
}
