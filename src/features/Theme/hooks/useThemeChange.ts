import { useEffect, useState } from 'preact/hooks';

import { APP_THEME } from '../consts/localeStorage';
import { ThemeType } from '../types/ThemeType';

export const useThemeChange = () => {
  const [theme, setTheme] = useState<ThemeType>('dark');

  // init
  useEffect(() => {
    const localTheme = localStorage.getItem(APP_THEME) as ThemeType | null;

    if (localTheme) setTheme(localTheme);
  }, []);

  // handler
  const handleChangeTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem(APP_THEME, newTheme);

      return newTheme;
    });
  };

  return { handleChangeTheme, theme };
};
