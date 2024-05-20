import './styles/index.css';
import { observer } from 'mobx-react-lite';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { PlayGround } from '@/widgets/PlayGround';

import { useTheme } from './hooks/useTheme';
import { Theme } from './model/Theme';

const theme = new Theme();

export const App = observer(() => {
  useTheme(theme);

  return (
    <>
      <ThemeSwitcher theme={theme} />
      <PlayGround />
    </>
  );
});

App.displayName = 'App';
