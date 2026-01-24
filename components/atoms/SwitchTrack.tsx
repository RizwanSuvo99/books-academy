'use client';
import React from 'react';

interface SwitchTrackProps {
  isOn: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

export const SwitchTrack = ({ isOn, onClick, children }: SwitchTrackProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-12 h-6 rounded-full p-1 cursor-pointer
        flex items-center
        transition-colors duration-300
        ${isOn ? 'bg-indigo-600' : 'bg-gray-300'}
      `}
    >
      {children}
    </div>
  );
};
