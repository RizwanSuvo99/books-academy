'use client';
import { Theme } from '@/theme/theme';
import { SwitchThumb } from '../atoms/SwitchThumb';
import { SwitchTrack } from '../atoms/SwitchTrack';
import { ThemeIcon } from '../atoms/ThemeIcon';

interface SwitchToggleProps {
  value: boolean;
  onToggle: (theme: Theme) => void;
}

export const SwitchToggle = ({ value, onToggle }: SwitchToggleProps) => {
  const handleClick = () => {
    const newTheme: Theme = value ? 'light' : 'dark';
    onToggle(newTheme);
  };

  return (
    <SwitchTrack isOn={value} onClick={handleClick}>
      <SwitchThumb isOn={value}>
        <ThemeIcon isOn={value} />
      </SwitchThumb>
    </SwitchTrack>
  );
};
