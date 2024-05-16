import { MdDarkMode, MdLightMode } from 'react-icons/md';

import { classNames } from '@/shared/lib/helpers/classNames';

import { useThemeChange } from '../hooks/useThemeChange';

import cls from './Theme.module.css';

interface ThemeProps {
  className?: string;
}

export const Theme = ({ className }: ThemeProps) => {
  const { handleChangeTheme, theme } = useThemeChange();

  return (
    <button
      className={classNames(cls.theme, [className])}
      type='button'
      onClick={handleChangeTheme}
    >
      {theme === 'dark' ? <MdLightMode size='24px' /> : <MdDarkMode size='24px' />}
    </button>
  );
};

Theme.displayName = 'Theme';
