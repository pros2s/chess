import './styles/index.css';
import { Theme } from '@/features/Theme';
import { PlayGround } from '@/widgets/PlayGround';

import { useTheme } from './hooks/useTheme';

export function App() {
  useTheme();

  return (
    <>
      <Theme />
      <PlayGround />
    </>
  );
}

App.displayName = 'App';
