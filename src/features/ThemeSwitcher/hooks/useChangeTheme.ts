import { Theme } from '@/app/model/Theme';

export const useChangeTheme = (theme: Theme) => () => {
  theme.changeTheme();

  document.documentElement.classList.remove('dark');
  document.documentElement.classList.remove('light');

  document.documentElement.classList.add(theme.theme);
};
