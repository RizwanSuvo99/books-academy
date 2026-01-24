interface SwitchThumbProps {
  isOn: boolean;
  children?: React.ReactNode;
}

export const SwitchThumb = ({ isOn, children }: SwitchThumbProps) => {
  return (
    <div
      className={`
        w-5 h-5 rounded-full bg-white shadow-md
        flex items-center justify-center
        transform transition-transform duration-300
        ${isOn ? 'translate-x-6' : 'translate-x-0'}
      `}
    >
      {children}
    </div>
  );
};
