import React from 'react';
import NavItem from '../atoms/NavItem';

interface NavItemData {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface NavItemsListProps {
  items: NavItemData[];
}

const NavItemsList: React.FC<NavItemsListProps> = ({ items }) => {
  return (
    <div className="flex space-x-4">
      {items.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </div>
  );
};

export default NavItemsList;
