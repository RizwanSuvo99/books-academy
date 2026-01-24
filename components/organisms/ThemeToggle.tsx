'use client';

import { useTheme } from '@/theme/theme';
import { SwitchToggle } from '../molecules/SwitchToogle';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return <SwitchToggle value={theme === 'dark'} onToggle={toggleTheme} />;
};
