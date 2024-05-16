import { useLayoutEffect } from 'preact/hooks';

import { APP_THEME, ThemeType } from '@/features/Theme';

export const useTheme = () => {
  const localTheme = localStorage.getItem(APP_THEME) as ThemeType | null;

  useLayoutEffect(() => {
    const currentTheme = localTheme || 'dark';

    document.documentElement.classList.add(currentTheme);
  }, [localTheme]);
};
