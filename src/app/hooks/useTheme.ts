import { useLayoutEffect } from 'preact/hooks';

import { APP_THEME } from '../consts/localeStorage';
import { Theme } from '../model/Theme';
import { ThemeType } from '../types/ThemeType';

export const useTheme = (theme: Theme) => {
  const localTheme = localStorage.getItem(APP_THEME) as ThemeType | null;

  useLayoutEffect(() => {
    const currentTheme = localTheme || 'dark';

    document.documentElement.classList.add(currentTheme);
    theme.setTheme(currentTheme);
  }, [localTheme, theme]);
};
