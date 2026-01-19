import React from 'react';
import Logo from '../atoms/Logo';
import SiteName from '../atoms/SiteName';
import NavItemsList from '../molecules/NavItemsList';

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
    <nav className="w-full flex justify-between items-center px-4 py-2 bg-white shadow-md">
      <div className="flex items-center space-x-1">
        <Logo src={logoSrc} alt={siteName} size="h-15 w-15" />
        <SiteName name={siteName} />
      </div>
      <NavItemsList items={menuItems} />
    </nav>
  );
};

export default Navbar;
