import { Board } from '@/entities/Board';
import './styles/index.css';
import { Theme } from '@/features/Theme';

import { useTheme } from './hooks/useTheme';

export function App() {
  useTheme();

  return (
    <>
      <Theme />
      <Board size={700} isFlipped />
    </>
  );
}

App.displayName = 'App';
