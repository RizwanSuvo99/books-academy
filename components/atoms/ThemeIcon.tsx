interface ThemeIconProps {
  isOn: boolean;
}

export const ThemeIcon = ({ isOn }: ThemeIconProps) => {
  return (
    <span className="text-xs select-none">
      {isOn ? "🌙" : "☀️"}
    </span>
  );
};
