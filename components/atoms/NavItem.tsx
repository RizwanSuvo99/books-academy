import React from 'react';

interface NavItemProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, href = '#', onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
    >
      {label}
    </a>
  );
};

export default NavItem;
