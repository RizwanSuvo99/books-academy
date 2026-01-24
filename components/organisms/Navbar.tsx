'use client';

import React from 'react';
import Logo from '../atoms/Logo';
import SiteName from '../atoms/SiteName';
import NavItemsList from '../molecules/NavItemsList';
import { ThemeToggle } from './ThemeToggle';

interface NavItemData {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface NavbarProps {
  logoSrc: string;
  siteName: string;
  menuItems: NavItemData[];
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, siteName, menuItems }) => {
  return (
    <nav className="w-full flex justify-between items-center px-4 py-2 shadow-md transition-colors duration-300 bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark">
      <div className="flex items-center space-x-1">
        <Logo src={logoSrc} alt={siteName} size="h-15 w-15" />
        <SiteName name={siteName} />
      </div>
      <NavItemsList items={menuItems} />
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
