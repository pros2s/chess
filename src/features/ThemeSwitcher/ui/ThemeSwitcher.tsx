import { observer } from 'mobx-react-lite';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { Theme } from '@/app/model/Theme';
import { classNames } from '@/shared/lib/helpers/classNames';

import { useChangeTheme } from '../hooks/useChangeTheme';

import cls from './Theme.module.css';

interface ThemeProps {
  theme: Theme;
  className?: string;
}

export const ThemeSwitcher = observer(({ className, theme }: ThemeProps) => {
  const handleChangeTheme = useChangeTheme(theme);

  return (
    <button
      className={classNames(cls.theme, [className])}
      type='button'
      onClick={handleChangeTheme}
    >
      {theme.theme === 'dark' ? <MdLightMode size='24px' /> : <MdDarkMode size='24px' />}
    </button>
  );
});

ThemeSwitcher.displayName = 'Theme';
